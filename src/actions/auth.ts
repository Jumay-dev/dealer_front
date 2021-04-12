import {
  SIGN_IN,
  SIGN_OUT,
  AUTH_CHECK,
  AuthActions,
  ApiAction,
} from "../store/types";
import { Entity } from "../types";

// Login actions

export function signIn(result?: TODO) {
  return {
    type: SIGN_IN,
    payload: result,
  };
}

export function signOut(result?: TODO) {
  return {
    type: SIGN_OUT,
    payload: result,
  };
}

export function setAuth(result?: TODO) {
  return {
    type: AUTH_CHECK,
    payload: result
  }
}

export function getAction(
  action: AuthActions,
  id = 0,
  data?: Entity,
  query?: string
): ApiAction {
  switch (action) {
    case SIGN_IN:
      return {
        type: SIGN_IN,
        endpoint: "login/",
      };
    case SIGN_OUT:
      return {
        type: SIGN_OUT,
        endpoint: "logout/" + id,
      };
    case AUTH_CHECK:
      return {
        type: AUTH_CHECK,
        endpoint: "logout/" + id,
      };
  }
}
