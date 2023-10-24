import styles from './Portfolio.module.scss'
import { Helmet } from 'react-helmet-async'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'

const Home = (): React.JSX.Element => {
  return (
    <>
      {/* Head */}
      <Helmet>
        <title>Portfolio • Alexandre Paquien</title>
      </Helmet>
      {/* Container */}
      <div className={styles.container}>
        {/* DefaultHero */}
        <DefaultHero
          title={'Portfolio.'}
          description={'Parcourez mon portfolio'}
        />
        {/* Content */}
        <section className={styles.content}>...</section>
      </div>
    </>
  )
}

export default Home
