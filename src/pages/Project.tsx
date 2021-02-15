import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import CustomerReq from "../components/CustomerReq"
import CompanyReq from "../components/CompanyReq"
import ToolsTable from '../components/ToolsTable'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        overflow: "hidden",
        marginTop: 10,
        padding: theme.spacing(3),
    },
    headerWrapper: {
        width: "100%",
        background: '#e3ecf7',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(3),
        color: "#688cbc",
        minHeight: "120px"
    },
    contentWrapper: {
        padding: theme.spacing(2),
    },
  }),
);

function Project() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.headerWrapper}>
                <Typography component="h1" variant="h4">
                    Новый проект
                </Typography>
            </div>
            <div className={classes.contentWrapper}>
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
            </div>

        </div>
    )
}

export default Project