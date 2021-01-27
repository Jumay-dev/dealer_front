/* eslint-disable */
import { projects_json } from './dealer_projects'
import { tools, tools_block, tools_subblock } from './infods5i_dealers'
import { projects_tools } from './dealer_projects_tools'
import { LIST_PROJECTS, LIST_TOOLS } from '../store/types'

const EXPAND = "_expand"
// fakeUser kinda from backend
const ds = {
  token: { 
    accessToken: "fake-token-12345789-abcdefgh", 
    user: { firstname: "Admin", lastname: "", email: "admin@test.com", password: "password" }
  }
}

function projectReducer(arr) {
  let projects = []
  arr.forEach(item => {
    let currentItem = item
    let projectTools = projects_tools.filter( elem => +elem.project_id === +currentItem.id)
    console.log('tools', projectTools)
    projects.push({
      id: currentItem.id,
      externalId: 28,
      added: "4.01.2021",
      dealer: "ООО 'ААА'",
      employee: 'Иванов Иван',
      client: currentItem.brend_name,
      actualised: '10.01.2021',
      expires: '20.02.2021',
      manager: 'Даэсмедов Михаил Алексеевич',
      tools: projectTools
    })
  })
  return projects
}

const authorisedTools = [
  {
    id: 0,
    projectId: 1,
    name: 'Рентгеновский аппарат Listem REX-650RF: FLUOROSCOPY'
  },
  {
    id: 1,
    projectId: 1,
    name: 'Многофункциональный монитор пациента Votem VP-1200'
  },
  {
    id: 2,
    projectId: 1,
    name: 'Рентгеновский аппарат Listem REX-650RF: FLUOROSCOPY'
  },
  {
    id: 3,
    projectId: 1,
    name: 'Многофункциональный монитор пациента Votem VP-1200'
  },
]

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
    
    default: return null
  }
}

export const CALL_API = Symbol("Call API")