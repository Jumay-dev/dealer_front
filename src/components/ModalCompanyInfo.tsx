import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import ArrowRight from '../assets/icons/Chevron right circle.svg'
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2)
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

export default function ModalCompanyInfo({company}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton>
        <img src={ArrowRight} onClick={handleOpen}/>
      </IconButton>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );

  function SimpleDialog(props) {
    const classes = useStyles();
    const { onClose, open } = props;
  
    return (
      <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} >
        <DialogTitle id="simple-dialog-title">Подробнее об организации</DialogTitle>
        <div className={classes.root}>
          <img style={{maxWidth: "50%"}} src={company.logo}/>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell className={classes.tableCellName}>
                  Название
                </TableCell>
                <TableCell className={classes.tableCellValue}>
                  <TextField 
                    value="AAA"
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
                  />
                </TableCell>
              </TableRow>
    
              <TableRow>
                <TableCell className={classes.tableCellName}>
                  Сокращенное наименование организации
                </TableCell>
                <TableCell className={classes.tableCellValue}>
                    <TextField 
                      value='ООО "ГРАНД МЕДИКАЛ"'
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
                    />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <div style={{textAlign: "right"}}>
            <Button type="button" variant="contained" color="primary" style={{marginRight: 10}}>
              Сохранить
            </Button>
            <Button type="button" variant="contained" color="primary" onClick={() => onClose()}>
              Отменить
            </Button>
          </div>
        </div>
      </Dialog>
    );
  }
}
