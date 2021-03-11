import {
    LIST_TOOLS,
    LIST_CATEGORIES,
    ToolsActionsTypes,
    ToolsState,
} from '../store/types'
import { Tool, ToolModel } from "../types";

export function toolReducer(
    state: ToolsState = {
        isFetching: true,
        toolsList: [],
        categoriesList: [],
        tool: new ToolModel() as Tool,
        deleted: false,
        updated: false,
    },
    action: ToolsActionsTypes
) {
    switch (action.type) {
        case LIST_TOOLS: {
            return Object.assign({}, state, {
                isFetching: false,
                toolsList: action.payload.tools,
                tool: new ToolModel() as Tool,
                deleted: false,
                updated: false,
            })
        }
        case LIST_CATEGORIES: {
            return Object.assign({}, state, {
                isFetching: false,
                categoriesList: action.payload.categories,
                toolsList: action.payload.tools,
                deleted: false,
                updated: false,
            })
        }
        default: return state
    }
}