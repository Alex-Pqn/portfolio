import { requestOptions } from '@/_helpers/request-options'
import { contactRoutes } from '../config/api/routes/contact.routes.config'
import { Contact } from '@/@types/Contact'

async function sendOne(contact: Contact) {
  let json

  try {
    const response = await fetch(
      contactRoutes.postContact(),
      requestOptions.post(contact)
    )
    json = await response.json()
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Unexpected token < in JSON
      console.error('There was a SyntaxError', error)
    } else {
      console.error('There was an error', error)
    }
  }

  if (json) {
    return json
  }
}

export const contactService = {
  sendOne,
}
