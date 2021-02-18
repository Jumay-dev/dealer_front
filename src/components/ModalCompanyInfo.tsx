import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '../assets/icons/Close circle.svg'
import Typography from '@material-ui/core/Typography';
import CompanyCard from './CompanyCard';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "&.MuiDialog-root": {
          backdropFilter: "blur(5px)",
          background: "rgba(104, 140, 188, 0.2)"
      }
    },
    containerRoot: {
      padding: theme.spacing(2)
    },
    tableCellName: {
      fontWeight: "bolder", 
      color: "#96999c", 
      marginRight: 5,
      width: 100
    },
    tableCellValue: {
        fontWeight: "bolder", 
        color: "#666b73"
    },
    headerStyle: {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    },
    deleteButton: {
        marginRight: 10, 
        background: theme.palette.error.main, 
        color: "white",
        "&:hover": {
            background: theme.palette.error.dark
        }
    }
  }),
);

export default function ModalCompanyInfo({open, setOpen, company}) {
  const classes = useStyles();

  return (
    <Dialog onClose={() => setOpen(!open)} aria-labelledby="simple-dialog-title" open={open} className={classes.root} fullWidth maxWidth="md">
      <DialogTitle id="simple-dialog-title" className={classes.headerStyle} disableTypography>
        <Typography variant="h5">
            Подробнее о компании
        </Typography>
        
        <IconButton onClick={() => setOpen(!open)} style={{marginRight: "-32px", marginTop: "-31px"}}>
            <img src={CloseIcon} />
        </IconButton>
      </DialogTitle>
      <div className={classes.containerRoot}>
        <img style={{maxWidth: "100px"}} src={company.logo}/>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCellName}>
                Название
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value={company.name}
                  fullWidth
                />
              </TableCell>
            </TableRow>

            <TableRow>           
              <TableCell className={classes.tableCellName}>
                Адрес
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value={company.address}
                  fullWidth
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCellName}>
                ИНН
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value={company.inn}
                  fullWidth
                />                
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCellName}>
                Короткое название
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value={company.shortname}
                  fullWidth
                />  
              </TableCell>
            </TableRow>

            <TableRow>            
              <TableCell className={classes.tableCellName}>
                Почтовый адрес
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value={company.postaddress}
                  fullWidth
                />  
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCellName}>
                ОГРН
              </TableCell>
              <TableCell className={classes.tableCellValue}>         
                <TextField 
                  value={company.ogrn}
                  fullWidth
                /> 
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCellName}>
                Правовая форма
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value={company.lawform}
                  fullWidth
                /> 
              </TableCell>
            </TableRow>

            <TableRow>            
              <TableCell className={classes.tableCellName}>
                Телефон
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value={company.phone}
                  fullWidth
                /> 
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCellName}>
                Банковские реквизиты
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value={company.req}
                  fullWidth
                /> 
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCellName}>
                Директор
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value={company.director}
                  fullWidth
                /> 
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCellName}>
                Электронная почта
              </TableCell>
              <TableCell className={classes.tableCellValue}>        
                <TextField 
                  value={company.email}
                  fullWidth
                /> 
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCellName}>
                Лицензии
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                
                <TextField 
                  value={company.licenses}
                  fullWidth
                /> 
              </TableCell>
            </TableRow>
            
          </TableBody>
        </Table>

        <div style={{textAlign: "right", marginTop: "2em"}}>
          <Button type="button" variant="contained" className={classes.deleteButton}>
              Удалить
          </Button>
          <Button type="button" variant="contained" color="primary" style={{marginRight: 10}}>
            Сохранить
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
