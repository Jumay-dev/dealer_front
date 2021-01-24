import React from 'react'
import ProjectOne from "../components/ProjectOne"
import Typography from '@material-ui/core/Typography'
import Search from '../components/Search'

function ProjectsList() {
    return (
        <>
            <Typography component="h1" variant="h4">
                Список проектов
            </Typography>
            
            <Search />

            <ProjectOne />
            <ProjectOne />
            <ProjectOne />
            <ProjectOne />
        </>
    )
}

export default ProjectsList