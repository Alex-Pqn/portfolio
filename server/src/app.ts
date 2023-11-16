import express, { Response, Request, NextFunction } from 'express'
const path = require('path')
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'
import { compressionMiddleware } from './middleware/compression'
import { limiter, limiterContact } from './middleware/limiter'
import { config } from './config/config'

const app = express()

app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')

  next()
})

app.use((req: Request, res: Response, next: NextFunction) => {
  const isHttps = req.secure

  if (config.isProd && !isHttps) {
    return res.redirect('https://' + req.headers.host + req.url)
  }

  return next()
})

const allowedOrigins = config.isProd
  ? ["'self'", 'https://fonts.googleapis.com']
  : ["'self'", 'http://localhost:5173', 'https://fonts.googleapis.com']

app.use(
  cors({
    origin: allowedOrigins,
  })
)
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: allowedOrigins,
      },
    },
  })
)
app.use(compressionMiddleware())
app.use(limiter)
app.use(bodyParser.json({ limit: '8kb', strict: true }))
app.use(
  bodyParser.urlencoded({
    limit: '8kb',
    extended: true,
    parameterLimit: 10,
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
    console.log(req.body)
    res.status(200).json('API V1')
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

module.exports = app
