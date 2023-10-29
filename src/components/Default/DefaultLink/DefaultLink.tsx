import { Link } from 'react-router-dom'
import styles from './DefaultLink.module.scss'
import IconArrowRight from '@/components/Icon/IconArrowRight/IconArrowRight'

interface Props {
  to: string
  text: string
}

const DefaultLink = ({ to, text }: Props): React.JSX.Element => {
  return (
    <div className={styles.container}>
      <Link to={to}>
        {text} <IconArrowRight size="27px" />
      </Link>
    </div>
  )
}

export default DefaultLink
