import React from "react";
import Chart from "../components/Chart"
import Paper from "@material-ui/core/Paper"
import Slider from "../components/Slider"
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
    }
  }),
);


function Main() {
  const classes = useStyles()
    return (
        <>
          <Paper className={classes.paper}>
            <Slider />
            <Chart />
          </Paper>
          
        </>
    )
}

export default Main