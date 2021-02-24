import React from "react"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ModalProjectPresend from '../components/ModalProjectPresend'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        overflow: "hidden",
        marginTop: 10,
        padding: theme.spacing(3),
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

export default function NewProjectReq({allTools, handleNewProject, openPresend, setOpenPresend}) {
    const classes = useStyles()
    const [clinicInn, setClinicInn] = React.useState('555 666 777 888 000')
    const [clinicAddress, setClinicAddress] = React.useState('г.Москва, ул.Пушкина, д.2')
    const [clinicName, setClinicName] = React.useState('Добромед')
    const [clinicUr, setClinicUr] = React.useState('ООО "Добромед"')

    return (
    <div>
    <Paper className={classes.paper} key="unikey">
        <Grid container className={classes.gridContainer}>
            <Grid item md={6} sm={12}>
                <TextField 
                style={{margin: 5, width: "20vw"}}
                fullWidth
                size="small"
                variant="outlined"
                label="ИНН клиники"
                required
                value={clinicInn}
                onChange={event => setClinicInn(event.target.value)}
                />
            </Grid>
            <Grid item md={6} sm={12}>
                <TextField 
                label="Адрес клиники"
                fullWidth
                size="small"
                variant="outlined"
                value={clinicAddress}
                style={{margin: 5, width: "20vw"}}
                onChange={event => setClinicAddress(event.target.value)}
                />
            </Grid>
            <Grid item md={6} sm={12}>
                <TextField 
                label="Название клиники"
                fullWidth
                size="small"
                variant="outlined"
                style={{margin: 5, width: "20vw"}}
                value={clinicName}
                onChange={event => setClinicName(event.target.value)}
                />
            </Grid>
            <Grid item md={6} sm={12}>
                <TextField 
                label="Наименование юр.лица клиники"
                fullWidth
                size="small"
                variant="outlined"
                style={{margin: 5, width: "20vw"}}
                value={clinicUr}
                onChange={event => setClinicUr(event.target.value)}
                />
            </Grid>
        </Grid>
    </Paper>
    <ModalProjectPresend 
        open={openPresend}
        onClose={() => setOpenPresend(false)} 
        tools={allTools}
        clinicInn={clinicInn}
        clinicAddress={clinicAddress}
        clinicName={clinicName}
        clinicUr={clinicUr}
        handleNewProject={handleNewProject}
    />
    </div>
    )
}