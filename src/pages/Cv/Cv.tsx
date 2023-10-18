import styles from './Cv.module.scss'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'

const Cv = (): React.JSX.Element => {
  return (
    <div className={styles.container}>
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
