import { createSlice } from '@reduxjs/toolkit'
import { Project, ProjectJson } from '@/@types/Project'
import { Technology } from '@/@types/Technology'
import projectsJson from '@/assets/portfolio/projects.json'
import technologiesJson from '@/assets/portfolio/technologies.json'
import useAsset from '@/hooks/useAsset'

export interface ProjectState {
  projects: Project[]
}

const createInitialState = () => {
  const modifiedProjects: Project[] = projectsJson.map(
    (project: ProjectJson, index) => ({
      ...project,

      id: index,

      imageUrl: {
        webp: useAsset({
          path: `portfolio/images/${project.filename}.webp`,
        }),
        png: useAsset({
          path: `portfolio/images/${project.filename}.png`,
        }),
      },

      technologies: project.technologies.reduce(
        (result: Project['technologies'], technologyId) => {
          technologiesJson.map((technologyJson: Technology) => {
            if (technologyId === technologyJson.id) {
              result.push(technologyJson.name)
            }
          })
          return result
        },
        []
      ),
    })
  )

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
