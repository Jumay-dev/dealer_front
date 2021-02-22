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

export function newProject(project) {
    return {
        type: NEW_PROJECT,
        payload: project,
    };
}

export function getAction(
    action: ProjectActions,
    data?: Object
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
                endpoint: 'project/',
                data
            }
    }
}