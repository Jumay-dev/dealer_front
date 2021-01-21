import React from 'react'
import ProjectOne from "../components/ProjectOne"
import Typography from '@material-ui/core/Typography'

function ProjectsList() {
    return (
        <>
            <Typography component="h1" variant="h4">
                Список проектов
            </Typography>

            <ProjectOne />
            <ProjectOne />
            <ProjectOne />
            <ProjectOne />
        </>
    )
}

export default ProjectsList