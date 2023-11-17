import Joi from 'joi'
import tlds from 'tlds'
import sanitizeHtml from 'sanitize-html'

const customJoi = Joi.extend((joi) => {
  return {
    type: 'string',
    base: joi.string(),
    rules: {
      htmlStrip: {
        validate(value) {
          return sanitizeHtml(value, {
            allowedTags: [],
            allowedAttributes: {},
          })
        },
      },
    },
  }
})

export const contactSchema = customJoi
  .object({
    name: customJoi.string().min(5).max(32).htmlStrip().required(),
    phone: customJoi
      .string()
      .min(5)
      .max(32)
      .allow(null, '')
      .htmlStrip()
      .pattern(
        /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/
      ),
    email: customJoi
      .string()
      .email({
        tlds: {
          allow: tlds,
        },
      })
      .min(5)
      .max(32)
      .htmlStrip()
      .required(),
    subject: customJoi.string().min(5).max(100).htmlStrip().required(),
    message: customJoi.string().min(25).max(5000).htmlStrip().required(),
  })
  .required()
