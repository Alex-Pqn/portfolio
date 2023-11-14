import { Technology } from './Technology.d'
export interface Url {
  site?: string
  github: string
}
export interface ImageUrl {
  webp: string | undefined
  png: string | undefined
}

export interface BaseProject {
  name: string
  filename: string
  type: string
  description: string
  organism: string
  url: Url
}
export interface ProjectJson extends BaseProject {
  technologies: Technology['id'][]
}

export interface Project extends BaseProject {
  id: number
  imageUrl: ImageUrl
  technologies: Technology['name'][]
}
