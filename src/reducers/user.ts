import {
    LIST_USERS,
    UserActionsTypes,
    UserState
} from '../store/types'
// import { Tool, ToolModel } from "../types";

export function userReducer(
    state: UserState = {
        isFetching: true,
        usersList: [],
        // user: {},
        deleted: false,
        updated: false,
    },
    action: UserActionsTypes
) {
    switch (action.type) {
        case LIST_USERS: {
            return Object.assign({}, state, { 
                isFetching: false,
                usersList: action.payload,
                deleted: false,
                updated: false,
            })
        }

        default: return state
    }
}