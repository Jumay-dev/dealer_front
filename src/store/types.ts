import {
  User,
  Project,
  Tool
} from "../types";
  
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


// Project types
export const LIST_PROJECTS = "LIST_PROJECTS"
export const GET_PROJECT = "GET_PROJECT"
export const NEW_PROJECT = "NEW_PROJECT"
export const EDIT_PROJECT = "EDIT_PROJECT"

export interface ProjectState {
  list: Project[];
}

interface ListProjectsAction {
  type: typeof LIST_PROJECTS;
  payload: Project[];
}

interface NewProjectAction {
  type: typeof NEW_PROJECT
  payload: Project;
  error?: string;
}

export type ProjectActions = 
  | typeof LIST_PROJECTS
  | typeof GET_PROJECT
  | typeof NEW_PROJECT
  | typeof EDIT_PROJECT

export type ProjectActionTypes = 
  | ListProjectsAction
  | NewProjectAction

// Tools types
export const LIST_TOOLS = "LIST_TOOLS"

export interface ToolsState {
  list: Tool[];
}

interface ListToolsAction {
  type: typeof LIST_TOOLS;
  payload: Tool[];
}

export type ToolsActions = string
  // | typeof LIST_TOOLS

export type ToolsActionsTypes = 
| ListToolsAction