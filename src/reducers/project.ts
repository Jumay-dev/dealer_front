import {
    ProjectState,
    ProjectActionTypes,
    LIST_PROJECTS,
    NEW_PROJECT,
    UPDATE_PROJECTS_STATE
} from '../store/types'

import { Project, ProjectModel } from "../types";

export function projectReducer(
    state: ProjectState = {
        isFetching: true,
        projectsList: [],
        project: new ProjectModel() as Project,
        deleted: false,
        updated: false,
        page: 1,
        limit: 10,
        total: 0,
    },
    action: ProjectActionTypes
) {
    switch (action.type) {
        case LIST_PROJECTS: {
            return Object.assign({}, state, {
                isFetching: false,
                projectsList: action.payload.data,
                total: action.payload.total,
                errorMessage: "",
                deleted: false,
                updated: false,
            });
        }
        case NEW_PROJECT: {
            return Object.assign({}, state, {
                isFetching: false,
                project: action.payload,
                projectsList: state.projectsList.concat(action.payload),
                errorMessage: action.error,
                deleted: false,
                updated: false,
            });
        }
        case UPDATE_PROJECTS_STATE: {
            return Object.assign({}, state, { ...action.payload });
        }
        default: return state
    }
}