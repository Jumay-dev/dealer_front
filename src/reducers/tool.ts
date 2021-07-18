import {
    LIST_TOOLS,
    LIST_CATEGORIES,
    LIST_PROVIDERS,
    CHECK_TOOL,
    UNCHECK_TOOL,
    RESET_CHECKED_TOOLS,
    ToolsActionsTypes,
    ToolsState,
} from '../store/types'
import { Tool, ToolModel } from "../types";

export function toolReducer(
    state: ToolsState = {
        isFetching: true,
        toolsList: [],
        checkedTools: [],
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
            return Object.assign({}, state, {
                isFetching: false,
                categoriesList: action.payload.categories,
                toolsList: action.payload.tools
            })
        }
        case LIST_PROVIDERS: {
            return Object.assign({}, state, {
                providers: action.payload.providers
            })
        }
        case CHECK_TOOL: {
            let checkedTools = state.checkedTools
            checkedTools.push(action.payload)
            return Object.assign({}, state, {
                checkedTools
            })
        }
        case UNCHECK_TOOL: {
            let checkedTools = state.checkedTools.filter(tool => +tool.id !== +action.payload.id)
            return Object.assign({}, state, {
                checkedTools
            })
        }
        case RESET_CHECKED_TOOLS: {
            return Object.assign({}, state, {
                checkedTools: []
            })
        }
        default: return state
    }
}