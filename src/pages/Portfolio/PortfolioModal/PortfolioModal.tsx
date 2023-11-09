import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import styles from './PortfolioModal.module.scss'
import { Project } from '@/@types/Project'
import usePortfolioImage from '@/hooks/usePortfolioImage'
import IconGithub from '@/components/Icon/IconGithub/IconGithub'
import IconArrowUpRight from '@/components/Icon/IconArrowUpRight/IconArrowUpRight'
import IconChevronCompactLeft from '@/components/Icon/IconChevronCompactRight/IconChevronCompactLeft'
import IconChevronCompactRight from '@/components/Icon/IconChevronCompactLeft/IconChevronCompactRight'
import { useSwipeable } from 'react-swipeable'

interface Props {
  project: Project
  triggerCloseModal: () => void
  triggerNextProject: (arg0: number) => void
  triggerPrevProject: (arg0: number) => void
}

function PortfolioModal({
  project,
  triggerCloseModal,
  triggerNextProject,
  triggerPrevProject,
}: Props) {
  const { loading, image } = usePortfolioImage({ filename: project.filename })
  const [isModalOpen, setIsModalShown] = useState(true)
  const transitionRef = useRef(null)

  const isMobileDisplay = document.documentElement.clientWidth <= 768

  const [isModalNextAnimationPlaying, setIsModalNextAnimationPlaying] =
    useState(false)
  const [isModalPrevAnimationPlaying, setIsModalPrevAnimationPlaying] =
    useState(false)
  const modalNextAnimationDuration = 1000

  const closeModal = useCallback(() => {
    if (!isModalNextAnimationPlaying && !isModalPrevAnimationPlaying) {
      setIsModalShown(false)
    }
  }, [isModalNextAnimationPlaying, isModalPrevAnimationPlaying])

  const handleNextProject = useCallback(() => {
    setIsModalNextAnimationPlaying(true)

    setTimeout(
      () => triggerNextProject(project.id),
      modalNextAnimationDuration / 2
    )
    setTimeout(
      () => setIsModalNextAnimationPlaying(false),
      modalNextAnimationDuration
    )
  }, [project.id, triggerNextProject])

  const handlePrevProject = useCallback(() => {
    setIsModalPrevAnimationPlaying(true)

    setTimeout(
      () => triggerPrevProject(project.id),
      modalNextAnimationDuration / 2
    )
    setTimeout(
      () => setIsModalPrevAnimationPlaying(false),
      modalNextAnimationDuration
    )
  }, [project.id, triggerPrevProject])

  const mobileSwipeHandler = useSwipeable({
    onSwipedRight: () => handlePrevProject(),
    onSwipedLeft: () => handleNextProject(),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
  })

  useEffect(() => {
    const backgroundScrollHandler = () =>
      (document.body.style.overflow =
        document.body.style.overflow === 'hidden' ? 'auto' : 'hidden')

    const closeOnEscapeHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal()
    }

    function mobileBackPressedHandler(e: PopStateEvent) {
      if (e.state == 'backPressed') {
        closeModal()
      }

      window.history.pushState('backPressed', '', null)
      window.history.pushState('dummy', '', null)
    }

    backgroundScrollHandler()
    window.addEventListener('keydown', closeOnEscapeHandler)
    window.addEventListener('popstate', mobileBackPressedHandler)
    return () => {
      backgroundScrollHandler()
      window.removeEventListener('keydown', closeOnEscapeHandler)
      window.removeEventListener('popstate', mobileBackPressedHandler)
    }
  }, [closeModal, handleNextProject, handlePrevProject])

  return (
    <>
      {!loading && image && (
        <CSSTransition
          in={isModalOpen}
          nodeRef={transitionRef}
          timeout={500}
          classNames={{
            appearActive: styles['modalOpenTransition--appearActive'],
            appearDone: styles['modalOpenTransition--appearDone'],
            exit: styles['modalOpenTransition--exit'],
            exitActive: styles['modalOpenTransition--exitActive'],
          }}
          onExited={triggerCloseModal}
          appear
        >
          {/* PortfolioModal */}
          <div
            ref={transitionRef}
            onClick={closeModal}
            className={`${styles.portfolioModal} ${styles.modalOpenTransition}`}
          >
            {/* Container */}
            <div
              {...mobileSwipeHandler}
              aria-modal="true"
              className={`${styles.portfolioModal__container} ${
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
                  className={styles.portfolioModal__chevron}
                >
                  <IconChevronCompactLeft size="35px" />
                </button>
              )}

              {/* Content */}
              <div
                onClick={(e) => e.stopPropagation()}
                tabIndex={0}
                ref={(div) => div && div.focus()}
                className={styles.portfolioModal__content}
              >
                {/* Header */}
                <header className={styles.portfolioModal__header}>
                  <h3 className={styles['portfolioModal__header-name']}>
                    {project.name}
                  </h3>
                  <button
                    className={styles['portfolioModal__header-closeButton']}
                    onClick={closeModal}
                  >
                    &times;
                  </button>
                </header>
                {/* Image */}
                <section className={styles.portfolioModal__image}>
                  <Link
                    to={project.url.site || project.url.github}
                    target="_blank"
                  >
                    <img src={image} alt={project.name} />
                  </Link>
                </section>
                <hr />
                {/* Infos */}
                <section className={styles.portfolioModal__infos}>
                  <p className={styles['portfolioModal__infos-description']}>
                    {project.description}
                  </p>
                  <ul className={styles['portfolioModal__infos-technologies']}>
                    {project.technologies.map((technology, index) => (
                      <li key={index}>
                        {technology}
                        {project.technologies.length !== ++index && (
                          <span>-</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
                {/* Footer */}
                <footer className={styles.portfolioModal__footer}>
                  <div className={styles['portfolioModal__footer-github']}>
                    <Link
                      className={styles['portfolioModal__footer-github']}
                      to={project.url.github}
                      target="_blank"
                    >
                      <IconGithub size="23px" />
                    </Link>
                  </div>
                  {project.url.site && (
                    <div className={styles['portfolioModal__footer-site']}>
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
                  className={styles.portfolioModal__chevron}
                >
                  <IconChevronCompactRight size="35px" />
                </button>
              )}
            </div>
          </div>
        </CSSTransition>
      )}
    </>
  )
}

export default PortfolioModal
