import { NextFunction, Request, Response } from 'express'

export default function headersMiddleware(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  )
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST')

  next()
}
