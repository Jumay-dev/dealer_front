/* eslint-disable */
import { 
  LIST_PROJECTS, 
  LIST_TOOLS,
  LIST_CATEGORIES,
  LIST_USERS,
  GET_DETAILS,
  LIST_PROVIDERS
} from '../store/types'

import { backend } from "../config/server"

export function login(action: string, data: TODO): Promise<TODO> {
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
      user: res.user
    }
  })
  .catch(res => {
    return {
      token: '',
      user: '',
      error: 'unauthorized'
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
  .then( res => { 
    return { isAuthenticated: res.success, user: res.user 
    } 
  })
  .catch( res => {
    return { isAuthenticated: false, token: "", error: "unauthorized"}
  })
}

export function getData(action: any): Promise<TODO> {
  const token = localStorage.getItem("react-crm-token")
  switch (action.type) {
    case LIST_PROJECTS:
      let params = '';
      console.log(action.data)
      for (let key in action.data) {
        if (action.data[key]) {
          params += `${key}=${action.data[key]}&`
        }
      }
      return fetch(`${backend}/api/project/list?page=${params}`, {
        method: "POST",
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(res => res.projects)

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
      return fetch(`${backend}/api/users/all`, {
        method: "POST",
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          return res.answer
        }
      })
    case LIST_PROVIDERS: {
      return fetch(`${backend}/api/provider/list`, {
        method: "POST",
        headers: {
          "Authorization": token
        }
      })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          return res
        }
      })
    }
  }
}