import styles from './Portfolio.module.scss'
import { Helmet } from 'react-helmet'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'

const Home = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      {/* Head */}
      <Helmet>
        <title>Portfolio • Alexandre Paquien</title>
      </Helmet>
      {/* DefaultHero */}
      <DefaultHero
        title={'Portfolio.'}
        description={'Parcourez mon portfolio'}
      />
      {/* Content */}
      <section className={styles.content}>...</section>
    </div>
  )
}

export default Home
