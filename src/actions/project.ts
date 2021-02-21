import {
    ProjectActions,
    LIST_PROJECTS,
    NEW_PROJECT
} from "../store/types";

export function listProjects(result?: TODO) {
    return {
        type: LIST_PROJECTS,
        payload: result,
    };
}

export function newProject(result?: TODO) {
    return {
        type: NEW_PROJECT,
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
        case NEW_PROJECT:
            return {
                type: NEW_PROJECT,
                endpoint: 'project/'
            }
    }
}