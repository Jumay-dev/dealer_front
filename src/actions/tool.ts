import {
    ToolsActions,
    LIST_TOOLS
} from "../store/types";

export function listTools(result?: TODO) {
    return {
        type: LIST_TOOLS,
        payload: result
    }
}

export function getAction(
    action: ToolsActions,
    id: 0
) {
    switch (action) {
        case LIST_TOOLS:
            return {
                type: LIST_TOOLS,
                endpoint: 'tools/'
            }
    }
}