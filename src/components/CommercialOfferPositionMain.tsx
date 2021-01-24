import React from 'react';
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

function CommercialOfferPositionMain({ primary, tool }) {
  const basePrice: number = 300000
  const [dealerDiscount, setDealerDiscount] = React.useState<number>(30)
  const [dealerPrice, setDealerPrice] = React.useState<number>(basePrice - (basePrice/100)*dealerDiscount)

  const [clientPrice, setClientPrice] = React.useState<number>(290000)
  const [clientDiscount, setClientDiscount] = React.useState<number>(10)
  const [count, setCount] = React.useState<number>(1)
  const classes = useStyles()

  function changeHandler(e) {
    if (e.target.name === 'clientDiscount') {
      setClientDiscount(e.target.value)
      setClientPrice(basePrice - (basePrice * (e.target.value / 100)))
    }
    if (e.target.name === 'clientPrice') {
      setClientPrice(e.target.value)
      setClientDiscount((basePrice - e.target.value) / (basePrice / 100))
    }
    if (e.target.name === "count") {
      setCount(e.target.value)
    }
  }

  return (
      <Paper className={primary ? classes.mainPaper : classes.secondaryPaper}>
          <Grid container spacing={1}>
              <Grid lg={2}>
                  <Typography variant="subtitle1" paragraph>
                      {tool && tool.name ? tool.name : null}
                  </Typography>
              </Grid>
              <Grid lg={1}>
                  <Typography variant="subtitle1" paragraph>
                      Количество
                  </Typography>
                  <Input type="number" defaultValue={1} name="count" onChange={changeHandler}/>
              </Grid>
              <Grid lg={4}>
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
              <Grid lg={4}>
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
              <Grid lg={1}>
                  <Button variant="contained" color="primary">
                      Удалить
                  </Button>
              </Grid>
          </Grid>
      </Paper>
  );
}

export default CommercialOfferPositionMain