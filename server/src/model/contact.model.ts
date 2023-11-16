import Joi from 'joi'
import tlds from 'tlds'

export const contactSchema = Joi.object({
  name: Joi.string().min(5).max(32).required().label('name'),
  phone: Joi.string()
    .min(5)
    .max(32)
    .pattern(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/
    )
    .label('Phone'),
  email: Joi.string()
    .email({
      tlds: {
        allow: tlds,
      },
    })
    .min(5)
    .max(32)
    .required()
    .label('Email'),
  subject: Joi.string().min(5).max(100).required().label('Subject'),
  message: Joi.string().min(25).max(5000).required().label('Message'),
})
