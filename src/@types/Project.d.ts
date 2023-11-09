import { Technology } from './Technology.d'

export interface Project {
  id: number
  name: string
  filename: string
  type: string
  description: string
  organism: string
  technologies: Technology.id[]
  url: {
    github: string
    site?: string
  }
}
