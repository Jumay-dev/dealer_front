import {
    ProjectState,
    ProjectActionTypes,
    LIST_PROJECTS,
    NEW_PROJECT
} from '../store/types'

import { Project, ProjectModel } from "../types";

export function projectReducer(
    state: ProjectState = {
        isFetching: true,
        projectsList: [],
        project: new ProjectModel() as Project,
        deleted: false,
        updated: false,
    },
    action: ProjectActionTypes
) {
    switch (action.type) {
        case LIST_PROJECTS: {
            return Object.assign({}, state, {
                isFetching: false,
                projectsList: action.payload,
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
        default: return state
    }
}