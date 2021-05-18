import { TapAndPlaySharp } from '@material-ui/icons'
import { 
    SET_SEARCH,
    searchState,
    searchAction
} from '../store/types'

const initialState: searchState = {
    inn: '',
    kladr: '',
    tool: '',
    tool_type: 'all',
    datetime_start: '',
    datetime_end: '',
    lu_name: '',
    manager: '',
    all: ''
}

export function searchReducer(
    state: searchState = initialState,
    action: searchAction
) 
{console.log(action.payload)
    switch (action.type) {
        case SET_SEARCH: {
            return Object.assign({}, state, { ...initialState, ...action.payload });
        }
        default: return state
    }
}