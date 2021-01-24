import React from 'react'
import ClinicOne from '../components/ClinicOne'
import Typography from '@material-ui/core/Typography'

function Clinics() {
    return (
        <>
            <Typography component="h1" variant="h4">
                Список проектов
            </Typography>

            <ClinicOne />
            <ClinicOne />
            <ClinicOne />
            <ClinicOne />
            <ClinicOne />
        </>
    )
}

export default Clinics