import rateLimit from 'express-rate-limit'

// Rate limiting middleware
export const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 250, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
