import { useCallback, useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import styles from './PortfolioModal.module.scss'
import { Project } from '@/@types/Project'
import usePortfolioImage from '@/hooks/usePortfolioImage'
import ModalContent from './ModalContent/ModalContent'

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

  const [isModalOpen, setIsModalOpen] = useState(true)
  const transitionRef = useRef(null)

  const modalNextAnimationDuration = 800
  const [isModalNextAnimationPlaying, setIsModalNextAnimationPlaying] =
    useState(false)
  const [isModalPrevAnimationPlaying, setIsModalPrevAnimationPlaying] =
    useState(false)
  const isAnimationPlaying =
    isModalNextAnimationPlaying || isModalPrevAnimationPlaying

  // Close Modal
  const closeModal = useCallback(() => {
    if (!isAnimationPlaying) setIsModalOpen(false)
  }, [isAnimationPlaying])

  // Handle Next Project
  const handleNextProject = useCallback(() => {
    if (!isAnimationPlaying) {
      setIsModalNextAnimationPlaying(true)

      setTimeout(
        () => triggerNextProject(project.id),
        modalNextAnimationDuration / 2
      )
      setTimeout(
        () => setIsModalNextAnimationPlaying(false),
        modalNextAnimationDuration
      )
    }
  }, [isAnimationPlaying, project.id, triggerNextProject])

  // Handle Prev Project
  const handlePrevProject = useCallback(() => {
    if (!isAnimationPlaying) {
      setIsModalPrevAnimationPlaying(true)

      setTimeout(
        () => triggerPrevProject(project.id),
        modalNextAnimationDuration / 2
      )
      setTimeout(
        () => setIsModalPrevAnimationPlaying(false),
        modalNextAnimationDuration
      )
    }
  }, [isAnimationPlaying, project.id, triggerPrevProject])

  // On Keydown Event
  const onKeydownEvent = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') handleNextProject()
      if (e.key === 'ArrowLeft') handlePrevProject()
    },
    [closeModal, handleNextProject, handlePrevProject]
  )

  // On Popstate Event
  const onPopstateEvent = useCallback(
    (e: PopStateEvent) => {
      if (e.state == 'backPressed') closeModal()
    },
    [closeModal]
  )

  // Background Scroll Handler
  const backgroundScrollHandler = () =>
    (document.body.style.overflow =
      document.body.style.overflow === 'hidden' ? 'auto' : 'hidden')

  useEffect(() => {
    window.addEventListener('keydown', onKeydownEvent)
    window.addEventListener('popstate', onPopstateEvent)

    window.history.pushState('backPressed', '', null)
    window.history.pushState('dummy', '', null)

    backgroundScrollHandler()

    return () => {
      window.removeEventListener('keydown', onKeydownEvent)
      window.removeEventListener('popstate', onPopstateEvent)
      backgroundScrollHandler()
    }
  }, [closeModal, onKeydownEvent, onPopstateEvent])

  if (loading || !image) return null
  else
    return (
      // Open Transition
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
          {/* Content */}
          <div className={styles.portfolioModal__content}>
            <ModalContent
              project={project}
              projectImage={image}
              handleNextProject={handleNextProject}
              handlePrevProject={handlePrevProject}
              isModalNextAnimationPlaying={isModalNextAnimationPlaying}
              isModalPrevAnimationPlaying={isModalPrevAnimationPlaying}
              closeModal={closeModal}
            />
          </div>
        </div>
      </CSSTransition>
    )
}

export default PortfolioModal
