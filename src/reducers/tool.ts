import {
    LIST_TOOLS,
    LIST_CATEGORIES,
    LIST_PROVIDERS,
    CHECK_TOOL,
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
        case CHECK_TOOL: {
            let toolsList = []
            console.log('payload', action.payload)
            state.toolsList.forEach(tool => {
                if (+tool.id === +action.payload.id) {
                    tool.checked = true
                }
                toolsList.push(tool)
            })
            return Object.assign({}, state, {
                toolsList
            })
        }
        default: return state
    }
}