import React from "react";
import Chart from "../components/Chart"
import Paper from "@material-ui/core/Paper"
import Slider from "../components/Slider"
import Grid from "@material-ui/core/Grid"
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
    }
  }),
);

const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

function Main() {
  const classes = useStyles()
    return (
        <>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item lg={12}>
                <Slider />
              </Grid>
              <Grid item lg={6}>
                <Chart header={"Статистика продаж"} chartType={"line"} data={data}/>
              </Grid>
              <Grid item lg={6}>
                <Chart header={"Динамика авторизаций"} chartType={"line"} data={data}/>
              </Grid>
            </Grid>
          </Paper>
          
        </>
    )
}

export default Main