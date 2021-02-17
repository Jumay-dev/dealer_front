import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CloseIcon from '../assets/icons/Close circle.svg'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        "&.MuiDialog-root": {
            backdropFilter: "blur(5px)",
            background: "rgba(104, 140, 188, 0.4) !important"
        },
    },
    containerRoot: {
      padding: theme.spacing(2),
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

export default function SimpleDialog({onClose, open, user}) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false)

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} className={classes.root} fullWidth maxWidth="sm">
            <DialogTitle id="simple-dialog-title" className={classes.headerStyle} disableTypography>
                <Typography variant="h5">
                    Подробнее о пользователе
                </Typography>
                
                <IconButton onClick={() => onClose()}>
                    <img src={CloseIcon} />
                </IconButton>
            </DialogTitle>
            <div className={classes.containerRoot}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Table size="small">
                    <TableBody>
                        <TableRow>
                        <TableCell className={classes.tableCellName}>
                            Полное имя
                        </TableCell>
                        <TableCell className={classes.tableCellValue}>
                            <TextField 
                            value={user.fullname}
                            fullWidth
                            />
                        </TableCell>
                        </TableRow>

                        <TableRow>
                        <TableCell className={classes.tableCellName}>
                            Дата регистрации
                        </TableCell>
                        <TableCell className={classes.tableCellValue}>
                            <TextField 
                            value={user.registered}
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
                            value={user.phone}
                            fullWidth
                            />
                        </TableCell>
                        </TableRow>

                        <TableRow>
                        <TableCell className={classes.tableCellName}>
                            Почта
                        </TableCell>
                        <TableCell className={classes.tableCellValue}>
                            <TextField 
                                value={user.mail}
                                fullWidth
                            />
                        </TableCell>
                        </TableRow>

                        
                        <TableRow>
                        <TableCell className={classes.tableCellName}>
                            Роль
                        </TableCell>
                        <TableCell className={classes.tableCellValue}>
                            <TextField 
                                value={user.role}
                                fullWidth
                            />
                        </TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className={classes.tableCellName}>
                            Максимальная скидка
                        </TableCell>
                        <TableCell className={classes.tableCellValue}>
                            <TextField 
                                value="30"
                                fullWidth
                            />
                        </TableCell>
                        </TableRow>

                    </TableBody>
                    </Table>
                    <div style={{marginLeft: 20, display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "1em"}}>
                        <FormControlLabel
                            control={<Switch color="primary" checked={checked} onChange={() => setChecked(!checked)} name="checkedA" />}
                            label="Может видеть проекты других сотрудников"
                        />
                    </div>
                </div>

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
