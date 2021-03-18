import React from 'react'
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: "100vh"
    },
  }));


export default function AppIsLoading() {
    const classes = useStyles()
    return (
        <div className={classes.paper}>
            <CircularProgress color="primary"/>
        </div>
    )
}