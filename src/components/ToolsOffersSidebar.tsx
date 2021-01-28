import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import CommercialOfferOne from '../components/CommercialOfferOne'
import AuthorisedPosition from './AuthorisedPosition'
import FixedCalcBottom from './FixedCalcBottom'

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
      // marginRight: theme.spacing(3),
      marginRight: 0,
      width: "100%"
    },
    contentShift: {
      width: "auto",
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
  const [addedTools, setAddedTools] = React.useState([])
  const [selectedCategory, setSelectedCategory] = React.useState(0)
  const [positionsTree, setPositionsTree] = React.useState([])
  const [offersTree, setOffersTree] = React.useState([])
  const [activeTab, setActiveTab] = React.useState(0);
  const [positionsCount, setPositionsCount] = React.useState(0)
  const [positionsPrice, setPositionsPrice] = React.useState(0)

  React.useEffect(() => {
    if (authorised && authorised.length !== 0) {
      setPositionsTree(authorisedPositionsTreeBuilding(authorised))
    }
  }, [authorised])

  React.useEffect(() => {
    setOffersTree(commercialOfferTreeBuilding(addedTools))
    setPositionsCount(addedTools.length)
    setPositionsPrice(totalClientPriceCalculating(addedTools))
  }, [addedTools])

  // считает сумму для клиента
  // TODO: переделать
  function totalClientPriceCalculating(arr) {
    if (arr.length >= 2) {
      let initialValue = 0
      return arr.reduce((accumulator, currentValue) => +accumulator + +currentValue.price, initialValue);
      
    } else {
      if (arr.length === 1) {
        return arr[0].price
      }
    }
    return 0
  }

  // функция строит дерево авторизованных позиций, O(n^2)
  function authorisedPositionsTreeBuilding(arr: Array<any>) {
    let tree = []
    arr.forEach( item => {
      if (item.parent === null) {
        item.children = arr.filter( elem => elem.parent === item.id)
        tree.push(item)
      }
    })
    return tree
  }

  // функция строит дерево коммерческого предложения, O(n^2)
  function commercialOfferTreeBuilding(arr: Array<any>) {
    let tree = []
    arr.forEach( item => {
      if (item.parent === null) {
        item.children = arr.filter( elem => elem.parent === item.id)
        tree.push(item)
      }
    })
    return tree
  }

  // Добавление из авторизованных в КП
  // Валидация: если id уже есть в КП -> не добавлять
  function positionSelectHandler(item) {
    let currentTools = addedTools.splice(0)
    const isOfferExist = currentTools.find( elem => elem.id === item.id)
    if(!isOfferExist) {
      let {children, ...handledItem} = item
      const parent = currentTools.find( el => el.id === handledItem.parent)
      if (!parent) {
        handledItem.parent = null
      }
      handledItem.uid = Date.now()
      currentTools.push(handledItem)
      setAddedTools(currentTools)
    }
  }

  // Удалить КП и его дочерние компоненты, если существуют
  function deleteTool(uid, id) {
    const currentTools = addedTools.splice(0)
    console.log('called by', uid)
    console.log('currentTools', currentTools)
    const newTools = currentTools.filter(elem => elem.uid !== uid && elem.parent !== id)
    setAddedTools(newTools)
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`wrapped-tabpanel-${index}`}
        aria-labelledby={`wrapped-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index) {
    return {
      id: `wrapped-tab-${index}`,
      'aria-controls': `wrapped-tabpanel-${index}`,
    };
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
                    positionSelectHandler={positionSelectHandler}
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
          <Tabs
            indicatorColor="primary"
            textColor="primary"
            aria-label="disabled tabs example"
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
          >
            <Tab label="Коммерческое предложение" {...a11yProps(0)}/>
            <Tab label="Рекомендованные" {...a11yProps(1)}/>
          </Tabs>

          <TabPanel value={activeTab} index={0}>
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
            {offersTree && offersTree.length !== 0 ? offersTree.map( tool => 
              <CommercialOfferOne
              key={tool.id}
              deleteTool={deleteTool}
              offers={tool}
              />) : <Typography>Нажмите "Выбрать оборудование", чтобы начать создание коммерческого предложения для клиента</Typography>}
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            Здесь будут рекомендованные позиции по выбраным из авторизованных
          </TabPanel>
          
          {activeTab === 0 ? <FixedCalcBottom positionsCount={positionsCount} positionsPrice={positionsPrice} addedTools={addedTools}/> : null}
        </main>
    </div>
  );
}
