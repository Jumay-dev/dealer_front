import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CommercialOfferPositionMain from '../components/CommercialOfferPositionMain'
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
      justifyContent: 'flex-start',
    },
    content: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: theme.spacing(3),
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth + theme.spacing(1),
    },
  }),
);

export default function PersistentDrawerRight({ authorised }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [selectedCategory, setSelectedCategory] = React.useState(0)
  const [positionsTree, setPositionsTree] = React.useState([])

  React.useEffect(() => {
    if (authorised && authorised.length !== 0) {
      setPositionsTree(treeBuilding(authorised))
    }
  }, [authorised])

  // функция строит дерево, O(n^2)
  function treeBuilding(arr: Array<any>) {
    let roots = []
    arr.forEach( item => {
      if (item.parent === null) {
        item.children = arr.filter( elem => elem.parent === item.id)
        roots.push(item)
      }
    })
    return roots
  }

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
                value={0}
            >
                <MenuItem value={0}>Все</MenuItem>
                <MenuItem value={1}>Рентген-аппараты</MenuItem>
                <MenuItem value={2}>Мониторы пациента</MenuItem>
                <MenuItem value={3}>Мамммографы</MenuItem>
            </Select>
                {positionsTree ? positionsTree.map( position => (
                  <AuthorisedPosition 
                    position={position}
                  />
                )) : null}
            </List>
        
        </Drawer>
        <main
        className={clsx(classes.content, {
            [classes.contentShift]: open,
        })}
        >
          <div className={classes.drawerHeader} />
          <CommercialOfferPositionMain 
            primary={true}
          />
          <CommercialOfferPositionMain />
          <CommercialOfferPositionMain 
            primary={true}
          />
          <CommercialOfferPositionMain />
          <CommercialOfferPositionMain />
        </main>
    </div>
  );
}
