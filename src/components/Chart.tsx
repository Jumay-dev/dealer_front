import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { 
  LineChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Line, 
  ResponsiveContainer,
  AreaChart, 
  Area,
  Tooltip,
  PieChart, 
  Pie, 
  Sector, 
  Cell,
  Legend,
  Bar,
  ComposedChart
 } from 'recharts';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { curveCardinal } from 'd3-shape';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainChart: {
      width: "100%",
      height: 300,
      padding: theme.spacing(3)
    }
  }),
);

const cardinal = curveCardinal.tension(0.2);

function LineChartWrapper({data}) {
  return (
    <ResponsiveContainer>
      <LineChart 
      data={data}
      margin={{
        top: 10, right: 30, left: 0, bottom: 0,
      }}
      >
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
        <Line type="monotone" dataKey="uv" stroke="rgb(104, 140, 188)" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}

function AreaChartWrapper({data}) {
  return (
    <ResponsiveContainer>
      <AreaChart
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="rgb(104, 140, 188)" fill="rgb(104, 140, 188)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

function ComposedChartWrapper({data}) {
  return (
    <ResponsiveContainer>
      <ComposedChart
        data={data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="uv" barSize={20} fill="rgb(104, 140, 188)" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  )
}

function PieChartWrapper({data}) {
  const data01 = data.data01
  const data02 = data.data02
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie dataKey="value" isAnimationActive={false} data={data01} outerRadius={80} fill="rgb(104, 140, 188)" label />
        <Pie dataKey="value" data={data02} innerRadius={40} outerRadius={80} fill="#82ca9d" />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

function ChartRenderer({chartType, data}) {
  switch(chartType) {
    case 'line':
      return <LineChartWrapper data={data}/>
    case 'area':
      return <AreaChartWrapper data={data}/>
    case 'pie':
      return <PieChartWrapper data={data}/>
    case 'composed':
      return <ComposedChartWrapper data={data}/>
    default: return null
  }
}

export default function Chart({header, chartType, data}) {
  const classes = useStyles();

  return (
    <div className={classes.mainChart}>
      <Typography variant="h5" align="center">
        {header}
      </Typography>
      <ChartRenderer data={data} chartType={chartType}/>
    </div>
  );
}