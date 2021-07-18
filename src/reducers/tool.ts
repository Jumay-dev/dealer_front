import {
    LIST_TOOLS,
    LIST_CATEGORIES,
    LIST_PROVIDERS,
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
        providers: []
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
            let toolsList = []
            action.payload.tools.forEach(tool => {
                tool.checked = false
                toolsList.push(tool)
            })
            return Object.assign({}, state, {
                isFetching: false,
                categoriesList: action.payload.categories,
                toolsList
            })
        }
        case LIST_PROVIDERS: {
            return Object.assign({}, state, {
                providers: action.payload.providers
            })
        }
        default: return state
    }
}