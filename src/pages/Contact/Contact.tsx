import styles from './Contact.module.scss'
import { Helmet } from 'react-helmet'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'

const Contact = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      {/* Head */}
      <Helmet>
        <title>Contact • Alexandre Paquien</title>
      </Helmet>
      {/* DefaultHero */}
      <DefaultHero title={'Contact.'} description={'Contactez-moi'} />
      {/* Content */}
      <section className={styles.content}>
        <span>...</span>
      </section>
    </div>
  )
}

export default Contact
