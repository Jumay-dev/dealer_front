import {
    User,
  } from "../types";
  
  export enum HttpMethod {
    GET,
    POST,
    PUT,
    DELETE,
  }
  
  export interface ApiAction {
    type: TODO;
    endpoint: string;
    data?: TODO;
    filters?: TODO;
  }
  
  export interface QActions {
    type: TODO;
    actions: { [key: string]: ApiAction };
  }
  
  export const SIGN_IN = "SIGN_IN";
  export const SIGN_OUT = "SIGN_OUT";
  
  export interface AuthState {
    isFetching: boolean;
    user: User;
    token: string | undefined | null;
    isAuthenticated: boolean;
    errorMessage?: null;
  }
  interface SignInAction {
    type: typeof SIGN_IN;
    payload: { user?: User; token?: string };
    error?: string;
  }
  
  interface SignOutAction {
    type: typeof SIGN_OUT;
    payload: { user?: User; token?: string };
    error?: string;
  }
  
  export type AuthActionTypes = SignInAction | SignOutAction;
  
  export type AuthActions = typeof SIGN_IN | typeof SIGN_OUT;