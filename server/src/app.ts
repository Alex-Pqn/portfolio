import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import compressionMiddleware from './middleware/compression'
import httpsOnlyMiddleware from './middleware/httpsOnly'
import headersMiddleware from './middleware/headers'
import { limiter, limiterContact } from './middleware/limiter'
import { Environment } from './config/env.config'
import { Contact as ContactT } from './types/Contact.d'
import { transporter } from './util/transporter'
import { corsAllowedOrigins } from './config/cors.config'
import { contactSchema } from './model/contact.model'

const app = express()

app.use(headersMiddleware)
app.use(
  cors({
    origin: corsAllowedOrigins,
  })
)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: corsAllowedOrigins,
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
// Reduce Fingerprinting
app.disable('x-powered-by')
// Enforce cache
app.disable('etag')

app.post(
  '/api/v1/contact',
  limiterContact,
  async (req: express.Request, res: express.Response) => {
    try {
      const bodyValidate = await contactSchema.validate(req.body)
      const contact: ContactT = bodyValidate.value

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
            error: "Une erreur s'est produite, l'email n'a pas pu être envoyé.",
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
