/* eslint-disable */
const EXPAND = "_expand"

function getModel(action: string) {
  if (action.includes("/")) {
    return action.substring(0, action.indexOf("/"))
  }
  else {
    return action;
  }
}

function getId(action: string): number {
  if (action.includes("/")) {
    return parseInt(action.substring(action.indexOf("/") + 1))
  }
  else {
    return 0
  }
}

function getExpand(qs: TODO) {
  if (EXPAND in qs) {
    return qs[EXPAND];
  }
  else return ''
}

// fakeUser
const ds = {
  token: { 
    accessToken: "fake-token-12345789-abcdefgh", 
    user: { firstname: "Admin", lastname: "", email: "admin@test.com", password: "password" }
  }
}

export function login(action: string, data: TODO): Promise<TODO> {
  return new Promise(function (resolve, _reject) {
    // if (data.username === "admin@test.com" && data.password === "password") {
    if (true) {
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

export const CALL_API = Symbol("Call API")