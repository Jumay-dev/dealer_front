import {
    GET_DETAILS,
    CompanyState,
    CompanyActions,
    CompanyActionTypes
} from '../store/types'

export function companyReducer(
    state: CompanyState = {
        isFetching: true,
        details: []
    },
    action: CompanyActionTypes
) {
    switch (action.type) {
        case GET_DETAILS:
            return Object.assign({}, state, {
                isFetching: false,
                details: action.payload.data.details
            })
        default: return state
    }
}