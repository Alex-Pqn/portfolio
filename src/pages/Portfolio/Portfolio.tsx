import styles from './Portfolio.module.scss'
import { Helmet } from 'react-helmet-async'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'
import { useState } from 'react'
import { Project } from '@/@types/Project'
import PortfolioCard from './PortfolioCard/PortfolioCard'
import PortfolioModal from './PortfolioModal/PortfolioModal'
import { useAppSelector } from '@/store/store'
import { AnimatePresence, motion as m } from 'framer-motion'

interface Modal {
  isOpen: boolean
  project: Project | null | undefined
}

const animation = {
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  hidden: {
    transition: {
      when: 'afterChildren',
    },
  },
}
const animationMapItem = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
    },
  }),
  hidden: { y: 100, opacity: 0 },
}

function Portfolio() {
  const [modal, setModal] = useState<Modal>({ isOpen: false, project: null })
  const projects = useAppSelector((state) => state.project.projects)

  function handleNextProject(projectId: number) {
    const nextProject = projects[projectId + 1]
    const firstProject = projects[0]

    setModal({ isOpen: true, project: nextProject || firstProject })
  }

  function handlePrevProject(projectId: number) {
    const prevProject = projects[projectId - 1]
    const lastProject = projects[projects.length - 1]

    setModal({ isOpen: true, project: prevProject || lastProject })
  }

  return (
    <>
      {/* Head */}
      <Helmet>
        <title>Portfolio • Alexandre Paquien</title>
      </Helmet>

      {/* Container */}
      <div className={styles.container} id="container">
        {/* DefaultHero */}
        <DefaultHero
          title={'Portfolio.'}
          description={'Parcourez mes projets'}
        />

        {/* Portfolio */}
        <m.section
          className={styles.portfolio}
          initial="hidden"
          animate="visible"
          variants={animation}
        >
          <div className={styles.portfolio__cards}>
            {projects &&
              projects.map((project, index) => (
                // Portfolio Card
                <m.article
                  key={index}
                  className={styles.portfolio__card}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={animationMapItem}
                >
                  <PortfolioCard
                    project={project}
                    triggerOpenModal={() =>
                      setModal({
                        isOpen: true,
                        project: {
                          ...project,
                        },
                      })
                    }
                  />
                </m.article>
              ))}
          </div>
          {/* Portfolio Modal */}
          <AnimatePresence>
            {modal.isOpen && modal.project && (
              <PortfolioModal
                project={modal.project}
                triggerCloseModal={() =>
                  setModal({ isOpen: false, project: null })
                }
                triggerNextProject={handleNextProject}
                triggerPrevProject={handlePrevProject}
              />
            )}
          </AnimatePresence>
        </m.section>
      </div>
    </>
  )
}

export default Portfolio
