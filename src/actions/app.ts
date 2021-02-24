import {
    AppState,
    SET_SUCCESS,
    UNSET_SUCCESS,
    SET_ERROR
} from '../store/types'

export function setSuccess() {
    return {
      type: SET_SUCCESS,
    };
}

export function unsetSuccess() {
    return {
      type: UNSET_SUCCESS,
    };
}

export function getAction(
    action,
    data?: Object
) {
    switch (action) {
        case SET_SUCCESS:
            return {
                type: SET_SUCCESS,
                endpoint: 'app/'
            }

        case UNSET_SUCCESS:
            return {
                type: UNSET_SUCCESS,
                endpoint: 'app/'
            }
    }
}