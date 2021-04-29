import {
    AppState,
    SET_SUCCESS,
    UNSET_SUCCESS,
    SIDEBAR_OPENED,
    SIDEBAR_CLOSED,
    ADD_MAIL,
    CLEAR_MAILS,
    TOGGLE_MAIL
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

export function openSidebar() {
    return {
        type: SIDEBAR_OPENED
    };
}

export function closeSidebar() {
    return {
        type: SIDEBAR_CLOSED,
    };
}

export function addMail(result?) {
    return {
        type: ADD_MAIL,
        payload: result
    };
}

export function toggleMail(result?) {
    return {
        type: TOGGLE_MAIL,
        payload: result
    };
}

export function clearMails(result?) {
    return {
        type: CLEAR_MAILS,
        payload: result
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