import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { 
  LineChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Line, 
  ResponsiveContainer,
  
 } from 'recharts';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainChart: {
      width: "100%",
      height: 300,
      padding: theme.spacing(3)
    }
  }),
);

function LineChartWrapper(data) {
  return (
    <LineChart 
    data={data}
    margin={{
      top: 10, right: 30, left: 0, bottom: 0,
    }}
    >
      <XAxis dataKey="name"/>
      <YAxis/>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>
  )
}

function AreaChartWrapper(data) {
  return (
    <AreaChart
    width={500}
    height={400}
    data={data}
    margin={{
      top: 10, right: 30, left: 0, bottom: 0,
    }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
      <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
    </AreaChart>
  )
}

function 

export default function Chart({header, chartType, data}) {
  const classes = useStyles();

  return (
    <div className={classes.mainChart}>
      <Typography variant="h5" align="center">
        {header}
      </Typography>
      <ResponsiveContainer>
 
      </ResponsiveContainer>
    </div>
  );
}