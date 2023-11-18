import styles from './ContactForm.module.scss'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { contactSchema } from '@/_models/contact.model'
import { Contact as ContactT } from '@/@types/Contact'
import { contactService } from '@/_services/contact.service'
import { useState } from 'react'
import { motion as m } from 'framer-motion'

const animation = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  hidden: {
    transition: {
      when: 'afterChildren',
    },
  },
}
const animationItem = {
  hidden: { y: 35, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

function ContactForm() {
  const [errorStatus, setErrorStatus] = useState('')
  const [successStatus, setSuccessStatus] = useState('')
  const [isFormSended, setIsFormSended] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactT>({ resolver: joiResolver(contactSchema) })

  const resetFormStatus = (timeBeforeReset: number) =>
    setTimeout(() => {
      setSuccessStatus('')
      setErrorStatus('')
    }, timeBeforeReset)

  function formSuccess(message: string) {
    setSuccessStatus(message)
    reset()
    resetFormStatus(7500)
  }
  function formError(error: string) {
    setErrorStatus(error)
    resetFormStatus(5000)
  }

  function sendForm(contact: ContactT) {
    resetFormStatus(0)
    setIsFormSended(true)

    contactService
      .sendOne(contact)
      .then((res) => {
        setIsFormSended(false)
        if (res.error) formError(res.error)
        else if (res.message) formSuccess(res.message)
      })
      .catch(() => {
        setIsFormSended(false)
        formError(
          "Une erreur empêchant l'envoie du formulaire est survenue. Veuillez réessayer dans un instant."
        )
      })
  }

  return (
    <m.form
      onSubmit={handleSubmit(sendForm)}
      className={styles.contactForm}
      initial="hidden"
      animate="visible"
      variants={animation}
    >
      {/* Top */}
      <m.div className={styles.contactForm__top} variants={animationItem}>
        <label htmlFor="name" className={styles.contactForm__field}>
          <span className={styles['contactForm__field-label']}>Nom*</span>
          <input
            id="name"
            className={styles['contactForm__field-input']}
            type="text"
            {...register('name')}
          />

          <p className={styles['contactForm__field-error']}>
            {errors.name && errors.name.message}
          </p>
        </label>
      </m.div>

      {/* Middle */}
      <m.div className={styles.contactForm__middle} variants={animationItem}>
        <label htmlFor="email" className={styles.contactForm__field}>
          <span className={styles['contactForm__field-label']}>Email*</span>
          <input
            id="email"
            className={styles['contactForm__field-input']}
            type="email"
            {...register('email')}
          />

          <p className={styles['contactForm__field-error']}>
            {errors.email && errors.email.message}
          </p>
        </label>

        <label htmlFor="phone" className={styles.contactForm__field}>
          <span className={styles['contactForm__field-label']}>Téléphone</span>
          <input
            id="phone"
            className={styles['contactForm__field-input']}
            type="phone"
            {...register('phone')}
          />

          <p className={styles['contactForm__field-error']}>
            {errors.phone && errors.phone.message}
          </p>
        </label>
      </m.div>

      {/* Bottom */}
      <m.div className={styles.contactForm__bottom} variants={animationItem}>
        <label htmlFor="subject" className={styles.contactForm__field}>
          <span className={styles['contactForm__field-label']}>Sujet*</span>
          <input
            id="subject"
            className={styles['contactForm__field-input']}
            type="text"
            {...register('subject')}
          />

          <p className={styles['contactForm__field-error']}>
            {errors.subject && errors.subject.message}
          </p>
        </label>

        <label htmlFor="message" className={styles.contactForm__field}>
          <span className={styles['contactForm__field-label']}>Message*</span>
          <textarea
            id="message"
            className={styles['contactForm__field-textarea']}
            {...register('message')}
          />

          <p className={styles['contactForm__field-error']}>
            {errors.message && errors.message.message}
          </p>
        </label>
      </m.div>
      {errorStatus && (
        <span
          className={`${styles.contactForm__status} ${styles['contactForm__status--error']}`}
        >
          {errorStatus}
        </span>
      )}
      {successStatus && (
        <span
          className={`${styles.contactForm__status} ${styles['contactForm__status--success']}`}
        >
          {successStatus}
        </span>
      )}

      <m.input
        disabled={isFormSended}
        type="submit"
        value="Envoyer"
        variants={animationItem}
      />
    </m.form>
  )
}

export default ContactForm
