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
  console.log('logout in thunksAuth')

  const { type, endpoint, data } = apiAction;

  console.log('apiAction', apiAction)
  
  response = data;
  if (type === SIGN_IN) {
    response = await login(endpoint, data);
  }

  console.log('type', type)

  dispatchSignIn(dispatch, type, response);
};

function dispatchSignIn(dispatch, type, response) {
  console.log('logout in thunks dispatchSignIn')
  switch (type) {
    case SIGN_IN:
      console.log('sign in case')
      dispatch(signIn(response));
      break;
    case SIGN_OUT:
      console.log('sign out case')
      dispatch(signOut(response));
      break;
  }
}
