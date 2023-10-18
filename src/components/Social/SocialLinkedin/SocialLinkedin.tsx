import styles from './SocialLinkedin.module.scss'
import IconLinkedin from '@/components/Icon/IconLinkedin/IconLinkedin'

export const SocialLinkedin = () => {
  const linkedinLink: string = 'https://www.linkedin.com/in/alexandrepaquien/'

  return (
    <div className={styles['content']}>
      <a target="_blank" rel="noreferrer nofollow noopener" href={linkedinLink}>
        <IconLinkedin size="25px" />
      </a>
    </div>
  )
}

export default SocialLinkedin
