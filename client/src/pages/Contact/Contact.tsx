import styles from './Contact.module.scss'
import { Helmet } from 'react-helmet-async'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'
import ContactForm from '@/pages/Contact/ContactForm/ContactForm'

function Contact() {
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
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
