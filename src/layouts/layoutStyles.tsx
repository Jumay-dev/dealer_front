import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 230;

export const layoutStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    toolbar: {
      
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },

    menuButton: {
      marginRight: 36
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
      marginLeft: 10,
      fontFamily: '"Europe", "Roboto", "Helvetica", "Arial", sans-serif',
      fontStyle: "italic"
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding: 0
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 120,
      background: "#f3f6f9"
    }
  }));