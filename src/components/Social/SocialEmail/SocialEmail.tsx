import styles from './SocialEmail.module.scss'
import ButtonCopyToClipboard from '@/components/Button/ButtonCopyToClipboard/ButtonCopyToClipboard'

export const SocialEmail = () => {
  const email = 'apqn.pro@pm.me'

  return (
    <div className={styles.content}>
      {/* email */}
      <div className={styles.content__email}>
        <a href={`mailto:${email}`}>{email}</a>
      </div>
      {/* copy-button */}
      <div className={styles['content__copy-button']}>
        <ButtonCopyToClipboard textToCopy={email} />
      </div>
    </div>
  )
}

export default SocialEmail
