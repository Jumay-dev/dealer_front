import React from "react";
import Chart from "../components/Chart";
import Paper from "@material-ui/core/Paper";
import Slider from "../components/Slider";
import Grid from "@material-ui/core/Grid";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { thunkData } from "../services/thunks";
import { LIST_CATEGORIES } from "../store/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
    },
  })
);

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const data02 = [
  { name: "Group A", value: 2400 },
  { name: "Group B", value: 4567 },
  { name: "Group C", value: 1398 },
  { name: "Group D", value: 9800 },
  { name: "Group E", value: 3908 },
  { name: "Group F", value: 4800 },
];

function Main(props) {
  const classes = useStyles();
  React.useEffect(() => {
    let categoriesListAction = {
      type: LIST_CATEGORIES,
      endpoint: "categories/",
      data: {},
    };
    props.getTools(categoriesListAction);
  }, [])
  return (
    <>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item lg={12}>
            <Slider />
          </Grid>
          <Grid item lg={6}>
            <Chart
              header={"Статистика продаж"}
              chartType={"line"}
              data={data}
            />
          </Grid>
          <Grid item lg={6}>
            <Chart
              header={"Динамика авторизаций"}
              chartType={"area"}
              data={data}
            />
          </Grid>
          <Grid item lg={6}>
            <Chart
              header={"Направления"}
              chartType={"pie"}
              data={{ data01, data02 }}
            />
          </Grid>
          <Grid item lg={6}>
            <Chart
              header={"Проектная активность"}
              chartType={"composed"}
              data={data}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

function mapStateToProps(state) {
  const { auth, app } = state;
  const { isAuthenticated, token } = auth;

  return {
    isAuthenticated,
    token,
    notificationsQueue: app.notificationsQueue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProjects: (action: TODO) => dispatch(thunkData(action)),
    getTools: (action: TODO) => dispatch(thunkData(action))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
