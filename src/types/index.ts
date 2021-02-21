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
  id: number;
  externalId: number;
  added: string;
  dealer: string;
  employee: string;
  client: string;
  actualised: string;
  expires: string;
  manager: string;
}

export class ProjectModel implements Project {
  constructor(
    externalId: number = 0,
    added: string = '',
    dealer: string = '',
    employee: string = '',
    client: string = '',
    actualised: string = '',
    expires: string = '',
    manager: string = ''
  ) {
    this.id = 0;
    this.externalId = externalId;
    this.added = added;
    this.dealer = dealer;
    this.employee = employee;
    this.client = client;
    this.actualised = actualised;
    this.expires = expires;
    this.manager = manager;
  }
  id: number;
  externalId: number;
  added: string;
  dealer: string;
  employee: string;
  client: string;
  actualised: string;
  expires: string;
  manager: string;
}

export interface Tool {
  id: number;
  projectId: number;
  name: string;
}