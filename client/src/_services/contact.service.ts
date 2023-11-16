import { requestOptions } from '@/_helpers/request-options'
import { contactRoutes } from '../config/api/routes/contact.routes.config'
import { Contact } from '@/@types/Contact'

async function sendOne(contact: Contact) {
  console.log(contactRoutes.postContact())
  return fetch(contactRoutes.postContact(), requestOptions.post(contact))
    .then((res) => res.json())
    .catch((err) => {
      throw err
    })
}

export const contactService = {
  sendOne,
}
