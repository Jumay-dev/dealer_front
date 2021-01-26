// @ts-ignore
export interface Entity {
  id: number;
  text?: string;
  value?: number;
}

export interface Category extends Entity {
  name: string;
  parentId: string;
}

export interface LoginUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface User extends Entity {
  firstname: string;
  lastname: string;
  email: string;
  avatar?: string;
  mobile: string;
  homephone?: string;
  workphone?: string;
}

export interface Project {
  id: number,
  externalId: number;
  added: string;
  dealer: string;
  employee: string;
  client: string;
  actualised: string;
  expires: string;
  manager: string;
}