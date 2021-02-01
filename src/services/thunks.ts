import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";

import { login } from "../middleware/api";
import { signIn, signOut } from "../actions/auth";

import { getData } from "../middleware/api";
import { listProjects } from "../actions/project";
import { listTools } from "../actions/tool";

import {
  ApiAction,
  SIGN_IN,
  SIGN_OUT,
  LIST_PROJECTS,
  LIST_TOOLS
} from "../store/types";

export const thunkAuth = (
  apiAction?: ApiAction
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  let response;
  const { type, endpoint, data } = apiAction;

  response = data;
  if (type === SIGN_IN) {
    response = await login(endpoint, data);
  }
  dispatchSignIn(dispatch, type, response);
};

export const thunkData = (
  apiAction?: ApiAction
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  const { type, endpoint, data } = apiAction;
  let response = data

  if (type === LIST_PROJECTS) {
    response = await getData(LIST_PROJECTS);
  }
  if (type === LIST_TOOLS) {
    response = await getData(LIST_TOOLS);
  }
  console.log('type', type)
  dispatchListProject(dispatch, type, response)
}

function dispatchListProject(dispatch, type, response) {
  switch (type) {
    case LIST_PROJECTS:
      dispatch(listProjects(response));
      break;
    case LIST_TOOLS:
      dispatch(listTools(response));
      break;
  }
}

function dispatchSignIn(dispatch, type, response) {
  switch (type) {
    case SIGN_IN:
      dispatch(signIn(response));
      break;
    case SIGN_OUT:
      dispatch(signOut(response));
      break;
  }
}