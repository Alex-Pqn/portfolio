import styles from './PortfolioCard.module.scss'
import { Project } from '@/@types/Project'
import usePortfolioImage from '../../../hooks/usePortfolioImage'
import IconPlusLg from '@/components/Icon/IconPlusLg/IconPlusLg'

interface Props {
  project: Project
  triggerOpenModal: () => void
}

function PortfolioCard({ project, triggerOpenModal }: Props) {
  const { isLoading, imagePng, imageWebp } = usePortfolioImage({
    filename: project.filename,
  })

  if (!isLoading) {
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
              <source srcSet={imageWebp} type="image/webp" />
              <img src={imagePng} alt={project.name} />
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
            <p className={styles['portfolioCard__footer-type']}>
              {project.type}
            </p>
          </footer>
        </button>
      </div>
    )
  }
}

export default PortfolioCard
