import { Link } from 'react-router-dom'
import styles from './SocialGithub.module.scss'
import IconGithub from '@/components/Icon/IconGithub/IconGithub'

const SocialGithub = (): React.JSX.Element => {
  const githubLink: string = 'https://github.com/Alex-Pqn'

  return (
    <div className={styles['social-github']}>
      <Link target="_blank" to={githubLink}>
        <IconGithub size="22px" />
      </Link>
    </div>
  )
}

export default SocialGithub
