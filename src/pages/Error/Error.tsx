import styles from './Error.module.scss'
import { Helmet } from 'react-helmet-async'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'
import { Link } from 'react-router-dom'
import IconArrowRight from '@/components/Icon/IconArrowRight/IconArrowRight'

const Error = (): React.JSX.Element => {
  return (
    <>
      {/* Head */}
      <Helmet>
        <title>Page introuvable • Alexandre Paquien</title>
        <meta name="robots" content="noindex,follow" />
      </Helmet>
      {/* Container */}
      <div className={styles.container}>
        {/* DefaultHero */}
        <DefaultHero
          title={'Page introuvable.'}
          description={"La page que vous avez demandé n'existe pas."}
        />

        {/* Content */}
        <div className={styles.content}>
          <section className={styles.content__home}>
            <Link to={'/'}>
              Retourner à l'accueil <IconArrowRight size="27px" />
            </Link>
          </section>
        </div>
      </div>
    </>
  )
}

export default Error
