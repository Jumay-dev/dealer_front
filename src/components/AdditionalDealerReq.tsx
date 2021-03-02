import React from "react"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        overflow: "hidden",
        marginTop: 10,
        padding: theme.spacing(3),
        display: "flex",
    },
    headerWrapper: {
        width: "100%",
        background: '#e3ecf7',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(3),
        color: "#688cbc",
        minHeight: "120px"
    },
    contentWrapper: {
        padding: theme.spacing(2),
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
    gridContainer: {
        maxWidth: "70%"
    }
  }),
);

export default function NewProjectReq({
    dealerInn, 
    setDealerInn, 
    dealerAddress, 
    setDealerAddress, 
    dealerName, 
    setDealerName, 
    dealerUr, 
    setDealerUr
}) {
    const classes = useStyles()


    return (
    <div>
        <Typography
            component="h2" 
            variant="h5"
            style={{color: "#688cbc", display: "inline-block", marginTop: 20, marginBottom: 10}}
        >
            Реквизиты промежуточного дилера
        </Typography>
        <Paper className={classes.paper} key="unikey">
            <Grid container className={classes.gridContainer}>
                <Grid item md={6} sm={12}>
                    <TextField 
                    style={{margin: 5, width: "20vw"}}
                    fullWidth
                    size="small"
                    variant="outlined"
                    label="ИНН дилера"
                    required
                    value={dealerInn}
                    onChange={event => setDealerInn(event.target.value)}
                    />
                </Grid>
                <Grid item md={6} sm={12}>
                    <TextField 
                    label="Адрес дилера"
                    fullWidth
                    size="small"
                    variant="outlined"
                    value={dealerAddress}
                    style={{margin: 5, width: "20vw"}}
                    onChange={event => setDealerAddress(event.target.value)}
                    />
                </Grid>
                <Grid item md={6} sm={12}>
                    <TextField 
                    label="Название дилера"
                    fullWidth
                    size="small"
                    variant="outlined"
                    style={{margin: 5, width: "20vw"}}
                    value={dealerName}
                    onChange={event => setDealerName(event.target.value)}
                    />
                </Grid>
                <Grid item md={6} sm={12}>
                    <TextField 
                    label="Наименование юр.лица дилера"
                    fullWidth
                    size="small"
                    variant="outlined"
                    style={{margin: 5, width: "20vw"}}
                    value={dealerUr}
                    onChange={event => setDealerUr(event.target.value)}
                    />
                </Grid>
            </Grid>
        </Paper>
    </div>
    )
}