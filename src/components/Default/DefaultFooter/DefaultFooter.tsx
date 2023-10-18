import styles from './DefaultFooter.module.scss'
import SocialEmail from '@/components/Social/SocialEmail/SocialEmail'
import SocialGithub from '@/components/Social/SocialGithub/SocialGithub'
import SocialLinkedin from '@/components/Social/SocialLinkedin/SocialLinkedin'

const DefaultFooter = (): React.JSX.Element => {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content__email}>
          <SocialEmail />
        </div>
        <div className={styles.content__social}>
          <ul>
            <li>
              <SocialGithub />
            </li>
            <li>
              <SocialLinkedin />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default DefaultFooter
