import Joi from 'joi'
import tlds from 'tlds'

const customMessage = {
  'string.empty': 'Ce champ ne peut pas être vide.',
  'string.min': 'Ce champ doit contenir au minimum {#limit} caractères.',
  'string.max': 'Ce champ doit contenir au maximum {#limit} caractères.',
  'any.required': 'Ce champ est requis.',
}

export const contactSchema = Joi.object({
  name: Joi.string().min(5).max(32).required(),
  phone: Joi.string()
    .min(5)
    .max(32)
    .allow(null, '')
    .pattern(
      /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/
    )
    .messages({
      'string.pattern.base': 'Veuillez entrer votre numéro de téléphone.',
    }),
  email: Joi.string()
    .email({
      tlds: {
        allow: tlds,
      },
    })
    .min(5)
    .max(32)
    .required()
    .messages({
      'string.email': 'Veuillez entrer votre email.',
    }),
  subject: Joi.string().min(5).max(100).required(),
  message: Joi.string().min(25).max(5000).required(),
})
  .messages(customMessage)
  .required()
