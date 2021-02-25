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
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import clsx from 'clsx';
import MoreVertIcon from '@material-ui/icons/MoreVert';

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


function AccordionOfTools(props) {
    const classes = useStyles();
    const [toolsInAccordion, setToolsInAccordion] = React.useState(props.tools)
    const [choosingType, setChoosingType] = React.useState('nope')
    const [checkedCount, setCheckedCount] = React.useState(0)
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    }; 
    const handleClose = () => {
      setAnchorEl(null);
    };
    const openPop = Boolean(anchorEl);
    const id = openPop ? 'simple-popover' : undefined;

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
                            // onClick={checkAllToolsInDirection}
                            >{buttonNameSelector(choosingType)}<ExpandMoreIcon /></Button>
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
                                        {/* <Checkbox 
                                        checked={choosingType === 'all'} 
                                        color="primary"
                                        onClick={checkAllToolsInDirection}
                                        /> */}
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {toolsInAccordion ? toolsInAccordion.map( oneTool => (
                                    <TableRow key={oneTool.id}>
                                        <TableCell component="th" scope="row"><Button onClick={handleClick}>{oneTool.tool_name}</Button></TableCell>
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
                    <Popover
                        id={id}
                        open={openPop}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                    <ToolCard
                        toolName={'Многофункциональный монитор пациента Votem VP-1200'}
                        img="https://ds-med.ru/wp-content/uploads/2019/05/votem_1200.jpg"
                        description="Монитор пациента VP-1200 компании VOTEM (Южная Корея) — модель с расширенными функциональными возможностями. Диагональ экрана составляет 12,1 дюйма. Опционально доступны функции мультигаз, оценки глубины наркоза и капнометрии EtCO2. Низкая стоимость комплектующих делает VP-1200 экономически выгодным решением при регулярном проведении оценки глубины анестезии."
                    />
                </Popover>
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

function ToolCard({toolName, img, description}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <Card style={{maxWidth: "20vw"}}>
            <CardHeader
                title={toolName}
            />
            <CardMedia
                className={classes.media}
                image={img}
                title="Paella dish"
            />
            <CardContent>
                <Typography>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
} 

export default ToolsTable