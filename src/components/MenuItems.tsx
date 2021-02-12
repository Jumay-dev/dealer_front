import React, { useState } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import TocIcon from '@material-ui/icons/Toc';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import PeopleIcon from '@material-ui/icons/People';
import NotificationsMenu from '../components/NotificationsMenu'
import MailsMenu from '../components/MailsMenu'
import Divider from '@material-ui/core/Divider';

import UserIcon from "../assets/icons/User.svg"
import UsersGroupIcon from "../assets/icons/Users.svg"
import HomeIcon from "../assets/icons/Home.svg"
import StatisticIcon from "../assets/icons/Chart bar.svg"
import NewProjectIcon from "../assets/icons/File plus.svg"
import ProjectsListIcon from "../assets/icons/Vector.svg"

import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import { ListItemIcon, Typography } from "@material-ui/core";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    linkItem: {
        textDecoration: "none",
        fontWeight: 800,
        paddingTop: "0.2em",
        paddingBottom: "0.2em",
        fontSize: 16,
        color: "gray",
    },
    menuItem: {
      "&.Mui-selected": {
          fontWeight: "bolder",
          backgroundColor: "#e1edff",
          borderLeft: "4px solid rgb(104, 140, 188)"
      }
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
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const styles = useStyles();

    function clickHandler(e, data) {
        console.log(data)
    }
    return (
    <div>
        <InlineDivider text="Общее"/>
        <Link key={`link_1`} to="/" className={styles.linkItem}>
            <StyledMenuItem 
            key={0}
            selected={window.location.pathname === "/"}
            className={styles.menuItem}
            >
                <ListItemIcon ><img src={StatisticIcon} /></ListItemIcon>
                <ListItemText primary="Статистика" />
            </StyledMenuItem>
        </Link>

        <InlineDivider text="Проекты"/>
        <Link key={`link_2`} to="/projects" className={styles.linkItem}>
            <StyledMenuItem 
            key={2} 
            className={styles.menuItem}
            selected={window.location.pathname === "/projects"}
            >
            <ListItemIcon ><img src={ProjectsListIcon} /></ListItemIcon>
            <ListItemText primary="Проекты"/>
            </StyledMenuItem>
        </Link>
        
        <Link key={`link_3`} to="/newproject" className={styles.linkItem} selected={window.location.pathname === "/newproject"}>
            <StyledMenuItem key={3} className={styles.menuItem}>
            <ListItemIcon ><img src={NewProjectIcon} /></ListItemIcon>
            <ListItemText primary="Новый проект"/>
            </StyledMenuItem>
        </Link>

        <InlineDivider text="Организация"/>
        <Link to="/user" className={styles.linkItem }>
            <StyledMenuItem className={styles.menuItem} selected={window.location.pathname === "/user"}>
                <ListItemIcon><img src={UserIcon} /></ListItemIcon>
                <ListItemText primary="Мой кабинет"/>
            </StyledMenuItem>
        </Link>
        <Link key={`link_4`} to="/coworkers" className={styles.linkItem}>
            <StyledMenuItem key={4} className={styles.menuItem} selected={window.location.pathname === "/coworkers"}>
            <ListItemIcon ><img src={UsersGroupIcon} /></ListItemIcon>
            <ListItemText primary="Сотрудники"/>
            </StyledMenuItem>
        </Link>
        <Link to="/company" className={styles.linkItem }>
            <StyledMenuItem className={styles.menuItem} selected={window.location.pathname === "/company"}>
                <ListItemIcon><img src={HomeIcon} /></ListItemIcon>
                <ListItemText primary="Организация"/>
            </StyledMenuItem>
        </Link>

        <InlineDivider text="Оповещение"/>
        <StyledMenuItem className={styles.menuItem }>
            <NotificationsMenu />
        </StyledMenuItem>
        <StyledMenuItem className={styles.menuItem }>
            <MailsMenu />
        </StyledMenuItem>    
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
            marginTop: "2em",
            marginLeft: "1em"
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

const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:hover': {
        backgroundColor: "#e1edff",
        color: "#688cbc",
      },
    },
}))(MenuItem);
