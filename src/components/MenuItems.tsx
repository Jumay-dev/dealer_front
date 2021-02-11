import React, { useState } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TocIcon from '@material-ui/icons/Toc';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PeopleIcon from '@material-ui/icons/People';
import NotificationsMenu from '../components/NotificationsMenu'
import MailsMenu from '../components/MailsMenu'
import Divider from '@material-ui/core/Divider';

import PersonIcon from '@material-ui/icons/Person';
import BusinessIcon from '@material-ui/icons/Business';

import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import { ListItemIcon, Typography } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    menuItem: {
      fontWeight: 800,
      paddingTop: "0.2em",
      paddingBottom: "0.2em",
      fontSize: 16,
      textDecoration: "none",
      color: "gray"
    },
    categoryTitle: {
        fontWeight: "bolder",
        color: "gray",
        display: 'inline-block',
        marginRight: '10px'
    }
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
        <InlineDivider text="Общее"/>
        <Link key={`link_1`} to="/" className={styles.menuItem}>
            <MenuItem key={1}>
                <ListItemIcon ><DashboardIcon /></ListItemIcon>
                <ListItemText primary="Статистика" />
            </MenuItem>
        </Link>

        <InlineDivider text="Проекты"/>
        <Link key={`link_2`} to="/projects" className={styles.menuItem}>
            <MenuItem key={2} className={styles.menuItem}>
            <ListItemIcon ><TocIcon /></ListItemIcon>
            <ListItemText primary="Управление проектами"/>
            </MenuItem>
        </Link>
        <Link key={`link_3`} to="/newproject" className={styles.menuItem}>
            <MenuItem key={3} className={styles.menuItem}>
            <ListItemIcon ><AddCircleIcon /></ListItemIcon>
            <ListItemText primary="Новый проект"/>
            </MenuItem>
        </Link>

        <InlineDivider text="Организация"/>
        <Link to="/user" className={styles.menuItem }>
            <MenuItem className={styles.menuItem}>
                <ListItemIcon><PersonIcon /></ListItemIcon>
                <ListItemText primary="Мой кабинет"/>
            </MenuItem>
        </Link>
        <Link key={`link_4`} to="/coworkers" className={styles.menuItem}>
            <MenuItem key={4} className={styles.menuItem}>
            <ListItemIcon ><PeopleIcon /></ListItemIcon>
            <ListItemText primary="Сотрудники"/>
            </MenuItem>
        </Link>
        <Link to="/Company" className={styles.menuItem }>
            <MenuItem className={styles.menuItem}>
                <ListItemIcon><BusinessIcon /></ListItemIcon>
                <ListItemText primary="Страница организации"/>
            </MenuItem>
        </Link>

        <InlineDivider text="Оповещение"/>
        <MenuItem className={styles.menuItem }>
            <NotificationsMenu />
        </MenuItem>
        <MenuItem className={styles.menuItem }>
            <MailsMenu />
        </MenuItem>    
    </div>
    )
}

function InlineDivider({text}) {
    const useStyles = makeStyles(() =>
    createStyles({
        categoryTitle: {
            fontWeight: "bolder",
            color: "gray",
            display: 'inline-block',
            marginRight: '10px',
        },
        wrapper: {
            display: "flex", 
            alignItems: 'center',
            marginTop: "2em"
        }
    })
    );

    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Typography className={classes.categoryTitle}>{text}</Typography>
            <Divider style={{
                flex: "1 0 auto"
            }}/>
        </div>
    )
}
