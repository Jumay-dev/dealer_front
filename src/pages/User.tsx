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
import ProjectOne from '../components/ProjectOne'

import { thunkAuth, thunkProjects } from "../services/thunks";
import { connect } from "react-redux";
import { LIST_PROJECTS } from "../store/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
    },
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
        <>
        <Paper className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item xs={12} lg={6}>
                    <p>Информация о пользователе ivanov1984</p>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Button variant="contained" color="primary">
                        Сбросить пароль
                    </Button>
                </Grid>

                <Grid item xs={12} lg={6}>
                    <TextField
                    label="Имя"
                    id="filled-size-small"
                    variant="filled"
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
                    variant="filled"
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <TextField
                    label="Максимальная скидка"
                    id="filled-size-small"
                    variant="filled"
                    />
                </Grid>

                <Grid item xs={12} lg={6}>
                    <TextField
                    label="Отчество"
                    id="filled-size-small"
                    variant="filled"
                    />
                </Grid>
                <Grid item xs={12} lg={6}>
                    <TextField
                    label="Телефон"
                    id="filled-size-small"
                    variant="filled"
                    />
                </Grid>

                <Grid item xs={12} lg={12}>
                    <TextField
                    label="e-mail"
                    id="filled-size-small"
                    variant="filled"
                    />
                </Grid>

                <Grid item xs={12} lg={6}>
                    <Typography variant="subtitle1" paragraph>
                        Проекты пользователя
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={6}>
                    <Button variant="contained" color="primary">
                        Добавить проект
                    </Button>
                </Grid>

                <Grid item xs={12} lg={12}>
                    <Search />
                    {projectsList.map(item => <ProjectOne item={item} />)}
                </Grid>

            </Grid>
        </Paper>
        </>
    )
}

function mapStateToProps(state) {
    return {
      projectsList: state.project.projectsList
    }
  }
    
    function mapDispatchToProps(dispatch) {
      return {
         getProjects: (action: TODO) => dispatch(thunkProjects(action)),
      };
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(User)