import styles from './DefaultHero.module.scss'
import PropTypes, { InferProps } from 'prop-types'

const Props = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

type PropsTypes = InferProps<typeof Props>

const DefaultHero = ({ title, description }: PropsTypes): React.JSX.Element => {
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

DefaultHero.propTypes = Props

export default DefaultHero
