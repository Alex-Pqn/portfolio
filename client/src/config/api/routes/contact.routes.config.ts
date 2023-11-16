import { getApi } from '../api.config'

const postContact = () => getApi() + '/contact'

export const contactRoutes = {
  postContact,
}
