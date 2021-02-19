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
import Grid from '@material-ui/core/Grid';
import CloseIcon from '../assets/icons/Close circle.svg'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        "&.MuiDialog-root": {
            backdropFilter: "blur(5px)",
            background: "rgba(104, 140, 188, 0.4) !important"
        },
        overflow: "hidden"
    },
    containerRoot: {
      padding: theme.spacing(3),
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
    buttonGreen: {
        border: "1px solid green",
        minWidth: 250,
        color: "green",
        "&:hover": {
            color: "green",
            border: "1px solid green"
        }
    },
  }),
);

export default function ProjectPresend(
    {
        onClose, 
        open, 
        tools,
        clinicInn, 
        clinicAddress, 
        clinicName, 
        clinicUr
    }) {
    const classes = useStyles();

    function getCheckedTools(tools) {
        return tools.filter( tool => tool.isChecked === true)
    }

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} className={classes.root} fullWidth maxWidth="lg">
            <DialogTitle id="simple-dialog-title" className={classes.headerStyle} disableTypography>
                <Typography variant="h5">
                    Предварительный просмотр проекта
                </Typography>

                <Button type="button" variant="outlined" className={classes.buttonGreen}>
                    Подтвердить и отправить
                </Button>
                
                <IconButton onClick={() => onClose()} style={{marginRight: "-16px"}}>
                    <img src={CloseIcon} />
                </IconButton>
            </DialogTitle>
            <div className={classes.containerRoot}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    
                    <Typography variant="h5" style={{marginTop: 15, marginBottom: 10, color: "rgb(104, 140, 188)"}}>
                       Реквизиты
                    </Typography>
                    <Typography>
                        <span className={classes.tableCellName}>ИНН клиники:</span>
                        <span className={classes.tableCellValue}>123 451 515 966 222</span>
                    </Typography>
                    <Typography>
                        <span className={classes.tableCellName}>Название клиники:</span>
                        <span className={classes.tableCellValue}>Добромед</span>
                    </Typography>
                    <Typography>
                        <span className={classes.tableCellName}>Адрес клиники:</span>
                        <span className={classes.tableCellValue}>г.Москва, ул.Пушкина, д.2</span>
                    </Typography>
                    <Typography>
                        <span className={classes.tableCellName}>Юр.лицо клиники:</span>
                        <span className={classes.tableCellValue}>Юр.лицо клиники ООО "Добромед"</span>
                    </Typography>

                    <Typography variant="h5" style={{marginTop: 15, marginBottom: 10, color: "rgb(104, 140, 188)"}}>
                       Состав проекта
                    </Typography>
                    
                    <Grid container>
                        {getCheckedTools(tools).map(tool => (
                            <Grid className={classes.tableCellValue} md={6}  sm={12} style={{marginBottom: 5}}>
                                {tool.tool_name}
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </Dialog>
    );
}