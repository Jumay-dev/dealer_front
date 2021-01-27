import {
    LIST_TOOLS,
    ToolsActionsTypes,
} from '../store/types'

export function toolReducer(
    action: ToolsActionsTypes,
    state: {
        toolsList: []
    }
) {
    switch (action.type) {
        case LIST_TOOLS:
            return Object.assign({}, state, {
                toolsList: action.payload
            })
        default: return {
            toolsList: []
        }
    }
}