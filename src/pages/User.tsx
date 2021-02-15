import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Search from '../components/Search'
import ProjectOneByCard from '../components/ProjectOneByCard'

import { thunkAuth, thunkData } from "../services/thunks";
import { connect } from "react-redux";
import { LIST_PROJECTS } from "../store/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        margin: theme.spacing(1),
        overflow: "hidden"
    },
    userHeader: {
        width: "100%",
        background: '#e1edff',
        height: "3em",
        display: "flex",
        alignItems: "center",
        padding: 10,
        color: "#688cbc",
    },
    userContainer: {
        padding: theme.spacing(2),
    },
    buttonStyle: {
        color: "white",
        background: "#688cbc",
        fontWeight: "bolder",
        "&:hover": {
            background: "#688cbc"
        }
    },
    userInfoContainer: {
        background: "#eff5ff",
        padding: "1em",
        borderRadius: 5
    },
    userProjectContainer: {
        marginTop: 15
    }
  }),
);

function User({ getProjects, projectsList }) {
    const classes = useStyles()
    let projectListAction = {
        type: LIST_PROJECTS,
        endpoint: "projects/",
        data: {},
      };
    
      React.useEffect( () => {
        getProjects(projectListAction)
        console.log('pr', projectsList)
      }, [])
    return (
        <Paper className={classes.paper}>
            <div className={classes.userHeader}>
                <Typography style={{fontWeight: "bolder"}}>
                    Мой кабинет
                </Typography>
            </div>
            <div className={classes.userContainer}>
                <Grid container spacing={1} className={classes.userInfoContainer}>
                    <Grid item xs={12} lg={6}>
                        <p>Информация о пользователе ivanov1984</p>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Button variant="contained" className={classes.buttonStyle}>
                            Сбросить пароль
                        </Button>
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <TextField
                        label="Имя"
                        id="filled-size-small"
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <FormControlLabel
                            control={
                            <Switch
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Видит только свои проекты"
                        />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <TextField
                        label="Фамилия"
                        id="filled-size-small"
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                        label="Максимальная скидка"
                        id="filled-size-small"
                        />
                    </Grid>

                    <Grid item xs={12} lg={6}>
                        <TextField
                        label="Отчество"
                        id="filled-size-small"
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <TextField
                        label="Телефон"
                        id="filled-size-small"
                        />
                    </Grid>

                    <Grid item xs={12} lg={12}>
                        <TextField
                        label="e-mail"
                        id="filled-size-small"
                        />
                    </Grid>
                </Grid>

                <div className={classes.userProjectContainer}>
                    <Typography variant="subtitle1" paragraph>
                        Проекты пользователя
                    </Typography>


                    <Button variant="contained" className={classes.buttonStyle}>
                        Добавить проект
                    </Button>

                    {projectsList.map(item => <ProjectOneByCard item={item} />)}
                </div>
            </div>

        </Paper>
    )
}

function mapStateToProps(state) {
    return {
      projectsList: state.project.projectsList
    }
  }
    
function mapDispatchToProps(dispatch) {
    return {
        getProjects: (action: TODO) => dispatch(thunkData(action)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User)