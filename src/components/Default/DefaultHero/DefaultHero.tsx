import styles from './DefaultHero.module.scss'

interface Props {
  title: string
  description?: string
}

const DefaultHero = ({ title, description }: Props): React.JSX.Element => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__title}>
        <h1>{title}</h1>
      </div>
      <div className={styles.hero__description}>
        {description && <span>{description}</span>}
      </div>
    </section>
  )
}

export default DefaultHero
