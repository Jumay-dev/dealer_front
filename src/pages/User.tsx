import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';

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
        background: '#e3ecf7',
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(3),
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
    userProjectContainer: {
        marginTop: 15,
        padding: theme.spacing(2)
    },
    switchBase: {
        color:"rgb(104, 140, 188)",
        '&$checked': {
          color: "rgb(104, 140, 188)",
        },
        '&$checked + $track': {
          backgroundColor: "#e3ecf7",
        },
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
        <div>
            <div className={classes.userHeader}>
                {/* <Typography style={{fontWeight: "bolder", fontSize: "1.5em", marginBottom: 10}}>
                    Мой кабинет
                </Typography> */}
                <Typography component="h1" variant="h4">
                    Мой кабинет
                </Typography>
                <Typography style={{marginBottom: "2em"}}>Информация о пользователе ivanov1984</Typography>
                <Grid container spacing={1}>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        placeholder="Имя"
                        id="filled-size-small"
                        />
                    </Grid>
                    <Grid item xs={12} lg={4} style={{display: "none"}}>
                        <FormControlLabel
                            control={
                            <BlueSwitch
                                name="checkedB"
                            />
                            }
                            label="Видит только свои проекты"
                        />
                    </Grid>

                    <Grid item xs={12} lg={4}>
                        <TextField
                        placeholder="Фамилия"
                        id="filled-size-small"
                        />
                    </Grid>
                    <Grid item xs={12} lg={4} style={{display: "none"}}>
                        <TextField
                        placeholder="Максимальная скидка"
                        id="filled-size-small"
                        />
                    </Grid>

                    <Grid item xs={12} lg={4}>
                        <TextField
                        placeholder="Отчество"
                        id="filled-size-small"
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <TextField
                        placeholder="Телефон"
                        id="filled-size-small"
                        />
                    </Grid>

                    <Grid item xs={12} lg={4}>
                        <TextField
                        placeholder="e-mail"
                        id="filled-size-small"
                        />
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Button variant="contained" className={classes.buttonStyle}>
                            Сбросить пароль
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <Paper className={classes.paper}>
                    <div className={classes.userProjectContainer}>
                        <Typography variant="h6" style={{color: "#688cbc", marginBottom: 10}}>
                            Проекты пользователя
                        </Typography>

                        {projectsList.map(item => <ProjectOneByCard item={item} />)}
                    </div>
            </Paper>
        </div>
    )
}

const BlueSwitch = withStyles({
    switchBase: {
        color:"#ffffff",
        '&$checked': {
          color: "rgb(104, 140, 188)",
        },
        '&$checked + $track': {
          backgroundColor: "#919eaf",
          border: "rgb(104, 140, 188)"
        },
    },
    checked: {},
    track: {},
  })(Switch);

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