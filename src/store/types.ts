import { User, Project, Tool, Category } from "../types";

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
  payload: { user?: User; token?: string; error?: string };
  error?: string;
}

interface SignOutAction {
  type: typeof SIGN_OUT;
  payload: { user?: User; token?: string };
  error?: string;
}
interface AuthCheckAction {
  type: typeof AUTH_CHECK;
  payload: {
    user?: User;
    token?: string;
    isAuthenticated?: boolean;
    error?: string;
  };
  error?: string;
}

export type AuthActionTypes = SignInAction | SignOutAction | AuthCheckAction;

export type AuthActions = typeof SIGN_IN | typeof SIGN_OUT | typeof AUTH_CHECK;

// Project types
export const LIST_PROJECTS = "LIST_PROJECTS";
export const GET_PROJECT = "GET_PROJECT";
export const NEW_PROJECT = "NEW_PROJECT";
export const EDIT_PROJECT = "EDIT_PROJECT";
export const UPDATE_PROJECTS_STATE = "UPDATE_PROJECTS_STATE";

interface ListProjectsAction {
  type: typeof LIST_PROJECTS;
  payload: any;
}

interface NewProjectAction {
  type: typeof NEW_PROJECT;
  payload: Project;
  error?: string;
}

interface UpdateProjectState {
  type: typeof UPDATE_PROJECTS_STATE;
  payload: any;
}

export interface ProjectState {
  isFetching: boolean;
  project: Project;
  projectsList: any;
  error?: null;
  deleted?: boolean;
  updated?: boolean;
  page?: number;
  limit?: number;
  total?: number;
}

export type ProjectActions =
  | typeof LIST_PROJECTS
  | typeof GET_PROJECT
  | typeof NEW_PROJECT
  | typeof EDIT_PROJECT
  | typeof UPDATE_PROJECTS_STATE;

export type ProjectActionTypes =
  | ListProjectsAction
  | NewProjectAction
  | UpdateProjectState;

// Tools types
export const LIST_TOOLS = "LIST_TOOLS";
export const LIST_CATEGORIES = "LIST_CATEGORIES";

export interface ToolsState {
  isFetching: boolean;
  toolsList: Tool[];
  categoriesList: Category[];
  tool: Tool;
  error?: null;
  deleted?: boolean;
  updated?: boolean;
  providers: Array<any>;
}

interface ListToolsAction {
  type: typeof LIST_TOOLS | typeof LIST_CATEGORIES;
  payload: any;
}

interface ListCategoriesAction {
  type: typeof LIST_CATEGORIES;
  payload: any;
}

interface ListProvidersAction {
  type: typeof LIST_PROVIDERS;
  payload: any;
}

export type ToolsActions = typeof LIST_TOOLS | typeof LIST_CATEGORIES | typeof LIST_PROVIDERS;

export type ToolsActionsTypes = ListToolsAction | ListCategoriesAction | ListProvidersAction;

// Apptypes
export const SET_SUCCESS = "SET_SUCCESS";
export const UNSET_SUCCESS = "UNSET_SUCCESS";
export const SET_ERROR = "SET_ERROR";
export const SIDEBAR_OPENED = "SIDEBAR_OPENED";
export const SIDEBAR_CLOSED = "SIDEBAR_CLOSED";
export const PUSH_NOTIFICATION = "UPDATE_NOTIFICATION";
export const POP_NOTIFICATION = "POP_NOTIFICATION";
export const ADD_MAIL = "ADD_MAIL"
export const CLEAR_MAILS = "CLEAR_MAILS"
export const TOGGLE_MAIL = "TOGGLE_MAIL"

export interface AppState {
  isFetching: boolean;
  projectSuccesfullyAdded: boolean;
  error?: boolean;
  sidebarOpened: boolean;
  mails: Array<any>;
}

export type Notification = {
  severity: string;
  text: string;
  id: string;
};

export type AppActions =
  | typeof SET_SUCCESS
  | typeof UNSET_SUCCESS
  | typeof SET_ERROR
  | typeof SIDEBAR_OPENED
  | typeof SIDEBAR_CLOSED;

// User types
export const LIST_USERS = "LIST_USERS";
export const NEW_USER = "NEW_USER";

export interface UserState {
  isFetching: boolean;
  usersList: User[];
  error?: null;
  user: User;
  deleted?: boolean;
  updated?: boolean;
}

export type UserActions = typeof LIST_USERS | typeof NEW_USER;

interface ListUsersAction {
  type: typeof LIST_USERS;
  payload: User[];
}

export type UserActionsTypes = ListUsersAction;

// Company types
export const GET_DETAILS = "GET_DETAILS";

export interface CompanyState {
  isFetching: boolean;
  details: Array<Object>;
  error?: boolean;
}

export type CompanyActions = typeof GET_DETAILS;

interface GetDetailAction {
  type: typeof GET_DETAILS;
  payload: any;
}

export type CompanyActionTypes = GetDetailAction;

// snackbar queue
export const ENQUEUE_SNACKBAR = 'ENQUEUE_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
export const REMOVE_SNACKBAR = 'REMOVE_SNACKBAR';
export const OPEN_SNACKBAR = "OPEN_SNACKBAR";

export const LIST_PROVIDERS = "LIST_PROVIDERS"

//search state
export const SEARCH_PROJECTS = "SEARCH_PROJECTS";
export const SET_SEARCH = "SET_SEARCH";

export interface searchState {
  inn?: string; 
  kladr?: string; 
  tool?: string; 
  tool_type?: string;
  datetime_start?: string; 
  datetime_end?: string;
  lu_name?: string;
  manager?: string;
  all?: string;
}

interface searchQuery {
  inn?: string; 
  kladr?: string; 
  tool?: string; 
  toolType?: string; 
  date?: string; 
  lu_name?: string;
  manager?: string;
  query: string;
}

export interface searchAction {
  type: string;
  payload: searchQuery;
}
