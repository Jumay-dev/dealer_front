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
                usersList: jsonPlaceHolderHadler(action.payload),
                deleted: false,
                updated: false,
            })
        }

        default: return state
    }
}

function jsonPlaceHolderHadler(payload) {
    const hadledArray = []
    payload.forEach(outerUser => {
        hadledArray.push({
            firstname: outerUser.name.split(' ')[0],
            lastname: outerUser.name.split(' ')[1],
            patronym: 'Dou',
            registered: '18.15.2016',
            phone: outerUser.phone,
            mail: outerUser.email,
            role: '1',
            maxDiscount: '30',
            projectVisibility: '1'
        })
    })
    return hadledArray
}