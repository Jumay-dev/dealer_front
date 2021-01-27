import {
    ProjectActionTypes,
    LIST_PROJECTS
} from '../store/types'

export function projectReducer(
    state: {
        projectsList: []
    },
    action: ProjectActionTypes
) {
    switch (action.type) {
        case LIST_PROJECTS: {
            return Object.assign({}, state, {
                projectsList: action.payload
            })
        }
        default: return {
            projectsList: []
        }
    }
}