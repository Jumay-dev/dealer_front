import React from 'react'
import ClinicOne from '../components/ClinicOne'
import Typography from '@material-ui/core/Typography'
import Search from '../components/Search'

function Clinics() {
    return (
        <>
            <Typography component="h1" variant="h4">
                Список лечебных учреждений
            </Typography>
            <Search />

            <ClinicOne />
            <ClinicOne />
            <ClinicOne />
            <ClinicOne />
            <ClinicOne />
        </>
    )
}

export default Clinics