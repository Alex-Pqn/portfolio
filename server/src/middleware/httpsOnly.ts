import { NextFunction, Request, Response } from 'express'

export default function httpsOnlyMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.secure) {
    return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`)
  }

  next()
}
