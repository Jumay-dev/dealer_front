import {
    ProjectActions,
    LIST_PROJECTS,
    NEW_PROJECT,
    UPDATE_PROJECTS_STATE
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

export function updateState(state) {
    return {
        type: UPDATE_PROJECTS_STATE,
        payload: state,
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
        case UPDATE_PROJECTS_STATE:
            return {
                type: UPDATE_PROJECTS_STATE,
                endpoint: 'project/',
                data
            }
    }
}