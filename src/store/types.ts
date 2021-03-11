import {
  User,
  Project,
  Tool,
  Category
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
export const AUTH_CHECK = "AUTH_CHECK";

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
interface AuthCheckAction {
  type: typeof AUTH_CHECK;
  payload: {user?: User; token?: string, isAuthenticated?: boolean };
  error?: string;
}

export type AuthActionTypes = SignInAction | SignOutAction | AuthCheckAction;

export type AuthActions = typeof SIGN_IN 
| typeof SIGN_OUT
| typeof AUTH_CHECK


// Project types
export const LIST_PROJECTS = "LIST_PROJECTS"
export const GET_PROJECT = "GET_PROJECT"
export const NEW_PROJECT = "NEW_PROJECT"
export const EDIT_PROJECT = "EDIT_PROJECT"

interface ListProjectsAction {
  type: typeof LIST_PROJECTS;
  payload: Project[];
}

interface NewProjectAction {
  type: typeof NEW_PROJECT
  payload: Project;
  error?: string;
}

export interface ProjectState {
  isFetching: boolean;
  project: Project;
  projectsList: any;
  error?: null;
  deleted?: boolean;
  updated?: boolean;
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
export const LIST_CATEGORIES = "LIST_CATEGORIES"

export interface ToolsState {
  isFetching: boolean;
  toolsList: Tool[];
  categoriesList: Category[];
  tool: Tool;
  error?: null;
  deleted?: boolean;
  updated?: boolean;
}

interface ListToolsAction {
  type: typeof LIST_TOOLS | typeof LIST_CATEGORIES;
  payload: any;
}



interface ListCategoriesAction {
  type: typeof LIST_CATEGORIES;
  payload: any;
}

export type ToolsActions = typeof LIST_TOOLS
| typeof LIST_CATEGORIES

export type ToolsActionsTypes = 
| ListToolsAction
| ListCategoriesAction


// Apptypes
export const SET_SUCCESS = "SET_SUCCESS"
export const UNSET_SUCCESS = "UNSET_SUCCESS"
export const SET_ERROR = "SET_ERROR"
export const SIDEBAR_OPENED = "SIDEBAR_OPENED"
export const SIDEBAR_CLOSED = "SIDEBAR_CLOSED"

export interface AppState {
  isFetching: boolean;
  projectSuccesfullyAdded: boolean;
  error?: boolean;
  sidebarOpened: boolean;
}

export type AppActions = typeof SET_SUCCESS
| typeof UNSET_SUCCESS
| typeof SET_ERROR
| typeof SIDEBAR_OPENED
| typeof SIDEBAR_CLOSED

// User types
export const LIST_USERS = "LIST_USERS"
export const NEW_USER = "NEW_USER"

export interface UserState {
  isFetching: boolean;
  usersList: User[];
  error?: null;
  user: User;
  deleted?: boolean;
  updated?: boolean;
}

export type UserActions = typeof LIST_USERS
| typeof NEW_USER

interface ListUsersAction {
  type: typeof LIST_USERS;
  payload: User[];
}

export type UserActionsTypes =
| ListUsersAction