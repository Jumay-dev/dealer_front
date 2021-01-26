import {
    ProjectActionTypes,
    LIST_PROJECTS,
    NEW_PROJECT
} from '../store/types'

import { Project } from "../types";

export function projectReducer(
    state: {
        projectsList: []
    },
    action: ProjectActionTypes
) {
    switch (action.type) {
        case LIST_PROJECTS: {
            console.log(action.payload)
            return Object.assign({}, state, {
                projectsList: action.payload
            })
        }
        default: return {
            projectsList: []
        }
    }
}