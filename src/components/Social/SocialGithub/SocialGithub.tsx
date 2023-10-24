import styles from './SocialGithub.module.scss'
import IconGithub from '@/components/Icon/IconGithub/IconGithub'

export const SocialGithub = () => {
  const githubLink: string = 'https://github.com/Alex-Pqn'

  return (
    <div className={styles.content}>
      <a target="_blank" rel="noreferrer nofollow noopener" href={githubLink}>
        <IconGithub size="22px" />
      </a>
    </div>
  )
}

export default SocialGithub
