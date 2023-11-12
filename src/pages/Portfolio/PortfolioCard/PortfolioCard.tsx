import styles from './PortfolioCard.module.scss'
import { Project } from '@/@types/Project'
import usePortfolioImage from '../../../hooks/usePortfolioImage'
import IconPlusLg from '@/components/Icon/IconPlusLg/IconPlusLg'

interface Props {
  project: Project
  triggerOpenModal: () => void
}

function PortfolioCard({ project, triggerOpenModal }: Props) {
  const { loading, image } = usePortfolioImage({ filename: project.filename })

  if (loading || !image) return null
  else
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
          <section
            style={{
              backgroundImage: `url(${image})`,
            }}
            className={styles.portfolioCard__image}
          >
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

export default PortfolioCard
