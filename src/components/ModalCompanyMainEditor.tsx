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
import { updateMainCompany } from '../library/CompanyMethods'

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

export default function ModalCompanyMainEditor({
    headCompany,
    setHeadCompany,
    openMainEditor,
    setOpenMainEditor
}) {
  const classes = useStyles();

  function changeHandler(event) {
      let currentCompany = {...headCompany}
      currentCompany[event.target.name] = event.target.value
      setHeadCompany(currentCompany)
  }

  return (
    <Dialog onClose={() => setOpenMainEditor(!openMainEditor)} aria-labelledby="simple-dialog-title" open={openMainEditor} className={classes.root} fullWidth maxWidth="md">
      <DialogTitle id="simple-dialog-title" className={classes.headerStyle} disableTypography>
        <Typography variant="h5">
            Подробнее о компании
        </Typography>
        
        <IconButton onClick={() => setOpenMainEditor(!openMainEditor)} style={{marginRight: "-16px"}}>
            <img src={CloseIcon} />
        </IconButton>
      </DialogTitle>
      <div className={classes.containerRoot}>
        {/* <img style={{maxWidth: "100px"}} src={company.logo}/> */}
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell className={classes.tableCellName}>
                Название компании
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value={headCompany.name}
                  fullWidth
                  name="name"
                  onChange={changeHandler}
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCellName}>
                Телефон
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value={headCompany.phone}
                  fullWidth
                  name="phone"
                  onChange={changeHandler}
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCellName}>
                E-mail
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value={headCompany.email}
                  fullWidth
                  name="email"
                  onChange={changeHandler}
                />
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className={classes.tableCellName}>
                Логотип
              </TableCell>
              <TableCell className={classes.tableCellValue}>
                <TextField 
                  value={headCompany.logo}
                  fullWidth
                  name="logo"
                  onChange={changeHandler}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <div style={{textAlign: "right", marginTop: "2em"}}>
          <Button type="button" variant="contained" className={classes.deleteButton}>
              Отменить
          </Button>
          <Button 
          onClick={() => {
            updateMainCompany(headCompany)
            setOpenMainEditor(false)
          }}
          variant="contained" 
          color="primary" 
          style={{marginRight: 10}}>
            Сохранить
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
