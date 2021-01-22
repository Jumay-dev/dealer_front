import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

import Icon from "@material-ui/core/Icon"
import Fab from "@material-ui/core/Fab";
import ContentCreate from "@material-ui/icons/Create";
import ActionDelete from "@material-ui/icons/Delete";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Cancel from "@material-ui/icons/Cancel";
import Download from "@material-ui/icons/ArrowDownward";

import { pink, grey, green, common } from "@material-ui/core/colors";

const grey500 = grey["500"];
const green400 = green["400"];
const white = common.white;

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const styles = {
  searchButton: {
    marginRight: 20,
  },
  editButton: {
    marginRight: "1em",
    color: white,
    backgroundColor: green400,
  },
  editButtonIcon: {
    fill: white,
  },
  deleteButton: {
    color: "grey",
    fill: grey500,
  },
  columns: {
    width10: {
      width: "10%",
    },
  },
  row: {
    margin: "1.5em",
    width: "95%",
  },
  pagination: {
    width: 350,
    margin: "0 auto",
    paddingTop: 10,
  },
};

interface DataTableProps {
  model?: string;
  headers?: string[],
  rows: Object,
  actions?: string[]
}

function ActionReturner({actionName}) {
  if (actionName === 'edit') {
    return (
      <Tooltip title="Edit" aria-label="edit">
        <Fab
          size="small"
          style={styles.editButton}
        >
          <ContentCreate />
        </Fab>
      </Tooltip>
    )
  }
  if (actionName === 'delete') {
    return (
      <Tooltip title="Delete" aria-label="delete">
        <Fab
          size="small"
          style={styles.deleteButton}
        >
          <ActionDelete />
        </Fab>
      </Tooltip>
    )
  }
  if (actionName === 'download') {
    return (
      <Tooltip title="Download" aria-label="download">
        <Fab
          size="small"
          style={styles.deleteButton}
        >
          <Download />
        </Fab>
      </Tooltip>
    )
  }
}

export default function DataTable<DataTableProps>({headers, rows, actions}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers ? headers.map(item => <TableCell>{item}</TableCell>) : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
                {row.cells.map( elem => <TableCell>{elem}</TableCell>)}
                {actions ? actions.map( act => <ActionReturner actionName={act} />) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}