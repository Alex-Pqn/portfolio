import { useCallback, useEffect, useState } from 'react'
import styles from './PortfolioModal.module.scss'
import { Project } from '@/@types/Project'
import usePortfolioImage from '@/hooks/usePortfolioImage'
import ModalContent from './ModalContent/ModalContent'
import { motion as m } from 'framer-motion'
import usePopstateEvent from '@/hooks/usePopstateEvent'
import useKeydownEvent from '@/hooks/useKeydownEvent'
interface Props {
  project: Project
  triggerCloseModal: () => void
  triggerNextProject: (arg0: number) => void
  triggerPrevProject: (arg0: number) => void
}

const modalAnimation = {
  hidden: { backgroundColor: 'transparent' },
  visible: {
    background: 'rgba(0, 0, 0, 0.3)',
    transition: {
      duration: 1,
    },
  },
  exit: { backgroundColor: 'transparent' },
}

const modalContentAnimation = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
}

function PortfolioModal({
  project,
  triggerCloseModal,
  triggerNextProject,
  triggerPrevProject,
}: Props) {
  const { loading, image } = usePortfolioImage({ filename: project.filename })

  const modalNextAnimationDuration = 800
  const [isModalNextAnimationPlaying, setIsModalNextAnimationPlaying] =
    useState(false)
  const [isModalPrevAnimationPlaying, setIsModalPrevAnimationPlaying] =
    useState(false)
  const isAnimationPlaying =
    isModalNextAnimationPlaying || isModalPrevAnimationPlaying

  // Close Modal
  const closeModal = useCallback(() => {
    if (!isAnimationPlaying) triggerCloseModal()
  }, [isAnimationPlaying, triggerCloseModal])

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

  useKeydownEvent({
    onEscape: () => closeModal(),
    onArrowRight: () => handleNextProject(),
    onArrowLeft: () => handlePrevProject(),
  })

  usePopstateEvent({
    onBackPressed: () => closeModal(),
  })

  // Background Scroll Handler
  const backgroundScrollHandler = () =>
    (document.body.style.overflow =
      document.body.style.overflow === 'hidden' ? 'auto' : 'hidden')

  useEffect(() => {
    window.history.pushState('backPressed', '', null)
    window.history.pushState('dummy', '', null)

    backgroundScrollHandler()

    return () => {
      backgroundScrollHandler()
    }
  }, [closeModal])

  if (loading || !image) return null
  else
    return (
      // PortfolioModal
      <m.div
        onClick={closeModal}
        className={styles.portfolioModal}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalAnimation}
      >
        {/* Content */}
        <m.div
          className={styles.portfolioModal__content}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalContentAnimation}
        >
          <ModalContent
            project={project}
            projectImage={image}
            handleNextProject={handleNextProject}
            handlePrevProject={handlePrevProject}
            isModalNextAnimationPlaying={isModalNextAnimationPlaying}
            isModalPrevAnimationPlaying={isModalPrevAnimationPlaying}
            closeModal={closeModal}
          />
        </m.div>
      </m.div>
    )
}

export default PortfolioModal
