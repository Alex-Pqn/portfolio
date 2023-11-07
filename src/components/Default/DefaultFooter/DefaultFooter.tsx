import styles from './DefaultFooter.module.scss'
import SocialGithub from '@/components/Social/SocialGithub/SocialGithub'
import SocialLinkedin from '@/components/Social/SocialLinkedin/SocialLinkedin'
import { Link } from 'react-router-dom'

const DefaultFooter = (): React.JSX.Element => {
  const email = 'contact@alexandrepaquien.com'

  return (
    <footer className={styles['footer']}>
      <div className={styles['footer__items']}>
        {/* email */}
        <div
          className={[
            styles['footer__items-email'],
            styles['footer__items-item'],
          ].join(' ')}
        >
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        {/* mentions */}
        <div
          className={[
            styles['footer__items-mentions'],
            styles['footer__items-item'],
          ].join(' ')}
        >
          <Link to={'/mentions'}>Mentions légales</Link>
        </div>
        {/* social */}
        <ul
          className={[
            styles['footer__items-social'],
            styles['footer__items-item'],
          ].join(' ')}
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
