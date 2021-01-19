import React, { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';

import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import { Typography, ListItemIcon } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const blue600 = blue["800"];

const useStyles = makeStyles(() =>
  createStyles({
    menuItem: {
      color: blue600,
      fontWeight: 800,
      paddingTop: "0.2em",
      paddingBottom: "0.2em",
      fontSize: 16,
    },
  })
);


export function MainListItems() {
    const [active, setActive] = useState('main')
    const styles = useStyles();

    function clickHandler(e, data) {
        console.log(data)
    }
    return (
    <div>
    <Link key={`link_1`} to="/" className="MuiListItem-button">
        <MenuItem key={1} className="MuiListItem-button" >
        <ListItemIcon ><DashboardIcon /></ListItemIcon>
        <ListItemText primary="Главная"/>
        </MenuItem>
    </Link>

    <Link key={`link_1`} to="/projects" className="MuiListItem-button">
        <MenuItem key={1} className="MuiListItem-button">
        <ListItemIcon ><DashboardIcon /></ListItemIcon>
        <ListItemText primary="Управление проектами"/>
        </MenuItem>
    </Link>

    <Link key={`link_1`} to="/newproject" className="MuiListItem-button">
        <MenuItem key={1} className="MuiListItem-button">
        <ListItemIcon ><DashboardIcon /></ListItemIcon>
        <ListItemText primary="Новый проект"/>
        </MenuItem>
    </Link>

    <Link key={`link_1`} to="/coworkers" className="MuiListItem-button">
        <MenuItem key={1} className="MuiListItem-button">
        <ListItemIcon ><DashboardIcon /></ListItemIcon>
        <ListItemText primary="Сотрудники"/>
        </MenuItem>
    </Link>

    <Link key={`link_1`} to="/clinics" className="MuiListItem-button">
        <MenuItem key={1} className="MuiListItem-button">
        <ListItemIcon ><DashboardIcon /></ListItemIcon>
        <ListItemText primary="Лечебные учреждения"/>
        </MenuItem>
    </Link>      
    </div>
    )
}
