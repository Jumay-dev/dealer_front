import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Accordion from '@material-ui/core/Accordion'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'
import CommercialOfferList from "./ModalCommercialOffer"

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { thunkData } from "../services/thunks";
import { connect } from "react-redux";
import { LIST_TOOLS } from "../store/types";

import { tools } from '../middleware/infods5i_dealers'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        overflow: "hidden",
        marginTop: 10,
    },

    gridInfo: {
        background: "#D6D2C4",
        padding: "10px !important",
    },

    gridTools: {
        padding: "10px !important",
    },

    gridButtons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#D6D2C4",
        padding: "10px !important",
    }
  }),
);

function ProjectOne({ item, toolsList, getTools }) {
    const classes = useStyles()
    let toolsListAction = {
        type: LIST_TOOLS,
        endpoint: "tools/",
        data: {},
    };

    React.useEffect(() => {
        getTools(toolsListAction)
    }, [])

    function ToolResolver({toolid}) {
        let tool = tools.find( item => +item.id === +toolid)
        if (tool) {
            return (
                <p>
                    {tool.tool_name}
                </p>
            )
        }
    }

    return (
        <Paper className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item xs={12} lg={3} className={classes.gridInfo}>
                    <Typography variant="subtitle1">
                        # {item.id}
                    </Typography>
                    <Typography variant="subtitle1">
                        Зарегистрирован {item.added}
                    </Typography>
                    <Typography variant="subtitle1">
                        Дилер: {item.dealer} 
                    </Typography>
                    <Typography variant="subtitle1">
                        Сотрудник: {item.employee}
                    </Typography>
                    <Typography variant="subtitle1">
                        Клиент: {item.client} 
                    </Typography>
                    <Typography variant="subtitle1">
                        Актуализирован: {item.actualised}
                    </Typography>
                    <Typography variant="subtitle1">
                        В реестре до {item.expires}
                    </Typography>
                    <Typography variant="subtitle1">
                        Менеджер: {item.manager} 
                    </Typography>
                </Grid>

                <Grid item xs={12} lg={6} className={classes.gridTools}>
                    <Typography variant="subtitle1" paragraph>
                        Авторизовано
                    </Typography>

                    {item.tools.map(elem => <ToolResolver toolid={elem.tools_id}/>)}
                    
                    {/* {toolsList.length !== 0 ? toolsList.map(item => <Typography variant="subtitle1" paragraph>{item.name}</Typography>) 
                    : <Typography variant="subtitle1" paragraph>Нет авторизованных позиций</Typography>} */}
                </Grid>

                <Grid item xs={12} lg={3} className={classes.gridButtons}>

                    <CommercialOfferList />
                    
                    <Button variant="contained" color="primary">
                        Скачать КП дилера
                    </Button>

                    <Link to="/newproject">
                        <Button variant="contained" color="primary">
                            Подробнее о проекте
                        </Button>
                    </Link>

                    <Button variant="contained" color="primary">
                        Чат с менеджером
                    </Button>

                </Grid>
            </Grid>
        </Paper>
    )
}

function mapStateToProps(state) {
    console.log(state)
    return {
      toolsList: state.tool.toolsList,
    }
  }
    
function mapDispatchToProps(dispatch) {
    return {
        getTools: (action: TODO) => {dispatch(thunkData(action))},
        // getTools: (action: TODO) => dispatch(action)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectOne)