import { TapAndPlaySharp } from '@material-ui/icons'
import { 
    SET_SEARCH,
    searchState,
    searchAction
} from '../store/types'

export function searchReducer(
    state: searchState = {
        inn: '',
        kladr: '',
        tool: '',
        toolType: 0,
        datetime_start: '',
        datetime_end: '',
        lu_name: '',
        manager: '',
        query: ''
    },
    action: searchAction
) 
{
    switch (action.type) {
        case SET_SEARCH: {
            return Object.assign({}, state, { ...action.payload });
        }
        default: return state
    }
}