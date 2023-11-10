import styles from './Portfolio.module.scss'
import { Helmet } from 'react-helmet-async'
import DefaultHero from '@/components/Default/DefaultHero/DefaultHero'
import { useState } from 'react'
import { Project } from '@/@types/Project'
import PortfolioProject from './PortfolioProject/PortfolioProject'
import PortfolioModal from './PortfolioModal/PortfolioModal'
import { useAppSelector } from '@/store/store'

interface Modal {
  isOpen: boolean
  project: Project | null | undefined
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
        <section className={styles.portfolio}>
          <div className={styles.portfolio__items}>
            {projects &&
              projects.map((project, index) => (
                // Portfolio Project
                <article key={index} className={styles.portfolio__item}>
                  <PortfolioProject
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
                </article>
              ))}
          </div>
          {/* Portfolio Modal */}
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
        </section>
      </div>
    </>
  )
}

export default Portfolio
