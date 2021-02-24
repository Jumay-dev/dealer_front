import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import CloseIcon from '../assets/icons/Close circle.svg'
import Typography from '@material-ui/core/Typography';
import DownloadIcon from "../assets/icons/Download.svg"
import { Link } from 'react-router-dom'
import PDFIcon from '../assets/icons/pdfred.png'

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

const fakeCommercialOffers = [
  {
    id: 0,
    name: '8237465',
    created: '18.05.2020',
    actual: '20.10.2020',
  },
  {
    id: 1,
    name: '8237465',
    created: '18.05.2020',
    actual: '20.10.2020',
  },
  {
    id: 2,
    name: '8237465',
    created: '18.05.2020',
    actual: '20.10.2020',
  },
  {
    id: 3,
    name: '8237465',
    created: '18.05.2020',
    actual: '20.10.2020',
  },
  {
    id: 4,
    name: '8237465',
    created: '18.05.2020',
    actual: '20.10.2020',
  }
]

export default function ModalCommercialOffer({onClose, open, user}) {
    const classes = useStyles();

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} className={classes.root} fullWidth maxWidth="md">
            <DialogTitle id="simple-dialog-title" className={classes.headerStyle} disableTypography>
                <Typography variant="h5">
                    Коммерческие предложения
                </Typography>
                
                <IconButton onClick={() => onClose()} style={{marginRight: "-16px"}}>
                    <img src={CloseIcon} />
                </IconButton>
            </DialogTitle>
            <div className={classes.containerRoot}>
                <div style={{display: "flex", flexDirection: "column"}}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Название</TableCell>
                      <TableCell>Создано</TableCell>
                      <TableCell>Актуально до</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fakeCommercialOffers.map( item => (
                      <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.created}</TableCell>
                        <TableCell>{item.actual}</TableCell>
         
                        <IconButton>
                          <img src={DownloadIcon}/>
                        </IconButton>
                        <IconButton>
                          <img src={PDFIcon} style={{width: 25, height: 25}}/>
                        </IconButton>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                </div>

                <div style={{textAlign: "right", marginTop: "2em"}}>
                    <Link to="/newoffer" style={{textDecoration: "none"}}>
                      <Button type="button" variant="contained" color="primary">
                        Создать новое КП
                      </Button>
                    </Link>
                </div>
            </div>
        </Dialog>
    );
}
