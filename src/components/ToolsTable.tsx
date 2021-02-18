import React from 'react'

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import { tools_block, tools } from '../middleware/infods5i_dealers'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    table: {
        minWidth: 650,
        width: "100%"
    },
    accordionSummaryStyle: {
        display: 'flex',
        justifyContent: "space-between !important",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    accordionContainer: {
        marginBottom: "1em"
    },
    fullDirection: {
        background: "#e6f7e3",
        color: "green"
    },
    outDirection: {
        background: "#ffffff"
    },
    buttonFullDirection: {
        border: "1px solid green",
        minWidth: 250,
        color: "green",
        "&:hover": {
            color: "green",
            border: "1px solid green"
        }
    },
    buttonOutDirection: {
        minWidth: 250
    }
  }),
);


function AccordionOfTools(props) {
    const classes = useStyles();
    let toolsInAccordion = props.tools
    const [allDirectionChoosen, setAllDirectionChoosen] = React.useState(false)
    const checkAllToolsInDirection = event => {
        event.preventDefault()
        event.stopPropagation()
        setAllDirectionChoosen(!allDirectionChoosen)
    }

    //#f7f5e3
    //#71bc68 зеленый
    return (
        <div className={classes.accordionContainer}>
            <Accordion className={allDirectionChoosen === true ? classes.fullDirection : classes.outDirection}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <div className={classes.accordionSummaryStyle}>
                    <Typography className={classes.heading}>{props.categoryName}</Typography>
                    <Button 
                    variant="outlined" 
                    color="primary"
                    className={allDirectionChoosen === true ? classes.buttonFullDirection : classes.buttonOutDirection}
                    onClick={checkAllToolsInDirection}
                    >{!allDirectionChoosen ? "Выбрать направление" : "Снять выбор"}</Button>
                    </div>

                </AccordionSummary>
                <AccordionDetails >
                    <Typography className={classes.root}>
                    <Table className={classes.table} aria-label="simple table" size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Название</TableCell>
                                <TableCell align="center"><Checkbox/></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {toolsInAccordion ? toolsInAccordion.map( oneTool => (
                                <TableRow key={oneTool.id}>
                                    <TableCell component="th" scope="row">{oneTool.tool_name}</TableCell>
                                    <TableCell align="center" scope="row" component="th">
                                        <Checkbox checked={oneTool.isChecked} onChange={() => console.log(oneTool.isChecked)}/>
                                    </TableCell>
                                </TableRow>
                            )) : null}
                        </TableBody>
                    </Table>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

function ToolsTable() {
    const classes = useStyles();
    const [categories, setCategories] = React.useState(tools_block)
    const [toolsList, setToolsList] = React.useState(tools)

    React.useEffect( () => {
        let currentTools = toolsList.splice(0)
        currentTools.forEach( item => item.isChecked = true)
        setToolsList(currentTools)
    }, [])

    function getFilteredToolsByCategory(tools, categoryID) {
        if (Array.isArray(tools) && tools.length !== 0) {
            return tools.filter(tool => +tool.tool_view_block === +categoryID)
        }
    }
    
    return (
        <React.Fragment>
            {categories.map(category => 
            <AccordionOfTools 
            categoryName={category.block_name} 
            id={category.id} 
            tools={getFilteredToolsByCategory(toolsList, category.id)}
            />)}
        </React.Fragment>
    )
}

export default ToolsTable