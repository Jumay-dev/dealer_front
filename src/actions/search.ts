import {
    SET_SEARCH,
    searchAction
} from '../store/types'

export function setSearch(result: TODO): searchAction {
    return {
        type: SET_SEARCH,
        payload: result
    }
}