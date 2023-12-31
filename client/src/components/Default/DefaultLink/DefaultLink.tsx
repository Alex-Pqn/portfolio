import { Link } from 'react-router-dom'
import styles from './DefaultLink.module.scss'
import IconArrowRight from '@/components/Icon/IconArrowRight/IconArrowRight'

interface Props {
  to: string
  text: string
}

function DefaultLink({ to, text }: Props) {
  return (
    <div className={styles['default-link']}>
      <Link to={to}>
        {text} <IconArrowRight size="27px" />
      </Link>
    </div>
  )
}

export default DefaultLink
