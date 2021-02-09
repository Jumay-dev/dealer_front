import React from 'react'
import Paper from '@material-ui/core/Paper'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        width: "40%",
        marginRight: 10,
        padding: 10
    }
  }),
);

function ComOffer() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            Контент КП
        </Paper>
    )
}

export default ComOffer