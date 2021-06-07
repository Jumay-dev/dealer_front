import React, { useState } from 'react';
import ListItemText from '@material-ui/core/ListItemText';
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
import { connect } from "react-redux"

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
          borderLeft: "4px solid rgb(104, 140, 188)", 
          boxSizing: "border-box"
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

function isRole(accessebleRoles: Array<string>, roles) {
    let containsFlag = false
    roles.forEach(role => {
        if (accessebleRoles.includes(role.name)) {
            console.log(role.name)
            containsFlag = true
        }
    })
    return containsFlag
}

function MainListItems({app, roles}) {
    const styles = useStyles();
    return (
    <div key="mainmenu">
        {app.sidebarOpened && <InlineDivider text="Общее"/>}
        <Link key='1' to="/" className={styles.linkItem}>
            <StyledMenuItem 
            key={0}
            selected={window.location.pathname === "/"}
            className={styles.menuItem}
            >
                <ListItemIcon ><img src={StatisticIcon} /></ListItemIcon>
                <ListItemText primary="Статистика" />
            </StyledMenuItem>
        </Link>

        {app.sidebarOpened && <InlineDivider text="Проекты"/>}
        <Link key='2' to="/projects" className={styles.linkItem}>
            <StyledMenuItem 
            key={2} 
            className={styles.menuItem}
            selected={window.location.pathname === "/projects"}
            >
            <ListItemIcon ><img src={ProjectsListIcon} /></ListItemIcon>
            <ListItemText primary="Проекты"/>
            </StyledMenuItem>
        </Link>
        
        <Link key='3' to="/newproject" className={styles.linkItem}>
            <StyledMenuItem key={3} className={styles.menuItem} selected={window.location.pathname === "/newproject"}>
            <ListItemIcon ><img src={NewProjectIcon} /></ListItemIcon>
            <ListItemText primary="Новый проект"/>
            </StyledMenuItem>
        </Link>

        {app.sidebarOpened && <InlineDivider text="Организация"/>}
        {isRole(['admin'], roles) ? <Link to="/user" className={styles.linkItem } key="4">
            <StyledMenuItem className={styles.menuItem} selected={window.location.pathname === "/user"}>
                <ListItemIcon><img src={UserIcon} /></ListItemIcon>
                <ListItemText primary="Мой кабинет"/>
            </StyledMenuItem>
        </Link> : null}
        
        {isRole(['admin', 'dealer'], roles) ? <Link key="5" to="/coworkers" className={styles.linkItem}>
            <StyledMenuItem key={4} className={styles.menuItem} selected={window.location.pathname === "/coworkers"}>
            <ListItemIcon ><img src={UsersGroupIcon} /></ListItemIcon>
            <ListItemText primary="Сотрудники"/>
            </StyledMenuItem>
        </Link> : null}

        {isRole(['admin', 'manager', 'employee'], roles) ? <Link to="/company" className={styles.linkItem } key="6">
            <StyledMenuItem className={styles.menuItem} selected={window.location.pathname === "/company"}>
                <ListItemIcon><img src={HomeIcon} /></ListItemIcon>
                <ListItemText primary="Организация"/>
            </StyledMenuItem>
        </Link> : null}

        {isRole(['admin', 'authorizator'], roles) ? <Link to="/registratum" className={styles.linkItem } key="7">
            <StyledMenuItem className={styles.menuItem} selected={window.location.pathname === "/registratum"}>
                <ListItemIcon><img src={HomeIcon} /></ListItemIcon>
                <ListItemText primary="Авторизация"/>
            </StyledMenuItem>
        </Link> : null}

        {/* {app.sidebarOpened && <InlineDivider text="Оповещение"/>}
        <StyledMenuItem className={styles.menuItem } key="7">
            <NotificationsMenu />
        </StyledMenuItem>
        <StyledMenuItem className={styles.menuItem } key="8">
            <MailsMenu />
        </StyledMenuItem>     */}
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

function mapStateToProps(state) {
    return {
      app: state.app,
      roles: state.auth.user.roles
    }
}
  
export default connect(mapStateToProps, null)(MainListItems)
