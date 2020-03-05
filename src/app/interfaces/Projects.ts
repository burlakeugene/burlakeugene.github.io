export interface Props extends Projects{}

export interface State extends Projects{}

export interface Projects{
  items?: Array<Project>,
}

export interface Project{
  name: string,
  systemName: string
}