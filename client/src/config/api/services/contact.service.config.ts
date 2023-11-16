import { contactService } from '@/_services/contact.service'

import { isProduction } from '../api.config'

export const getContactService = () => {
  if (isProduction) return contactService
  else return contactService
}
