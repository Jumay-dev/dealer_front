import {
    GET_DETAILS,
    CompanyActions
} from "../store/types";

export function listDetails(result?: TODO) {
    return {
        type: GET_DETAILS,
        payload: result,
    };
}

export function getAction(
    action: CompanyActions,
    data?: Object
) {
    switch (action) {
        case GET_DETAILS:
            return {
                type: GET_DETAILS,
                endpoint: 'projects/',
                data
            }
    }
}