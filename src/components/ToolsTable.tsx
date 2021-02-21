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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular
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
        marginBottom: "1em",
    },
    fullDirection: {
        background: "#e6f7e3",
        color: "green"
    },
    outDirection: {
        background: "#ffffff",
        color: "#666b73"
    },
    partDirection: {
        background: "#f7f5e3",
        color: "#ffb62f"
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
    buttonPartDirection: {
        border: "1px solid #ffb62f",
        minWidth: 250,
        color: "#ffb62f",
        "&:hover": {
            color: "#ffb62f",
            border: "1px solid #ffb62f"
        }
    },
    buttonOutDirection: {
        minWidth: 250
    }
  }),
);


function AccordionOfTools(props) {
    const classes = useStyles();
    const [toolsInAccordion, setToolsInAccordion] = React.useState(props.tools)
    const [choosingType, setChoosingType] = React.useState('nope')
    
    const [checkedCount, setCheckedCount] = React.useState(0)

    const checkAllToolsInDirection = event => {
        event.preventDefault()
        event.stopPropagation()
        console.log('checkAllToolsInDirection')

        let currentAllTools = props.allTools.splice(0)

        if (choosingType !== 'all') {
            setChoosingType('all')
            currentAllTools.forEach( one => one.tool_view_block === props.id ? one.isChecked = true : null)
        } else {
            setChoosingType('nope')
            currentAllTools.forEach( one => one.tool_view_block === props.id ? one.isChecked = false : null)
        }
        props.setTools(prev => currentAllTools)
    }

    const oneToolChecked = (tool) => {
        console.log(tool)
        let currentAllTools = props.allTools.splice(0)

        currentAllTools.forEach( elem => {
            if (elem.id === tool.id) {
                elem.isChecked = !tool.isChecked
            }
        })
        props.setTools(prev => currentAllTools)

        let checkedTools = []
        let uncheckedTools = []
        toolsInAccordion.forEach( item => item.isChecked === true ? checkedTools.push(item) : uncheckedTools.push(item))

        let checkedLength = checkedTools.length

        if (checkedLength === toolsInAccordion.length) {
            setChoosingType('all')
        } else {
            if (checkedLength > 0) {
                setChoosingType('part')
            } else {
                setChoosingType('nope')
            }
        }
        setCheckedCount(checkedLength)
    }

    function buttonStyleSelector(variable) {
        switch (variable) {
            case 'all': return classes.buttonFullDirection
            case 'part': return classes.buttonPartDirection
            default: return classes.buttonOutDirection
        }
    }

    function styleSelector(variable) {
        switch (variable) {
            case 'all': return classes.fullDirection
            case 'part': return classes.partDirection
            default: return classes.outDirection
        }
    }

    function buttonNameSelector(variable) {
        switch (variable) {
            case 'all': return "Снять выбор"
            case 'part': return "Выбрать все"
            default: return "Выбрать направление"
        }
    }

    function spanCounterSelector(variable) {
        switch (variable) {
            case 'all': return <span style={{marginRight: 20, fontWeight: "bold"}}>Выбрано позиций: {props.tools.length} из {props.tools.length}</span>
            case 'part': return <span style={{marginRight: 20, fontWeight: "bold"}}>Выбрано позиций: {checkedCount} из {props.tools.length}</span>
            default: return null
        }
    }

    return (
        <div className={classes.accordionContainer}>
            <Accordion className={styleSelector(choosingType)}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                    <div className={classes.accordionSummaryStyle}>
                        <Typography className={classes.heading}>{props.categoryName}</Typography>
                        <div style={{display: "flex", alignItems: "center"}}>
                            {props.tools ? spanCounterSelector(choosingType) : null}
                            <Button 
                            variant="outlined" 
                            color="primary"
                            className={buttonStyleSelector(choosingType)}
                            onClick={checkAllToolsInDirection}
                            >{buttonNameSelector(choosingType)}</Button>
                        </div>
                    </div>

                </AccordionSummary>
                <AccordionDetails >
                    <Typography className={classes.root}>
                    <Table className={classes.table} aria-label="simple table" size="small">
                        <TableHead>
                            <TableRow >
                                <TableCell style={{color: "#666b73", fontWeight: "bolder"}}>Название</TableCell>
                                <TableCell align="center">
                                    <Checkbox 
                                    checked={choosingType === 'all'} 
                                    color="primary"
                                    onClick={checkAllToolsInDirection}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {toolsInAccordion ? toolsInAccordion.map( oneTool => (
                                <TableRow key={oneTool.id}>
                                    <TableCell component="th" scope="row">{oneTool.tool_name}</TableCell>
                                    <TableCell align="center" scope="row" component="th">
                                        <Checkbox 
                                            checked={oneTool.isChecked ? true : false} 
                                            onChange={() => oneToolChecked(oneTool)} 
                                            color="primary"
                                        />
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

function ToolsTable(
    {
        tools, 
        setTools, 
        tools_block
    }) {
    const classes = useStyles();
    const [categories, setCategories] = React.useState(tools_block)

    // React.useEffect( () => {
    //     let currentTools = tools.splice(0)
    //     currentTools.forEach( item => item.isChecked = false)
    //     setTools(currentTools)
    // }, [])

    function getFilteredToolsByCategory(tools, categoryID) {
        if (Array.isArray(tools) && tools.length !== 0) {
            return tools.filter(tool => +tool.tool_view_block === +categoryID)
        }
        console.log('getFilteredToolsByCategory')
    }
    
    return (
        <div>
            {categories.map(category => 
                <AccordionOfTools 
                categoryName={category.block_name} 
                id={category.id} 
                tools={getFilteredToolsByCategory(tools, category.id)}
                allTools={tools}
                setTools={setTools}
                key={category.id}
            />)}
        </div>
    )
}

export default ToolsTable