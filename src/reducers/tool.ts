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
    console.log(action)
    switch (action.type) {
        case LIST_TOOLS: {
            return Object.assign({}, state, {
                isFetching: false,
                toolsList: action.payload,
                tool: new ToolModel() as Tool,
                deleted: false,
                updated: false,
            })
        }
        default: return state
    }
}