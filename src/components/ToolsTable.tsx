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
  }),
);


function AccordionOfTools(props) {
    const classes = useStyles();
    let toolsInAccordion = tools.filter( tool => +tool.tool_view_block === +props.id)
    return (
        <React.Fragment>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>{props.categoryName}</Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography className={classes.root}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Название</TableCell>
                                <TableCell align="center"><Checkbox /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {toolsInAccordion.map( oneTool => (
                            <TableRow key={oneTool.id}>
                                <TableCell component="th" scope="row">{oneTool.tool_name}</TableCell>
                                <TableCell align="center" scope="row" component="th"><Checkbox /></TableCell>
                            </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </React.Fragment>
    )
}

function ToolsTable() {
    const classes = useStyles();
    
    return (
        <React.Fragment>
            <Typography component="h2" variant="h4" align="center">
                Авторизуемое оборудование
            </Typography>
            {tools_block.map(block => <AccordionOfTools categoryName={block.block_name} id={block.id}/>)}
        </React.Fragment>
    )
}

export default ToolsTable