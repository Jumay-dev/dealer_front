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
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

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
                            <TableRow key="1">
                                <TableCell component="th" scope="row">Центральная станция мониторинга Votem VC-2000</TableCell>
                                <TableCell align="center" scope="row" component="th"><Checkbox /></TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>Многофункциональный монитор пациента Votem VP-1200</TableCell>
                                <TableCell align="center"><Checkbox /></TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell component="th" scope="row">Центральная станция мониторинга Votem VC-2000</TableCell>
                                <TableCell align="center"><Checkbox /></TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>Многофункциональный монитор пациента Votem VP-1200</TableCell>
                                <TableCell align="center"><Checkbox /></TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell component="th" scope="row">Центральная станция мониторинга Votem VC-2000</TableCell>
                                <TableCell align="center"><Checkbox /></TableCell>
                            </TableRow>
                            <TableRow key="6">
                                <TableCell>Многофункциональный монитор пациента Votem VP-1200</TableCell>
                                <TableCell align="center"><Checkbox /></TableCell>
                            </TableRow>
                            <TableRow key="7">
                                <TableCell component="th" scope="row">Центральная станция мониторинга Votem VC-2000</TableCell>
                                <TableCell align="center"><Checkbox /></TableCell>
                            </TableRow>
                            <TableRow key="8">
                                <TableCell>Многофункциональный монитор пациента Votem VP-1200</TableCell>
                                <TableCell align="center"><Checkbox /></TableCell>
                            </TableRow>
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
            <AccordionOfTools categoryName={"Рентген аппараты"}/>
            <AccordionOfTools categoryName={"Мониторы пациента"}/>
            <AccordionOfTools categoryName={"ЛОР-комбайны"}/>
            <AccordionOfTools categoryName={"Маммографы"}/>
        </React.Fragment>
    )
}

export default ToolsTable