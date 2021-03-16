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
import { backend } from '../config/server'

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

export default function SimpleDialog({onClose, open, user, setUserinfo}) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(user.canSeeProjects === "1")

    function updateUser() {
        const token = localStorage.getItem("react-crm-token")
        let data = new FormData
        data.append('firstname', user.name)
        data.append('lastname', user.surname)
        data.append('patronym', user.patronym)
        data.append('phone', user.phone)
        data.append('projectVisibility', user.canSeeProjects)
        data.append('maxDiscount', user.possibleDiscount)
        data.append('role', user.role)

        fetch(`${backend}/users/update`, {
            method: "POST",
            headers: {
                "Authorization": token
            },
            body: data
        })
    }

    function handleChange(event) {
        let currentUserInfo = {...user}
        currentUserInfo[event.target.name] = event.target.value
        setUserinfo(currentUserInfo)
    }

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} className={classes.root} fullWidth maxWidth="sm">
            <DialogTitle id="simple-dialog-title" className={classes.headerStyle} disableTypography>
                <Typography variant="h5">
                    Подробнее о пользователе
                </Typography>
                
                <IconButton onClick={() => onClose()} style={{marginRight: "-16px"}}>
                    <img src={CloseIcon} />
                </IconButton>
            </DialogTitle>
            <div className={classes.containerRoot}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <Table size="small">
                    <TableBody>
                        <TableRow>
                            <TableCell className={classes.tableCellName}>
                                Имя
                            </TableCell>
                            <TableCell className={classes.tableCellValue}>
                                <TextField
                                name='name'
                                value={user.name}
                                fullWidth
                                onChange={handleChange}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.tableCellName}>
                                Фамилия
                            </TableCell>
                            <TableCell className={classes.tableCellValue}>
                                <TextField 
                                value={user.surname}
                                fullWidth
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className={classes.tableCellName}>
                                Отчество
                            </TableCell>
                            <TableCell className={classes.tableCellValue}>
                                <TextField 
                                value={user.patronym}
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
                                value={user.email}
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
                                value={user.possibleDiscount}
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
