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
import { connect } from "react-redux";
import { newProject } from '../actions/project';

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

function Project({ newProject }) {
    const classes = useStyles()
    const [allTools, setTools] = React.useState(tools)
    const [openPresend, setOpenPresend] = React.useState(false)
    const [clinicInn, setClinicInn] = React.useState('555 666 777 888 000')
    const [clinicAddress, setClinicAddress] = React.useState('Добромед')
    const [clinicName, setClinicName] = React.useState('г.Москва, ул.Пушкина, д.2')
    const [clinicUr, setClinicUr] = React.useState('ООО "Добромед"')


    function presendHandler() {
        setOpenPresend(true)
    }

    function handleNewProject() {
        const project = {
            tools: allTools.filter( item => item.isCheked = true),
            status: "4",
            id: 10,
            externalId: 28,
            added: "4.01.2021",
            dealer: "ООО 'ААА'",
            employee: 'Иванов Иван',
            client: clinicName,
            clientInn: clinicInn,
            actualised: '10.01.2021',
            expires: '20.02.2021',
            manager: 'Даэсмедов Михаил Алексеевич',
        }
        newProject(project)
        let currentTools = allTools.splice(0)
        currentTools.forEach(item => item.isChecked = false)
        setTools(currentTools)
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
                handleNewProject={handleNewProject}
            />
        </div>
    )
}

function mapStateToProps(state) {
return {
    projectsList: state.project.projectsList,
}
}

const mapDispatchToProps = {
    newProject
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)