import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';
import { tools_block } from '../middleware/infods5i_dealers'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import AccordionOfTools from '../components/AccordionOfTools'
import NewProjectReq from '../components/NewProjectReq'
import { newProject } from '../actions/project';
import { setSuccess, unsetSuccess } from '../actions/app';
import { connect } from "react-redux";
import { thunkData } from "../services/thunks";
import { LIST_TOOLS } from "../store/types";
import ToolInfoInProject from '../components/ToolInfoInProject'

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

function Project(
    { 
        newProject,
        setSuccess, 
        history, 
        toolsList 
    }) {
    const classes = useStyles()
    const [openPresend, setOpenPresend] = React.useState(false)
    const [categories, setCategories] = React.useState(tools_block)
    const [allTools, setTools] = React.useState([])
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    React.useEffect( () => {
        if (toolsList.length !== 0) {
            setTools([...toolsList])
        }
    }, [toolsList])

    function presendHandler() {
        setOpenPresend(true)
    }
    const handleInfoClick = (event) => {
        setAnchorEl(event.currentTarget);
    }; 
    const handleClose = () => {
        setAnchorEl(null);
    };
    const openPop = Boolean(anchorEl);
    const id = openPop ? 'simple-popover' : undefined;

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

    function getFilteredToolsByCategory(tools, categoryID) {
        if (Array.isArray(tools) && tools.length !== 0) {
            console.log('getFilteredToolsByCategory OK')
            return tools.filter(tool => +tool.tool_view_block === +categoryID)
        }
    }

    return (
        <div>
            <Box visibility={"visible"}>
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

                    {allTools.length !== 0 ? categories.map(category => 
                        <AccordionOfTools 
                        categoryName={category.block_name}
                        filteredToolsByCategory={getFilteredToolsByCategory(allTools, category.id)}
                        allTools={allTools}
                        setTools={setTools}
                        key={category.id}
                        handleInfoClick={handleInfoClick}
                    />) : null}

                    <ToolInfoInProject
                        toolName={'Многофункциональный монитор пациента Votem VP-1200'}
                        img="https://ds-med.ru/wp-content/uploads/2019/05/votem_1200.jpg"
                        description="Монитор пациента VP-1200 компании VOTEM (Южная Корея) — модель с расширенными функциональными возможностями. Диагональ экрана составляет 12,1 дюйма. Опционально доступны функции мультигаз, оценки глубины наркоза и капнометрии EtCO2. Низкая стоимость комплектующих делает VP-1200 экономически выгодным решением при регулярном проведении оценки глубины анестезии."
                        openPop={openPop}
                        anchorEl={anchorEl}
                        handleClose={handleClose}
                        id={id}
                    />

                    <Button variant="contained" color="primary" onClick={presendHandler}>
                        Предварительный просмотр проекта
                    </Button> 
                </div>
            </Box>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        toolsList: state.tool.toolsList
    }
}

function mapDispatchToProps(dispatch) {
    return (
        {
            newProject,
            setSuccess
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)