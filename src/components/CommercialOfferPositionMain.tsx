import React from 'react';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import ActionDelete from "@material-ui/icons/Delete";
import Tooltip from '@material-ui/core/Tooltip';
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon"

import Input from '@material-ui/core/Input';

import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainPaper: {
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
    },
    secondaryPaper: {
      marginBottom: theme.spacing(1),
      padding: theme.spacing(2),
      marginLeft: 30
    },
    table: {
        width: "100%",
        height: "100%",
    },
  }),
);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRowDealer = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(even)': {
        backgroundColor: "#D6D2C4",
      },
    },
  }),
)(TableRow);
const StyledTableRowClient = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(even)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

function CommercialOfferPositionMain(
  { primary, 
    tool, 
    deleteTool,
    addedTools,
    setAddedTools
   }) {
  const basePrice: number = tool.dealerPrice
  const [dealerDiscount, setDealerDiscount] = React.useState<number>(tool.dealerDiscount)
  const [dealerPrice, setDealerPrice] = React.useState<number>(basePrice - (basePrice/100)*dealerDiscount)

  const [clientPrice, setClientPrice] = React.useState<number>(tool.clientPrice)
  const [clientDiscount, setClientDiscount] = React.useState<number>(tool.clientDiscount)
  const [count, setCount] = React.useState<number>(tool.count)
  const classes = useStyles()

  function changeHandler(e) {
    let currentTools = addedTools.splice(0)
    if (e.target.name === 'clientDiscount') {
      const newClientDiscount = e.target.value
      const newClientPrice = basePrice - (basePrice * (e.target.value / 100))

      let newTools = outerToolsRewriter(currentTools, 'clientDiscount', newClientDiscount)
      newTools = outerToolsRewriter(currentTools, 'clientPrice', newClientPrice)
      setClientDiscount(newClientDiscount)
      setClientPrice(newClientPrice)
      setAddedTools(newTools)
    }
    if (e.target.name === 'clientPrice') {
      setClientPrice(e.target.value)
      setClientDiscount((basePrice - e.target.value) / (basePrice / 100))
    }
    if (e.target.name === "count") {
      let newTools = outerToolsRewriter(currentTools, 'count', e.target.value)
      setCount(e.target.value)
      setAddedTools(newTools)
    }
  }

  function outerToolsRewriter(clonedTools, field, value) {
    const ind = clonedTools.findIndex( obj => obj.id === tool.id)
    let foundTool = clonedTools[ind]
    foundTool[field] = value
    clonedTools[ind] = foundTool
    return clonedTools
  }

  return (
      <Paper className={primary ? classes.mainPaper : classes.secondaryPaper}>
          <Grid container spacing={1}>
              <Grid lg={3}  xs={6} item>
                  <Typography variant="subtitle1" paragraph>
                      {tool && tool.name ? tool.name : null}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                      Количество
                  </Typography>
                  <Input type="number" value={count} name="count" onChange={changeHandler}/>
              </Grid>
              <Grid lg={4} xs={12} item>
                  <Table className={classes.table} aria-label="customized table">
                      <TableBody>
                          <StyledTableRowDealer>
                              <StyledTableCell>Розничная цена(ед)</StyledTableCell>
                              <StyledTableCell>{basePrice}</StyledTableCell>
                          </StyledTableRowDealer>
                          <StyledTableRowDealer>
                              <StyledTableCell>Скидка дилеру</StyledTableCell>
                              <StyledTableCell>{dealerDiscount} %</StyledTableCell>
                          </StyledTableRowDealer>
                          <StyledTableRowDealer>
                              <StyledTableCell>Цена для дилера</StyledTableCell>
                              <StyledTableCell>{dealerPrice} ₽</StyledTableCell>
                          </StyledTableRowDealer>

                          <StyledTableRowDealer>
                              <StyledTableCell>Итого для дилера</StyledTableCell>
                              <StyledTableCell>{dealerPrice * count} ₽</StyledTableCell>
                          </StyledTableRowDealer>
                      </TableBody>
                  </Table>
              </Grid>
              <Grid lg={4} xs={12} item>
                  <Table className={classes.table} aria-label="customized table">
                      <TableBody>
                          <StyledTableRowClient>
                              <StyledTableCell>Розничная цена(ед)</StyledTableCell>
                              <StyledTableCell>{basePrice} ₽</StyledTableCell>
                          </StyledTableRowClient>
                          <StyledTableRowClient>
                              <StyledTableCell>Скидка клиенту</StyledTableCell>
                              <StyledTableCell>
                                <Input 
                                type="number" 
                                value={clientDiscount}
                                name="clientDiscount"
                                onChange={changeHandler}
                                />
                              </StyledTableCell>
                          </StyledTableRowClient>
                          <StyledTableRowClient>
                              <StyledTableCell>Цена для клиента</StyledTableCell>
                              <StyledTableCell>
                                <Input 
                                type="text" 
                                value={clientPrice}
                                name="clientPrice"
                                onChange={changeHandler}
                                />
                              </StyledTableCell>
                          </StyledTableRowClient>

                          <StyledTableRowClient>
                              <StyledTableCell>Итого для клиента</StyledTableCell>
                              <StyledTableCell>{clientPrice * count} ₽</StyledTableCell>
                          </StyledTableRowClient>
                      </TableBody>
                  </Table>                    
              </Grid>
              <Grid md={12} sm={12} xs={12} lg={1} item>
              <Tooltip title="Удалить" aria-label="delete" >
                <Fab
                  size="small"
                  onClick={() => deleteTool(tool.uid, tool.id)}
                >
                  <ActionDelete />
                </Fab>
              </Tooltip>
              </Grid>
          </Grid>
      </Paper>
  );
}

export default CommercialOfferPositionMain