import { createSlice } from '@reduxjs/toolkit'
import { Project } from '@/@types/Project'
import { Technology } from '@/@types/Technology'
import projectsList from '@/assets/portfolio/projects.json'
import technologiesList from '@/assets/portfolio/technologies.json'

export interface ProjectState {
  projects: Project[]
}

const createInitialState = () => {
  const modifiedProjects = projectsList.map((project, index) => ({
    ...project,

    id: index,

    technologies: project.technologies.reduce(
      (result: string[], projectTechnologyId) => {
        technologiesList.map((technology: Technology) => {
          if (projectTechnologyId === technology.id) {
            result.push(technology.name)
          }
        })
        return result
      },
      []
    ),
  }))

  return {
    projects: modifiedProjects,
  }
}

const initialState: ProjectState = createInitialState()

export const ProjectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
})

export default ProjectSlice.reducer
// export const {} = ProjectSlice.actions
