import { 
  AuthActionTypes,
  AuthState, 
  SIGN_IN, 
  SIGN_OUT, 
  AUTH_CHECK 
} from "../store/types";
import { User } from "../types";

function getUser(): User {
  const user = localStorage.getItem("react-crm-user")
  return user ? JSON.parse(user) : {} as User
}
function getToken(): string | undefined {
  const token = localStorage.getItem("react-crm-token")
  return token ? token : undefined
}
function setTokenUser(token, user) {
  localStorage.setItem("react-crm-token", token);
  localStorage.setItem("react-crm-user", JSON.stringify(user));
}

function removeTokenUser(){
  localStorage.removeItem("react-crm-token");
  localStorage.removeItem("react-crm-user");
}

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export function authReducer(
  state: AuthState = {
    isFetching: false,
    // isAuthenticated: isSignIned(),// localStorage.getItem("token") ? true : false,
    isAuthenticated: false,
    user: getUser(),
    token: getToken()
  },
  action: AuthActionTypes
) {
  const payload = action.payload
  switch (action.type) {
    case SIGN_IN:
      if (action.payload.error === "unauthorized") {
        return Object.assign({}, state, {
          isFetching: false,
          isAuthenticated: false,
          errorMessage: action.payload.error,
          user: undefined,
          token: ''
        });
      }
      else {
        setTokenUser(payload.token, payload.user)
        return Object.assign({}, state, {
          isFetching: false,
          isAuthenticated: true,
          errorMessage: "",
          user: action.payload.user,
          token: action.payload.token
        });
      }
    case SIGN_OUT:
      removeTokenUser()
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: undefined,
        token: undefined
      })
    case AUTH_CHECK:
      if (action.payload.error === "unauthorized") {
        return Object.assign({}, state, {
          isAuthenticated: action.payload.isAuthenticated,
          user: action.payload.user,
          token: ''
        })
      }
      return Object.assign({}, state, {
        isAuthenticated: action.payload.isAuthenticated,
        user: action.payload.user
      })
    default:
      return state;
  }
}