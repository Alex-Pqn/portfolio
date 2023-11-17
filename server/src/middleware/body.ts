import { NextFunction, Request, Response } from 'express'

export default function bodyMiddleware(
  err: { status: number },
  _req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Enter valid json body' }) // Bad request
  }

  next()
}
