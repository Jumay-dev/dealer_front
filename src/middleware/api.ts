/* eslint-disable */
import { projects_json } from './dealer_projects'
import { projects_tools } from './dealer_projects_tools'

import { 
  LIST_PROJECTS, 
  LIST_TOOLS,
  LIST_CATEGORIES,
  LIST_USERS
} from '../store/types'

import { backend } from "../config/server"

const ds = {
  token: { 
    accessToken: "fake-token-12345789-abcdefgh", 
    user: {
      id: "1",
      firstname: "Иванов", 
      lastname: "Иван",
      patronym: "Иванович",
      email: "admin@test.com",
      password: "password",
      phone: "+7 (800) 555-35-35",
      registered: "20.01.2021 14:25",
      role: "1",
      maxDiscount: "30"
    }
  }
}

function projectReducer(arr) {
  let projects = []
  arr.forEach(item => {
    let currentItem = item
    let projectTools = projects_tools.filter( elem => +elem.project_id === +currentItem.id)
    projects.push({
      status: item.status,
      id: currentItem.id,
      externalId: 28,
      added: "4.01.2021",
      dealer: "ООО 'ААА'",
      employee: 'Иванов Иван',
      client: currentItem.brend_name,
      urname: currentItem.ur_name,
      actualised: '10.01.2021',
      expires: '20.02.2021',
      manager: 'Даэсмедов Михаил Алексеевич',
      tools: projectTools
    })
  })
  return projects
}

export function login(action: string, data: TODO): Promise<TODO> {
  console.log(data)
  let dataForm = new FormData;
  dataForm.append('email', data.login)
  dataForm.append('password', data.password)
  return fetch(`${backend}/api/auth/login`, {
    method: "POST",
    body: dataForm
  })
  .then( res => res.json())
  .then( res => {
    return {
      token: "Bearer " + res.token.original.access_token,
      user: {
        firstname: res.user.name,
        lastname: res.user.surname,
        patronym: res.user.patronymic,
        registered: res.user.created_at,
        phone: res.user.phone,
        mail: res.user.email,
        role: "NOT SETTED",
        maxDiscount: res.user.max_discount,
        projectVisibility: res.user.project_visibility,
      }
    }
  })
}

export function checkAuth(): Promise<TODO> {
  const token = localStorage.getItem("react-crm-token")

  return fetch(`${backend}/api/auth/me`, {
    method: "POST",
    headers: {
      "Authorization": token
    }
  })
  .then( res => res.json() )
  .then( res =>{ return {isAuthenticated: res.success} })
  .catch( res => {
    return { isAuthenticated: false}
  })
}

export function getData(action: string): Promise<TODO> {
  const token = localStorage.getItem("react-crm-token")
  switch (action) {
    case LIST_PROJECTS:
      return new Promise((resolve, _reject) => {
        let error = false
        if (!error) {
          setTimeout(resolve, 300, projectReducer(projects_json))
        }
      })
    case LIST_TOOLS:
      return fetch(`${backend}/api/cat/index`, {
        method: "POST",
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
    case LIST_CATEGORIES:
      return fetch(`${backend}/api/cat/index`, {
        method: "POST",
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
    case LIST_USERS:
      return fetch("https://jsonplaceholder.typicode.com/users").then(users => users.json())
  }
}

export const CALL_API = Symbol("Call API")