import {
    ToolsActions,
    LIST_TOOLS,
    LIST_CATEGORIES
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