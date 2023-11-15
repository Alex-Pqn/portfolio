import styles from './DefaultFooter.module.scss'
import SocialGithub from '@/components/Social/SocialGithub/SocialGithub'
import SocialLinkedin from '@/components/Social/SocialLinkedin/SocialLinkedin'
import { Link } from 'react-router-dom'

function DefaultFooter() {
  const email = 'contact@alexandrepaquien.com'

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__containers}>
        {/* email */}
        <div
          className={[styles.footer__email, styles.footer__container].join(' ')}
        >
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        {/* mentions */}
        <div
          className={[styles.footer__mentions, styles.footer__container].join(
            ' '
          )}
        >
          <Link to={'/mentions'}>Mentions légales</Link>
        </div>
        {/* social */}
        <ul
          className={[styles.footer__social, styles.footer__container].join(
            ' '
          )}
        >
          <li>
            <SocialGithub />
          </li>
          <li>
            <SocialLinkedin />
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default DefaultFooter
