import React from 'react'
import ClinicOne from '../components/ClinicOne'
import Typography from '@material-ui/core/Typography'
import Search from '../components/Search'
import Pagination from '@material-ui/lab/Pagination';

function Clinics() {
    return (
        <>
            <Typography component="h1" variant="h4">
                Список лечебных учреждений
            </Typography>
            <Search />
            
            <Pagination count={10} color="secondary" size="large"/>
            <ClinicOne />
            <ClinicOne />
            <ClinicOne />
            <ClinicOne />
            <ClinicOne />
            <Pagination count={10} color="secondary" size="large"/>
        </>
    )
}

export default Clinics