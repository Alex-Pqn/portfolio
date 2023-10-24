import styles from './Contact.module.scss'
import { Helmet } from 'react-helmet-async'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'

const Contact = (): React.JSX.Element => {
  return (
    <>
      {/* Head */}
      <Helmet>
        <title>Contact • Alexandre Paquien</title>
      </Helmet>
      <div className={styles.container}>
        {/* DefaultHero */}
        <DefaultHero title={'Contact.'} description={'Contactez-moi'} />
        {/* Content */}
        <section className={styles.content}>
          <span>...</span>
        </section>
      </div>
    </>
  )
}

export default Contact
