import {
  AppState,
  SET_SUCCESS,
  UNSET_SUCCESS,
  SIDEBAR_OPENED,
  SIDEBAR_CLOSED,
  ADD_MAIL,
  CLEAR_MAILS,
  TOGGLE_MAIL
} from "../store/types";

export function appReducer(
  state: AppState = {
    isFetching: true,
    projectSuccesfullyAdded: false,
    error: false,
    sidebarOpened: true,
    mails: []
  },
  action
) {
  switch (action.type) {
    case SET_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        projectSuccesfullyAdded: true,
      });
    }
    case UNSET_SUCCESS: {
      return Object.assign({}, state, {
        isFetching: false,
        projectSuccesfullyAdded: false,
      });
    }
    case SIDEBAR_OPENED: {
      return Object.assign({}, state, {
        isFetching: false,
        sidebarOpened: true,
      });
    }
    case SIDEBAR_CLOSED: {
      return Object.assign({}, state, {
        isFetching: false,
        sidebarOpened: false,
      });
    }
    case ADD_MAIL: {
      return Object.assign({}, state, {
        mails: [...state.mails, action.payload],
      });
    }
    case CLEAR_MAILS: {
      return Object.assign({}, state, {
        mails: [],
      });
    }

    case TOGGLE_MAIL: {
      let localState = state.mails.splice(0)
      localState.forEach( mail => {
        if (+mail.provider_id === +action.payload) mail.checked = !mail.checked
      })
      return Object.assign({}, state, {
        mails: localState,
      });
    }
    default:
      return state;
  }
}
