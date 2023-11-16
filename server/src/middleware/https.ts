import { Environment } from '../config/env.config'
import { NextFunction, Request, Response } from 'express'

export default function httpsMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const isHttps = req.secure

  if (Environment.isProd && !isHttps) {
    return res.redirect('https://' + req.headers.host + req.url)
  }

  return next()
}
