import React, {useState} from 'react'
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import UserDropdown from '../components/UserDropdown'
import { MainListItems } from '../components/MenuItems';
import { layoutStyles } from './layoutStyles'

import logo from '../assets/logo.png'
import '../css/index.css'

function MainLayout({children}) {
    const classes = layoutStyles();
    const [open, setOpen] = useState(true);
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return (
      <div className={classes.root}>

        <CssBaseline />

        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <img src="https://ds-med.ru/wp-content/uploads/2020/03/logoDS-1.png" alt="..." style={{width: "80%"}}/>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <UserDropdown />
            <Divider />
          <List><MainListItems /></List>
        </Drawer>

        <main className={classes.content}>
          <Container maxWidth="xl" className={classes.container}>
            {children}
          </Container>
        </main>
      </div>
    );
}

export default MainLayout