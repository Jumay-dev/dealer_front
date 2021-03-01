// @ts-ignore
export interface Entity {
  id: number;
  text?: string;
  value?: number;
}

export interface LoginUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
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
  id: string;
  project_id: string;
  tools_id: string;
  status_id: string;
  query_auth: string;
}

export class ToolModel implements Tool {
  constructor (
    id: string = '',
    project_id: string = '',
    tools_id: string = '',
    status_id: string = '',
    query_auth: string = '',
  ) {
    this.id = id
    this.project_id = project_id
    this.tools_id = tools_id
    this.status_id = status_id
    this.query_auth = query_auth
  }
  id: string;
  project_id: string;
  tools_id: string;
  status_id: string;
  query_auth: string;
}

export interface Category {
  id: string;
  block_name: string;
  view_all: string;
  view_dealer: string;
}

export interface User {
  firstname: string;
  lastname: string;
  patronym: string;
  registered: string;
  phone: string;
  mail: string;
  role: string;
  maxDiscount: string;
  projectVisibility: string;
}

export class UserModel implements User {
  constructor (
    firstname: string = '',
    lastname: string = '',
    patronym: string = '',
    registered: string = '',
    phone: string = '',
    mail: string = '',
    role: string = '',
    maxDiscount: string = '',
    projectVisibility: string = ''
  ) {
    this.firstname = firstname
    this.lastname = lastname
    this.patronym = patronym
    this.registered = registered
    this.phone = phone
    this.mail = mail
    this.role = role
    this.maxDiscount = maxDiscount
    this.projectVisibility = projectVisibility
  }
  firstname: string;
  lastname: string;
  patronym: string;
  registered: string;
  phone: string;
  mail: string;
  role: string;
  maxDiscount: string;
  projectVisibility: string;
}