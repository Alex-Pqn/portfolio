import rateLimit from 'express-rate-limit'

// Rate limiting middleware
export const limiter = rateLimit({
  windowMs: 300 * 1000, // 5 minutes
  max: 1000, // limit each IP to 850 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Rate limiting contact
export const limiterContact = rateLimit({
  windowMs: 600 * 1000, // 10 minutes
  max: 50, // limit each IP to 50 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})
