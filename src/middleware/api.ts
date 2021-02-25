/* eslint-disable */
import { projects_json } from './dealer_projects'
import { tools, tools_block, tools_subblock } from './infods5i_dealers'
import { projects_tools } from './dealer_projects_tools'
import { 
  LIST_PROJECTS, 
  LIST_TOOLS
 } from '../store/types'

const ds = {
  token: { 
    accessToken: "fake-token-12345789-abcdefgh", 
    user: {
      id: 1,
      firstname: "Иванов", 
      lastname: "Иван",
      patronym: "Иванович",
      email: "admin@test.com",
      password: "password",
      phone: "+7 (800) 555-35-35",
      registered: "20.01.2021 14:25",
      role: 1,
      maxDiscount: 30
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
  return new Promise(function (resolve, _reject) {
    if (data.login === "admin@test.com" && data.password === "password") {
      const { accessToken: accessToken, user } = ds.token;
      setTimeout(resolve, 300, {
        token: accessToken,
        user,
      });
    } else {
      _reject({
        code: 403,
        error: "Your name or password is wrong",
      });
    }
  });
}

export function getData(action: string): Promise<TODO> {
  console.log('action', action)
  switch (action) {
    case LIST_PROJECTS:
      return new Promise((resolve, _reject) => {
        let error = false
        if (!error) {
          setTimeout(resolve, 300, projectReducer(projects_json))
        }
      })
    
    case LIST_TOOLS:
      return new Promise((resolve, _reject) => {
        let error = false
        if (!error) {
          setTimeout(resolve, 300, tools)
        }
      })
  }
}

export const CALL_API = Symbol("Call API")