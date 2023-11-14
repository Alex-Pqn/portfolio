import { Project } from '@/@types/Project'
import styles from './ModalContent.module.scss'
import IconArrowUpRight from '@/components/Icon/IconArrowUpRight/IconArrowUpRight'
import IconChevronCompactLeft from '@/components/Icon/IconChevronCompactRight/IconChevronCompactLeft'
import IconGithub from '@/components/Icon/IconGithub/IconGithub'
import { Link } from 'react-router-dom'
import { useSwipeable } from 'react-swipeable'
import IconChevronCompactRight from '@/components/Icon/IconChevronCompactLeft/IconChevronCompactRight'

interface Props {
  project: Project
  projectImagePng: string
  projectImageWebp: string
  handleNextProject: () => void
  handlePrevProject: () => void
  closeModal: () => void
  isModalNextAnimationPlaying: boolean
  isModalPrevAnimationPlaying: boolean
}

function ModalContent({
  project,
  projectImagePng,
  projectImageWebp,
  handleNextProject,
  handlePrevProject,
  isModalNextAnimationPlaying,
  isModalPrevAnimationPlaying,
  closeModal,
}: Props) {
  const isMobileDisplay = document.documentElement.clientWidth <= 768

  // Mobile Swipe Handler
  const mobileSwipeHandler = useSwipeable({
    onSwipedRight: () => handlePrevProject(),
    onSwipedLeft: () => handleNextProject(),
    onSwipedUp: () => closeModal(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
  })

  return (
    // ModalContent
    <div
      {...mobileSwipeHandler}
      aria-modal="true"
      className={`${styles.modalContent} ${
        isModalNextAnimationPlaying && styles.modalNextAnimation
      } ${isModalPrevAnimationPlaying && styles.modalPrevAnimation}`}
    >
      {/* Chevron */}
      {!isMobileDisplay && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            handlePrevProject()
          }}
          className={styles.modalContent__chevron}
        >
          <IconChevronCompactLeft size="35px" />
        </button>
      )}

      {/* Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        tabIndex={0}
        ref={(div) => div && div.focus()}
        className={styles.modalContent__content}
      >
        {/* Header */}
        <header className={styles.modalContent__header}>
          <h3 className={styles['modalContent__header-name']}>
            {project.name}
          </h3>
          <button
            className={styles['modalContent__header-closeButton']}
            onClick={closeModal}
          >
            &times;
          </button>
        </header>
        {/* Image */}
        <section className={styles.modalContent__image}>
          <Link to={project.url.site || project.url.github} target="_blank">
            <picture>
              <source srcSet={projectImageWebp} type="image/webp" />
              <img src={projectImagePng} alt={project.name} />
            </picture>
          </Link>
        </section>
        <hr />
        {/* Infos */}
        <section className={styles.modalContent__infos}>
          <p className={styles['modalContent__infos-description']}>
            {project.description}
          </p>
          <ul className={styles['modalContent__infos-technologies']}>
            {project.technologies.map((technology, index) => (
              <li key={index}>
                {technology}
                {project.technologies.length !== ++index && <span>-</span>}
              </li>
            ))}
          </ul>
        </section>
        {/* Footer */}
        <footer className={styles.modalContent__footer}>
          <div className={styles['modalContent__footer-github']}>
            <Link to={project.url.github} target="_blank">
              <IconGithub size="23px" />
            </Link>
          </div>
          {project.url.site && (
            <div className={styles['modalContent__footer-site']}>
              <Link to={project.url.site} target="_blank">
                Visiter <IconArrowUpRight />
              </Link>
            </div>
          )}
        </footer>
      </div>

      {/* Chevron */}
      {!isMobileDisplay && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            handleNextProject()
          }}
          className={styles.modalContent__chevron}
        >
          <IconChevronCompactRight size="35px" />
        </button>
      )}
    </div>
  )
}

export default ModalContent
