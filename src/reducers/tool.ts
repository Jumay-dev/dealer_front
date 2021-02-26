import {
    LIST_TOOLS,
    ToolsActionsTypes,
    ToolsState,
} from '../store/types'
import { Tool, ToolModel } from "../types";

export function toolReducer(
    state: ToolsState = {
        isFetching: true,
        toolsList: [],
        tool: new ToolModel() as Tool,
        deleted: false,
        updated: false,
    },
    action: ToolsActionsTypes
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