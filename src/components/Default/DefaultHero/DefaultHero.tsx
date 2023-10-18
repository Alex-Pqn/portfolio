import styles from './DefaultHero.module.scss'
import PropTypes, { InferProps } from 'prop-types'

const Props = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

type PropsTypes = InferProps<typeof Props>

const DefaultHero = ({ title, description }: PropsTypes): React.JSX.Element => {
  return (
    <section className={styles['container']}>
      <div className={styles['content']}>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : ''}
      </div>
    </section>
  )
}

DefaultHero.propTypes = Props

export default DefaultHero
