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

export default function ModalCompanyInfo({open, setOpen, currentCompany}) {
  const classes = useStyles();

  return (
    <Dialog onClose={() => setOpen(!open)} aria-labelledby="simple-dialog-title" open={open} className={classes.root} fullWidth maxWidth="md">
      <DialogTitle id="simple-dialog-title" className={classes.headerStyle} disableTypography>
        <Typography variant="h5">
            Подробнее о компании
        </Typography>
        
        <IconButton onClick={() => setOpen(!open)}>
            <img src={CloseIcon} />
        </IconButton>
      </DialogTitle>
      <div className={classes.containerRoot}>
        <img style={{maxWidth: "100px"}} src={currentCompany.logo}/>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCellName}>
                Название
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value="AAA"
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
                  value="7802589471"
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
                  value="197110, Россия, САНКТ-ПЕТЕРБУРГ, МАРТЫНОВА, ДОМ 4, ЛИТЕРА А, ПОМЕЩЕНИЕ 2Н ОФИС1"
                  fullWidth
                />
              </TableCell>
            </TableRow>
  
            <TableRow>
              <TableCell className={classes.tableCellName}>
                Сокр. наим. организации
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                  <TextField 
                    value='ООО "ГРАНД МЕДИКАЛ"'
                    fullWidth
                  />
              </TableCell>
            </TableRow>
  
            
            <TableRow>
              <TableCell className={classes.tableCellName}>
                Отв. лицо:
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                  <TextField 
                    value='Беззубенков Иван Геннадьевич'
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
