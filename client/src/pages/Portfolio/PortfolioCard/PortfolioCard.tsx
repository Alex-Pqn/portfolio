import styles from './PortfolioCard.module.scss'
import { Project } from '@/@types/Project'
import IconPlusLg from '@/components/Icon/IconPlusLg/IconPlusLg'

interface Props {
  project: Project
  triggerOpenModal: () => void
}

function PortfolioCard({ project, triggerOpenModal }: Props) {
  return (
    // Portfolio Card
    <div className={styles.portfolioCard}>
      {/* Open Modal Button */}
      <button
        onClick={triggerOpenModal}
        type="button"
        className={styles.portfolioCard__openModalButton}
      >
        {/* Image */}
        <section className={styles.portfolioCard__image}>
          <picture>
            <source srcSet={project.imageUrl.webp} type="image/webp" />
            <img src={project.imageUrl.png} alt={project.name} />
          </picture>

          {/* Overlay */}
          <div className={styles['portfolioCard__image-overlay']}>
            <IconPlusLg size="50px" />
          </div>
        </section>
        {/* Footer */}
        <footer className={styles.portfolioCard__footer}>
          <span className={styles['portfolioCard__footer-name']}>
            {project.name}
          </span>
          <p className={styles['portfolioCard__footer-type']}>{project.type}</p>
        </footer>
      </button>
    </div>
  )
}

export default PortfolioCard
