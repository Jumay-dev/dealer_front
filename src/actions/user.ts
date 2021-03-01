import {
    UserActions,
    LIST_USERS
} from "../store/types";

export function listUsers(result?: TODO) {
    return {
        type: LIST_USERS,
        payload: result
    }
}

export function getAction(
    action: UserActions,
    data?: Object
) {
    switch (action) {
        case LIST_USERS:
            return {
                type: LIST_USERS,
                endpoint: 'tools/'
            }
    }
}