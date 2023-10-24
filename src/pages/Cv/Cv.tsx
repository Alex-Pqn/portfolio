import styles from './Cv.module.scss'
import { Helmet } from 'react-helmet'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'

const Cv = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
      {/* Head */}
      <Helmet>
        <title>CV • Alexandre Paquien</title>
      </Helmet>
      {/* DefaultHero */}
      <DefaultHero title={'CV.'} description={'Découvrez mon CV'} />
      {/* Content */}
      <section className={styles.content}>
        <span>...</span>
      </section>
    </div>
  )
}

export default Cv
