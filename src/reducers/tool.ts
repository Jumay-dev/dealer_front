import {
    LIST_TOOLS,
    ToolsActionsTypes,
} from '../store/types'

export function toolReducer(
    state = {
        toolsList: []
    },
    action: ToolsActionsTypes,
) {
    switch (action.type) {
        case LIST_TOOLS: {
            return Object.assign({}, state, {
                toolsList: action.payload
            })
        }
        default: return state
    }
}