import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


import AuthorisedPosition from './AuthorisedPosition'

const drawerWidth = 500;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: "column",
      alignItems: 'flex-start',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth,
      zIndex: 9999
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth + theme.spacing(3),
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 20,
    },
  }),
);

export default function PersistentDrawerRight({children}) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
        <Button onClick={() => setOpen(!open)} variant="contained" color="primary">Выбрать оборудование</Button>

        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
            paper: classes.drawerPaper,
        }}
        >
            <List>
            <Typography>
                Авторизованное оборудование
            </Typography>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={1}
            >
                <MenuItem value={1}>Рентген-аппараты</MenuItem>
                <MenuItem value={2}>Мониторы пациента</MenuItem>
                <MenuItem value={3}>Мамммографы</MenuItem>
            </Select>
                <AuthorisedPosition />
                <AuthorisedPosition />
                <AuthorisedPosition />
                <AuthorisedPosition />
                <AuthorisedPosition />
                <AuthorisedPosition />
                <AuthorisedPosition />
                <AuthorisedPosition />
                <AuthorisedPosition />
            </List>
        
        </Drawer>
        <main
        className={clsx(classes.content, {
            [classes.contentShift]: open,
        })}
        >
        <div className={classes.drawerHeader} />
        {children}
        </main>
    </div>
  );
}
