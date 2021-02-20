import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import CommercialOfferOne from "./CommercialOfferOne"
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import FixedCalcBottom from './FixedCalcBottom'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginRight: 10,
        padding: 10
    }
  }),
);

function ComOffer({authorised}) {
    const classes = useStyles();
    const [addedTools, setAddedTools] = React.useState([])
    const [offersTree, setOffersTree] = React.useState([])
    const [positionsCount, setPositionsCount] = React.useState(0)
    const [positionsPrice, setPositionsPrice] = React.useState(0)
    const [positionsTree, setPositionsTree] = React.useState([])
    const [activeTab, setActiveTab] = React.useState(0);

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

    React.useEffect(() => {
      if (positionsTree.length !== 0) {
        positionsTree.forEach( tool => positionSelectHandler(tool) )
      }
    }, [positionsTree])

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

    function positionSelectHandler(item) {
      let currentTools = addedTools.splice(0)
      const isOfferExist = currentTools.find( elem => elem.id === item.id)
      if(!isOfferExist) {
        let {children, ...handledItem} = item
        handledItem.uid = Date.now()
        currentTools.push(handledItem)
        setAddedTools(currentTools)
      }
    }

    function deleteTool(uid, id) {
      const currentTools = addedTools.splice(0)
      console.log('called by', uid)
      console.log('currentTools', currentTools)
      const newTools = currentTools.filter(elem => elem.uid !== uid && elem.parent !== id)
      setAddedTools(newTools)
    }

    function commercialOfferTreeBuilding(arr: Array<any>) {
      let tree = []
      arr.forEach( item => {
        if (item.parent === null) {
          item.children = arr.filter( elem => elem.parent === item.id)
          tree.push(item)
        } else {
          const parent = arr.find( elem => item.parent === elem.id)
          if (!parent) {
            tree.push(item)
          }
        }
      })
      return tree
    }

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
        <Paper className={classes.paper}>
            <Typography
                component="h2" 
                variant="h5"
                style={{color: "#688cbc", display: "inline-block", marginTop: 20, marginBottom: 10}}
            >
                Структура коммерческого предложения
            </Typography>

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
            {offersTree && offersTree.length !== 0 ? offersTree.map( tool => 
              <CommercialOfferOne
              key={tool.id}
              deleteTool={deleteTool}
              offers={tool}
              addedTools={addedTools}
              setAddedTools={setAddedTools}
              />) : <Typography>Не добавлено ни одной позиции</Typography>}
            </TabPanel>

            <TabPanel value={activeTab} index={1}>
              Здесь будут рекомендованные позиции по выбраным из авторизованных
            </TabPanel>

            {activeTab === 0 ? <FixedCalcBottom positionsCount={positionsCount} positionsPrice={positionsPrice} addedTools={addedTools}/> : null}
        </Paper>
    )
}

export default ComOffer