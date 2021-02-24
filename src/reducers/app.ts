import {
    AppState,
    SET_SUCCESS,
    UNSET_SUCCESS,
    SET_ERROR
} from '../store/types'

export function appReducer(
    state: AppState = {
        isFetching: true,
        projectSuccesfullyAdded: false,
        error: false,
        deleted: false,
        updated: false,
    },
    action
) {
    switch(action.type) {
        case SET_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                projectSuccesfullyAdded: true,
                deleted: false,
                updated: false,
            });
        }
        case UNSET_SUCCESS: {
            return Object.assign({}, state, {
                isFetching: false,
                projectSuccesfullyAdded: false,
                deleted: false,
                updated: false,
            });
        }
        default: return state;
    }
}

