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
      padding: theme.spacing(2),
      border: "3px solid",
      borderColor: theme.palette.primary.main,
      width: "100%",
      marginBottom: theme.spacing(2),
      height: 150
    },
    tableCellName: {
      fontWeight: "bolder", 
      color: "#96999c", 
      marginRight: 5
    },
    tableCellValue: {
        fontWeight: "bolder", 
        color: "#666b73"
    }
  }),
);

export default function CompanyCard({company, setOpen, open, setCurrentCompany}) {
  const classes = useStyles();
  
  const handleOpen = () => {
    setCurrentCompany(company)
    setOpen(!open)
  }

  return (
    <Paper className={classes.root}>
      <IconButton>
        <img src={company.logo} style={{width: 100, backgroundSize: "cover"}} onClick={handleOpen}/>
      </IconButton>
      <Table size="small">
        <TableBody>
          <TableRow>
            <TableCell className={classes.tableCellName}>
              Название
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              ААА
            </TableCell>
            <TableCell className={classes.tableCellName}>
              ИНН
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              7802589471
            </TableCell>
            <TableCell className={classes.tableCellName}>
              Адрес
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              197110, Россия, ...
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell className={classes.tableCellName}>
              Сокр. наим.
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              ООО "ГРАНД МЕДИКАЛ"
            </TableCell>
            <TableCell className={classes.tableCellName}>
              Отв. лицо:
            </TableCell>
            <TableCell className={classes.tableCellValue}>
              Беззубенков Иван Геннадьевич
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div style={{display: "flex", alignItems: "center"}}>
        <IconButton>
          <img src={ArrowRight} onClick={handleOpen}/>
        </IconButton>
      </div>
      
      {/* <ModalCompanyInfo company={company}/> */}
    </Paper>
  );
}