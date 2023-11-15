import express from 'express'
const path = require('path')
import bodyParser from 'body-parser'
import helmet from 'helmet'
import { compressionMiddleware } from './middleware/compression'
import { limiter } from './middleware/limiter'

const app = express()

app.use(helmet())
app.use(compressionMiddleware())
app.use(limiter)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Reduce Fingerprinting
app.disable('x-powered-by')
app.disable('etag')

app.use(
  express.static(path.join(__dirname, '../public'), {
    etag: false,
  })
)

app.get('*', function (_req, res) {
  res.sendFile(path.join(__dirname, '../public/', 'index.html'), {
    etag: false,
  })
})

module.exports = app
