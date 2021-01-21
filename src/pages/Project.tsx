import React from 'react'
import CustomerReq from "../components/CustomerReq"
import CompanyReq from "../components/CompanyReq"
import Paper from '@material-ui/core/Paper'

function Project() {
    return (
        <>
            <Paper>
                <CustomerReq />
            </Paper>
            <Paper>
                <CompanyReq />
            </Paper>
        </>
    )
}

export default Project