import {
    LIST_USERS,
    UserActionsTypes,
    UserState
} from '../store/types'
import { User, UserModel } from "../types";

export function userReducer(
    state: UserState = {
        isFetching: true,
        usersList: [],
        user: new UserModel() as User,
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