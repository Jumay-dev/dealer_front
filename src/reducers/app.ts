import {
    AppState,
    SET_SUCCESS,
    UNSET_SUCCESS,
    SIDEBAR_OPENED,
    SIDEBAR_CLOSED,
    SET_ERROR
} from '../store/types'

export function appReducer(
    state: AppState = {
        isFetching: true,
        projectSuccesfullyAdded: false,
        error: false,
        sidebarOpened: true
    },
    action
) {
    switch(action.type) {
        case SET_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                projectSuccesfullyAdded: true
            });
        }
        case UNSET_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                projectSuccesfullyAdded: false
            });
        }
        case SIDEBAR_OPENED: {
            return Object.assign({}, state, {
                isFetching: false,
                sidebarOpened: true
            });
        }
        case SIDEBAR_CLOSED: {
            return Object.assign({}, state, {
                isFetching: false,
                sidebarOpened: false
            });
        }
        default: return state;
    }
}

