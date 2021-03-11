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
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from "../assets/icons/Info circle.svg"
import clsx from 'clsx';

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
        minWidth: 150,
        color: "green",
        "&:hover": {
            color: "green",
            border: "1px solid green"
        }
    },
    buttonPartDirection: {
        border: "1px solid #ffb62f",
        minWidth: 150,
        color: "#ffb62f",
        "&:hover": {
            color: "#ffb62f",
            border: "1px solid #ffb62f"
        }
    },
    buttonOutDirection: {
        minWidth: 150
    },
    popoverPaper: {
      padding: theme.spacing(1)
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    selectedMedia: {
        height: 300,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
        addingStyle: {
        minWidth: 275,
        background: "#F2CEAA",
        margin: 5,
        height: "100%"
    },
    toolStyle: {
        // minWidth: 275,
        margin: 5,
        height: "100%"
    },
  }),
);


function AccordionOfTools({
        categoryName,
        category,
        filteredToolsByCategory,
        allTools,
        setTools,
        handleInfoClick
    }) {
    const classes = useStyles();
    const [toolsInAccordion, setToolsInAccordion] = React.useState([])
    const [choosingType, setChoosingType] = React.useState('nope')
    const [checkedCount, setCheckedCount] = React.useState(0)
    const [expanded, setExpanded] = React.useState(false);

    const oneToolChecked = (tool) => {
        let currentAllTools = allTools.splice(0)

        currentAllTools.forEach( elem => {
            if (elem.id === tool.id) {
                elem.isChecked = !tool.isChecked
            }
        })
        setTools(prev => currentAllTools)

        let checkedTools = []
        let uncheckedTools = []
        toolsInAccordion.forEach( item => item.isChecked === true ? checkedTools.push(item) : uncheckedTools.push(item))

        console.log(checkedTools)

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

    function spanCounterSelector(variable) {
        switch (variable) {
            case 'all': return <span style={{marginRight: 20, fontWeight: "bold"}}>Выбрано позиций: {toolsInAccordion.length} из {toolsInAccordion.length}</span>
            case 'part': return <span style={{marginRight: 20, fontWeight: "bold"}}>Выбрано позиций: {checkedCount} из {toolsInAccordion.length}</span>
            default: return null
        }
    }

    const handleExpandClick = () => {
        if (!expanded) {
            setToolsInAccordion(filteredToolsByCategory(allTools, category.id))
        }
        setExpanded(!expanded);
    };

    return (
        <div className={classes.accordionContainer}>
            <Accordion className={styleSelector(choosingType)}>
                <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                onClick={handleExpandClick} 
                >
                    <div className={classes.accordionSummaryStyle}>
                        <Typography className={classes.heading}>{categoryName}</Typography>
                        <div style={{display: "flex", alignItems: "center"}}>
                            {filteredToolsByCategory ? spanCounterSelector(choosingType) : null}
                            <Button 
                            variant="outlined" 
                            color="primary"
                            className={buttonStyleSelector(choosingType)}
                            onClick={handleExpandClick} 
                            >
                                <span>{expanded ? "Скрыть" : "Показать"}</span>
                                <ExpandMoreIcon
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                />
                            </Button>
                        </div>
                    </div>

                </AccordionSummary>
                <AccordionDetails >
                    <Typography className={classes.root}>
                        <Table className={classes.table} aria-label="simple table" size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{color: "#666b73", fontWeight: "bolder"}}>Название</TableCell>
                                    <TableCell align="center">

                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {toolsInAccordion ? toolsInAccordion.map( oneTool => (
                                    <TableRow key={oneTool.id}>
                                        <TableCell component="th" scope="row">
                                            {oneTool.tool_name}
                                            <IconButton onClick={handleInfoClick}><img src={InfoIcon} /></IconButton>
                                        </TableCell>

                                        <TableCell align="center" scope="row" component="th">
                                            <Checkbox 
                                                checked={oneTool.isChecked} 
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

export default AccordionOfTools