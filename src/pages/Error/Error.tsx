import styles from './Error.module.scss'
import { Helmet } from 'react-helmet-async'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'
import DefaultLink from '@/components/Default/DefaultLink/DefaultLink'

const Error = (): React.JSX.Element => {
  return (
    <>
      {/* Head */}
      <Helmet>
        <title>Page introuvable • Alexandre Paquien</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>

      {/* Container */}
      <div className={styles.container} id="container">
        {/* DefaultHero */}
        <DefaultHero
          title={'Page introuvable.'}
          description={"La page que vous avez demandé n'existe pas."}
        />

        {/* Error */}
        <section className={styles.error}>
          <DefaultLink to={'/'} text="Retourner à l'accueil" />
        </section>
      </div>
    </>
  )
}

export default Error
