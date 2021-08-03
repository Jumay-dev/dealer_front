import React from 'react'
import { Link } from "react-router-dom"
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import UserDropdown from '../components/UserDropdown'
import MainListItems from '../components/MenuItems';
import '../css/index.css'
import { createStyles, makeStyles, useTheme, Theme } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { openSidebar, closeSidebar } from "../actions/app"

const drawerWidth = 230;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 120,
      background: "#f3f6f9"
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding: 0
    },
  }),
);

function MainLayout({ children, openSidebar, closeSidebar, app, user }) {
    const classes = useStyles();

    React.useEffect(() => {
      if ( window.location.pathname === "/newoffer" && app.sidebarOpened) {
        app.sidebarOpened && closeSidebar()
      } else {
        !app.sidebarOpened && openSidebar()
      }
    }, [])


    return (
      <div className={classes.root}>

        <CssBaseline />

        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: app.sidebarOpened,
            [classes.drawerClose]: !app.sidebarOpened,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: app.sidebarOpened,
              [classes.drawerClose]: !app.sidebarOpened,
            }),
          }}
        >
          <div className={classes.logoContainer}>
            <Link to="/" style={{width: "80%"}}>
              <img src="https://ds-med.ru/wp-content/uploads/2020/03/logoDS-1.png" alt="..." style={{width: "100%"}}/>
            </Link>
          </div>
          
          
          <List><MainListItems /></List>

          <UserDropdown user={user}/>
        </Drawer>

        <main className={classes.content}>
          {children}
        </main>
      </div>
    );
}

function mapStateToProps(state) {
  return {
    app: state.app,
    user: state.auth.user
  }
}

const mapDispatchToProps = {
  openSidebar,
  closeSidebar
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout)