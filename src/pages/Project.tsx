import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { tools_block, tools } from '../middleware/infods5i_dealers'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ToolsTable from '../components/ToolsTable'
import ModalProjectPresend from '../components/ModalProjectPresend'
import _ from "lodash"

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

function Project() {
    const classes = useStyles()
    const [allTools, setTools] = React.useState(tools)
    const [openPresend, setOpenPresend] = React.useState(false)
    const [clinicInn, setClinicInn] = React.useState('555')
    const [clinicAddress, setClinicAddress] = React.useState('')
    const [clinicName, setClinicName] = React.useState('')
    const [clinicUr, setClinicUr] = React.useState('')

    function changeHandler(event) {
        console.log(event.target.value)
        _.debounce(() => setClinicInn(event.target.value), 1000)
    }

    function presendHandler() {
        setOpenPresend(true)
    }

    return (
        <div>
            <div className={classes.headerWrapper}>
                <Typography component="h1" variant="h4">
                    Новый проект
                </Typography>
            </div>
            <div className={classes.contentWrapper}>
                <Typography
                    component="h2" 
                    variant="h5"
                    style={{color: "#688cbc", display: "inline-block", marginTop: 20, marginBottom: 10}}
                >
                    Реквизиты
                </Typography>

                <Paper className={classes.paper}>
                    <Grid container className={classes.gridContainer}>
                        <Grid item md={6}>
                            <TextField 
                            style={{margin: 5, width: 500}}
                            fullWidth
                            size="small"
                            variant="outlined"
                            label="ИНН клиники"
                            required
                            onChange={changeHandler}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField 
                            label="Адрес клиники"
                            fullWidth
                            size="small"
                            variant="outlined"
                            style={{margin: 5, width: 500}}

                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField 
                            label="Название клиники"
                            fullWidth
                            size="small"
                            variant="outlined"
                            style={{margin: 5, width: 500}}
                            />
                        </Grid>
                        <Grid item md={6}>
                            <TextField 
                            label="Наименование юр.лица клиники"
                            fullWidth
                            size="small"
                            variant="outlined"
                            style={{margin: 5, width: 500}}
                            />
                        </Grid>
                    </Grid>
                </Paper>

                <Typography
                    component="h2" 
                    variant="h5"
                    style={{color: "#688cbc", display: "inline-block", marginTop: 20, marginBottom: 10}}
                >
                    Авторизуемое оборудование
                </Typography>

                <ToolsTable 
                    tools={allTools}
                    setTools={setTools}
                    tools_block={tools_block}
                />

                <Button variant="contained" color="primary" onClick={presendHandler}>
                    Предварительный просмотр проекта
                </Button>
            </div>
            <ModalProjectPresend 
                open={openPresend} 
                onClose={() => setOpenPresend(false)} 
                tools={allTools}
                clinicInn={clinicInn}
                clinicAddress={clinicAddress}
                clinicName={clinicName}
                clinicUr={clinicUr}
            />
        </div>
    )
}

export default Project