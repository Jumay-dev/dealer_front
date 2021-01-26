import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "../store";
import { login } from "../middleware/api";
import { signIn, signOut } from "../actions/auth";

import {
  ApiAction,
  SIGN_IN,
  SIGN_OUT,
} from "../store/types";

export const thunkAuth = (
  apiAction?: ApiAction
): ThunkAction<void, AppState, null, Action<string>> => async (dispatch) => {
  let response;

  const { type, endpoint, data, filters } = apiAction;
  
  response = data;
  if (type == SIGN_IN) {
    response = await login(endpoint, data);
  }

  dispatchSignIn(dispatch, type, response);
};

function dispatchSignIn(dispatch, type, response) {
  switch (type) {
    case SIGN_IN:
      dispatch(signIn(response));
      console.log('dispatch')
      break;
    case SIGN_OUT:
      dispatch(signOut(response));
      break;
  }
}
