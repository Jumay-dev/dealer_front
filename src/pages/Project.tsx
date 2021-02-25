import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { tools_block, tools } from '../middleware/infods5i_dealers'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ToolsTable from '../components/ToolsTable'
import NewProjectReq from '../components/NewProjectReq'
import { connect } from "react-redux";
import { newProject } from '../actions/project';
import { setSuccess, unsetSuccess } from '../actions/app';

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

function Project({ newProject, setSuccess, history }) {
    const classes = useStyles()
    const [allTools, setTools] = React.useState(tools)
    const [openPresend, setOpenPresend] = React.useState(false)

    function presendHandler() {
        setOpenPresend(true)
    }

    function handleNewProject(clinicName, clinicInn) {
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
        setSuccess()
        history.push("/projects")
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

                <NewProjectReq 
                allTools={allTools} 
                handleNewProject={handleNewProject}
                openPresend={openPresend}
                setOpenPresend={setOpenPresend}
                />
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
        </div>
    )
}

function mapStateToProps(state) {
return {
    projectsList: state.project.projectsList,
}
}

const mapDispatchToProps = {
    newProject,
    setSuccess
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)