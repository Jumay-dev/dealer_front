/* eslint-disable */
const EXPAND = "_expand"

// fakeUser kinda from backend
const ds = {
  token: { 
    accessToken: "fake-token-12345789-abcdefgh", 
    user: { firstname: "Admin", lastname: "", email: "admin@test.com", password: "password" }
  }
}

const projects = [
  {
    id: 0,
    externalId: 23,
    added: "4.01.2021",
    dealer: "ООО 'ААА'",
    employee: 'Иванов Иван',
    client: '"Доктор Айболит", г.Москва"',
    actualised: '10.01.2021',
    expires: '20.02.2021',
    manager: 'Даэсмедов Михаил Алексеевич',
  },
  {
    id: 1,
    externalId: 22,
    added: "4.01.2021",
    dealer: "ООО 'ААА'",
    employee: 'Петров Петр',
    client: '"ГП №5, г. Коломна"',
    actualised: '12.01.2021',
    expires: '25.02.2021',
    manager: 'Даэсмедов Михаил Алексеевич',
  },
  {
    id: 2,
    externalId: 25,
    added: "4.01.2021",
    dealer: "ООО 'ААА'",
    employee: 'Иванов Иван',
    client: '"Доктор Айболит", г.Москва"',
    actualised: '10.01.2021',
    expires: '20.02.2021',
    manager: 'Даэсмедов Михаил Алексеевич',
  },
  {
    id: 3,
    externalId: 19,
    added: "4.01.2021",
    dealer: "ООО 'ААА'",
    employee: 'Петров Петр',
    client: '"ГП №5, г. Коломна"',
    actualised: '12.01.2021',
    expires: '25.02.2021',
    manager: 'Даэсмедов Михаил Алексеевич',
  },
  {
    id: 4,
    externalId: 28,
    added: "4.01.2021",
    dealer: "ООО 'ААА'",
    employee: 'Иванов Иван',
    client: '"Доктор Айболит", г.Москва"',
    actualised: '10.01.2021',
    expires: '20.02.2021',
    manager: 'Даэсмедов Михаил Алексеевич',
  },
]

const authorisedTools = [
  {

  }
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
  switch (action) {
    case 'LIST_PROJECTS':
      return new Promise((resolve, _reject) => {
        let error = false
        if (!error) {
          setTimeout(resolve, 300, projects)
        }
      })
    
    case 'GET_AUTH_TOOLS':
      return new Promise((resolve, _reject) => {
        let error = false
        if (!error) {
          setTimeout(resolve, 300, authorisedTools)
        }
      })
    default: return null
  }
}

export const CALL_API = Symbol("Call API")