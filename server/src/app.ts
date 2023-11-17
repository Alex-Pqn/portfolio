import express, { Response, Request } from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import compressionMiddleware from './middleware/compression'
import httpsOnlyMiddleware from './middleware/httpsOnly'
import headersMiddleware from './middleware/headers'
import bodyMiddleware from './middleware/body'
import { limiter, limiterContact } from './middleware/limiter'
import { Environment } from './config/env.config'
import { Contact as ContactT } from './types/Contact.d'
import { transporter } from './util/transporter'
import { corsOrigins } from './config/cors.config'
import { contactSchema } from './model/contact.model'

const app = express()

// Reduce Fingerprinting
app.disable('x-powered-by')
app.disable('server')
// Enforce cache
app.disable('etag')

app.use(headersMiddleware)
app.use(
  cors({
    origin: corsOrigins,
  })
)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'default-src': corsOrigins,
      },
    },
  })
)
if (Environment.isProd) {
  app.enable('trust proxy')
  app.use(httpsOnlyMiddleware)
}

app.use(compressionMiddleware())
app.use(limiter)

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
    parameterLimit: 50,
  })
)

app.use(bodyMiddleware)

app.post(
  '/api/v1/contact',
  limiterContact,
  async (req: Request, res: Response) => {
    try {
      const contact: ContactT = await contactSchema.validateAsync(req.body)

      transporter.sendMail(
        {
          from: `${contact.email} <${contact.email}>`,
          to: Environment.email.address,
          subject: `${contact.subject}`,
          text: `De: ${contact.name} \n\n${
            contact.message
          } \n\n- - - - - - - - - - - - - - - - - - \n\n${
            contact.phone && `Téléphone: ${contact.phone} \n`
          }E-mail: ${contact.email}`,
        },
        (err) => {
          if (!err)
            return res
              .status(200)
              .json({ message: 'Votre message a bien été envoyé !' })

          res.status(500).json({
            error:
              "Une erreur s'est produite, l'email n'a pas pu être envoyé. Contactez moi via mon adresse mail plus bas !",
          })
        }
      )
    } catch (err) {
      res.status(400).json({
        error:
          "Une erreur s'est produite, les informations du formulaire de contact sont invalides.",
      })
    }
  }
)

app.use(
  express.static(path.join(__dirname, 'public'), {
    etag: false,
  })
)

app.get('*', function (_req, res) {
  res.sendFile(path.join(__dirname, 'public/', 'index.html'), {
    etag: false,
  })
})

export default app
