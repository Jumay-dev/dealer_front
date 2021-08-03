import {
    ToolsActions,
    LIST_TOOLS,
    LIST_CATEGORIES,
    LIST_PROVIDERS,
    CHECK_TOOL,
    UNCHECK_TOOL,
    RESET_CHECKED_TOOLS
} from "../store/types";

export function listTools(result?: TODO) {
    return {
        type: LIST_TOOLS,
        payload: result
    }
}

export function listCategories(result?: TODO) {
    return {
        type: LIST_CATEGORIES,
        payload: result
    }
}

export function listProviders(result?: TODO) {
    return {
        type: LIST_PROVIDERS,
        payload: result
    }
}

export function checkTool(result?: TODO) {
    return {
        type: CHECK_TOOL,
        payload: result
    }
}

export function uncheckTool(result?: TODO) {
    return {
        type: UNCHECK_TOOL,
        payload: result
    }
}

export function resetCheckedTools(result?: TODO) {
    return {
        type: UNCHECK_TOOL
    }
}

export function getAction(
    action: ToolsActions,
    data?: Object
) {
    switch (action) {
        case LIST_TOOLS:
            return {
                type: LIST_TOOLS,
                endpoint: 'tools/'
            }
        case LIST_CATEGORIES:
            return {
                type: LIST_CATEGORIES,
                endpoint: 'categories/'
            }
    }
}