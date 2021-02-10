import React, { useState } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TocIcon from '@material-ui/icons/Toc';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PeopleIcon from '@material-ui/icons/People';
import NotificationsMenu from '../components/NotificationsMenu'
import MailsMenu from '../components/MailsMenu'

import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import { ListItemIcon } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    menuItem: {
      color: "black",
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
        <MenuItem key={1} className={styles.menuItem }>
            <ListItemIcon ><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Главная"/>
        </MenuItem>
    </Link>

    <Link key={`link_2`} to="/projects" className="MuiListItem-button">
        <MenuItem key={2} className={styles.menuItem}>
        <ListItemIcon ><TocIcon /></ListItemIcon>
        <ListItemText primary="Управление проектами"/>
        </MenuItem>
    </Link>

    <Link key={`link_3`} to="/newproject" className="MuiListItem-button">
        <MenuItem key={3} className={styles.menuItem}>
        <ListItemIcon ><AddCircleIcon /></ListItemIcon>
        <ListItemText primary="Новый проект"/>
        </MenuItem>
    </Link>

    <Link key={`link_4`} to="/coworkers" className="MuiListItem-button">
        <MenuItem key={4} className={styles.menuItem}>
        <ListItemIcon ><PeopleIcon /></ListItemIcon>
        <ListItemText primary="Сотрудники"/>
        </MenuItem>
    </Link>

    <MenuItem className={styles.menuItem }>
        <NotificationsMenu />
    </MenuItem>
    <MenuItem className={styles.menuItem }>
        <MailsMenu />
    </MenuItem>    
    </div>
    )
}
