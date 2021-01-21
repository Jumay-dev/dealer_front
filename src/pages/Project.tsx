import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import CustomerReq from "../components/CustomerReq"
import CompanyReq from "../components/CompanyReq"
import ToolsTable from '../components/ToolsTable'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
    }
  }),
);

function Project() {
    const classes = useStyles();
    return (
        <>
            <Paper className={classes.paper}>
                <CustomerReq />
            </Paper>
            <Paper className={classes.paper}>
                <CompanyReq />
            </Paper>

            <Paper className={classes.paper}>
                <ToolsTable />
            </Paper>

            <Button variant="contained" color="primary">
                Отправить на авторизацию
            </Button>
        </>
    )
}

export default Project