import styles from './Contact.module.scss'
import { Helmet } from 'react-helmet-async'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'
import { contactService } from '@/_services/contact.service'
import { Contact as ContactT } from '@/@types/Contact'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import Joi from 'joi'
import tlds from 'tlds'

const schema = Joi.object({
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
  object: Joi.string().min(5).max(100).required().label('Object'),
  message: Joi.string().min(25).max(5000).required().label('Message'),
})

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactT>({ resolver: joiResolver(schema) })

  function sendForm(contact: ContactT) {
    contactService.sendOne(contact)
  }

  return (
    <>
      {/* Head */}
      <Helmet>
        <title>Contact • Alexandre Paquien</title>
      </Helmet>

      <div className={styles.container} id="container">
        {/* DefaultHero */}
        <DefaultHero title={'Contact.'} description={'Contactez-moi'} />

        {/* Contact */}
        <section className={styles.contact}>
          <div className={styles.contact__form}>
            <form
              onSubmit={handleSubmit(sendForm)}
              className={styles.contact__form}
            >
              <label htmlFor="name">
                Nom :
                <input id="name" type="text" {...register('name')} />
              </label>
              {errors.name && <span>{errors.name.message}</span>}

              <label htmlFor="phone">
                Téléphone :
                <input id="phone" type="phone" {...register('phone')} />
              </label>
              {errors.phone && <span>{errors.phone.message}</span>}

              <label htmlFor="email">
                Email :
                <input id="email" type="email" {...register('email')} />
              </label>
              {errors.email && <span>{errors.email.message}</span>}

              <label htmlFor="object">
                Object :
                <input id="object" type="text" {...register('object')} />
              </label>
              {errors.object && <span>{errors.object.message}</span>}

              <label htmlFor="message">
                Message :
                <textarea id="message" {...register('message')} />
              </label>
              {errors.message && <span>{errors.message.message}</span>}

              <input type="submit" value="Envoyer" />
            </form>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
