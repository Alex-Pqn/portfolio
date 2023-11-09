import styles from './PortfolioProject.module.scss'
import { Project } from '@/@types/Project'
import usePortfolioImage from '../../../hooks/usePortfolioImage'
import IconPlusLg from '@/components/Icon/IconPlusLg/IconPlusLg'

interface Props {
  project: Project
  triggerOpenModal: () => void
}

function PortfolioProject({ project, triggerOpenModal }: Props) {
  const { loading, image } = usePortfolioImage({ filename: project.filename })

  return (
    <>
      {!loading && image && (
        <div className={styles.portfolioProject}>
          <button
            onClick={triggerOpenModal}
            type="button"
            className={styles.portfolioProject__openModalButton}
          >
            {/* Image */}
            <section
              style={{
                backgroundImage: `url(${image})`,
              }}
              className={styles.portfolioProject__image}
            >
              {/* Overlay */}
              <div className={styles['portfolioProject__image-overlay']}>
                <IconPlusLg size="50px" />
              </div>
            </section>

            {/* Footer */}
            <footer className={styles.portfolioProject__footer}>
              <span className={styles['portfolioProject__footer-name']}>
                {project.name}
              </span>
              <p className={styles['portfolioProject__footer-type']}>
                {project.type}
              </p>
            </footer>
          </button>
        </div>
      )}
    </>
  )
}

export default PortfolioProject
