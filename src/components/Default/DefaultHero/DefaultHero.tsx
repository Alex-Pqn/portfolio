import styles from './DefaultHero.module.scss'

interface Props {
  title: string
  description?: string
}

const DefaultHero = ({ title, description }: Props): React.JSX.Element => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__title}>
          <h1>{title}</h1>
        </div>
        <div className={styles.content__description}>
          {description && <span>{description}</span>}
        </div>
      </div>
    </section>
  )
}

export default DefaultHero
