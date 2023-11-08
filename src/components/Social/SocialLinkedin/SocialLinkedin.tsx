import { Link } from 'react-router-dom'
import styles from './SocialLinkedin.module.scss'
import IconLinkedin from '@/components/Icon/IconLinkedin/IconLinkedin'

function SocialLinkedin() {
  const linkedinLink = 'https://www.linkedin.com/in/alexandrepaquien/'

  return (
    <div className={styles['social-linkedin']}>
      <Link target="_blank" to={linkedinLink}>
        <IconLinkedin size="22px" />
      </Link>
    </div>
  )
}

export default SocialLinkedin
