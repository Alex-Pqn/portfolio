import styles from './Error.module.scss'
import { Helmet } from 'react-helmet-async'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'

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
          description={"La page que vous avez demandé n'existe pas ou plus"}
        />
      </div>
    </>
  )
}

export default Error
