import compression from 'compression'
import { Request, Response } from 'express'

export default function compressionMiddleware() {
  return compression({
    filter: (req: Request, res: Response): boolean => {
      if (req.headers['x-no-compression']) {
        return false
      }
      return compression.filter(req, res)
    },
  })
}
