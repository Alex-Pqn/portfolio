import styles from './Error.module.scss'
import { Helmet } from 'react-helmet'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'

const Error = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      {/* Head */}
      <Helmet>
        <title>Page introuvable • Alexandre Paquien</title>
      </Helmet>
      {/* DefaultHero */}
      <DefaultHero
        title={'Page introuvable.'}
        description={"La page que vous avez demandé n'existe pas ou plus"}
      />
    </div>
  )
}

export default Error
