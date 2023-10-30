import styles from './DefaultFooter.module.scss'
import SocialGithub from '@/components/Social/SocialGithub/SocialGithub'
import SocialLinkedin from '@/components/Social/SocialLinkedin/SocialLinkedin'
import { Link } from 'react-router-dom'

const DefaultFooter = (): React.JSX.Element => {
  const email = 'contact@alexandrepaquien.com'

  return (
    <footer className={styles.footer}>
      {/* email */}
      <div className={styles.footer__email}>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      {/* mentions */}
      <div className={styles.footer__mentions}>
        <Link to={'/mentions'}>Mentions légales</Link>
      </div>
      {/* social */}
      <ul className={styles.footer__social}>
        <li>
          <SocialGithub />
        </li>
        <li>
          <SocialLinkedin />
        </li>
      </ul>
    </footer>
  )
}

export default DefaultFooter
