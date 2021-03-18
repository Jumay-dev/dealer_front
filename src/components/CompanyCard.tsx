import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ArrowRight from '../assets/icons/Chevron right circle.svg'
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: theme.spacing(2),
    },
    tableCellName: {
      fontWeight: "bolder", 
      color: "#96999c", 
      marginRight: 5
    },
    tableCellValue: {
        fontWeight: "bolder", 
        color: "#666b73"
    },
    container: {
      margin: theme.spacing(2),
    }
  }),
);

export default function CompanyCard({company, setOpen, open, setCurrentCompany}) {
  const classes = useStyles();
  
  const handleOpen = () => {
    setCurrentCompany(company)
    setOpen(true)
  }

  return (
    <Paper className={classes.root}>
      <Table size="small" className={classes.container}>
        <TableBody>
          <TableRow>
            <TableCell className={classes.tableCellName}>
              Название
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              {company.name}
            </TableCell>

            <TableCell className={classes.tableCellName}>
              Адрес
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              {company.address}
            </TableCell>

            <TableCell className={classes.tableCellName}>
              ИНН
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              {company.inn}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.tableCellName}>
              Короткое название
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              {company.shortname}
            </TableCell>

            <TableCell className={classes.tableCellName}>
              Почтовый адрес
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              {company.post_address}
            </TableCell>

            <TableCell className={classes.tableCellName}>
              ОГРН
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              {company.ogrn}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.tableCellName}>
              Правовая форма
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              {company.legal_form}
            </TableCell>

            <TableCell className={classes.tableCellName}>
              Телефон
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              {company.phone}
            </TableCell>

            <TableCell className={classes.tableCellName}>
              Банковские реквизиты
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              {company.bank_details}
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.tableCellName}>
              Директор
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              {company.director}
            </TableCell>

            <TableCell className={classes.tableCellName}>
              Электронная почта
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              {company.email}
            </TableCell>

            <TableCell className={classes.tableCellName}>
              Лицензии
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              {company.licenses}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div style={{display: "flex", alignItems: "center", background: "#f3f6f9"}}>
        <IconButton>
          <img src={ArrowRight} onClick={handleOpen} style={{width: 50}}/>
        </IconButton>
      </div>
      
      {/* <ModalCompanyInfo company={company}/> */}
    </Paper>
  );
}