import {
    ProjectActions,
    LIST_PROJECTS
} from "../store/types";

export function listProjects(result?: TODO) {
    return {
        type: LIST_PROJECTS,
        payload: result,
    };
}

export function getAction(
    action: ProjectActions,
    id: 0
) {
    switch (action) {
        case LIST_PROJECTS:
            return {
                type: LIST_PROJECTS,
                endpoint: 'projects/'
            }
    }
}