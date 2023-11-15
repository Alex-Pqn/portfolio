import styles from './Contact.module.scss'
import { Helmet } from 'react-helmet-async'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'

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
        <section className={styles.contact}></section>
      </div>
    </>
  )
}

export default Contact
