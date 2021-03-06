import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ProjectOneByCard from '../components/ProjectOneByCard'
import ModalUserInfo from '../components/ModalUserInfo'
import ModalResetPassword from '../components/ModalResetPassword'
import { thunkData } from "../services/thunks";
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
    buttonContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
    },
    tableCellName: {
        fontWeight: "bolder", 
        color: "#96999c", 
        marginRight: 5
    },
    tableCellValue: {
        fontWeight: "bolder", 
        color: "#666b73"
    },
    contentWrapper: {
        padding: theme.spacing(2),
    },
  }),
);

function User({ getProjects, projectsList, user }) {
    const [modalOpen, setModalOpen] = React.useState(false)
    const [resetPasswordOpen, setResetPasswordOpen] = React.useState(false)
    const classes = useStyles()

    let projectListAction = {
        type: LIST_PROJECTS,
        endpoint: "projects/",
        data: {},
    };
    const [userinfo, setUserinfo] = React.useState({
        id: user.id,
        name: user.name,
        surname: user.surname,
        patronymic: user.patronymic,
        email: user.email,
        phone: user.phone,
        project_visibility: user.project_visibility,
        max_discount: user.max_discount,
        created_at: user.created_at,
        roles: user.roles[0].id
    })

    React.useEffect( () => {
        getProjects(projectListAction)
    }, [])

    return (
        <div>
            <div className={classes.userHeader}>
                <Typography component="h1" variant="h4">
                    Мой кабинет
                </Typography>
                <Typography style={{marginBottom: "2em"}}>Информация о пользователе {user ? user.username : ""}</Typography>

                <Grid container>
                    <Grid item xs={12} lg={6}>
                    <Table size="small">
                        <TableBody>
                            <TableRow>
                                <TableCell className={classes.tableCellName}>
                                    Фамилия
                                </TableCell>
                                <TableCell className={classes.tableCellValue}>
                                    {userinfo.surname}
                                </TableCell>
                                <TableCell className={classes.tableCellName}>
                                    Номер
                                </TableCell>
                                <TableCell className={classes.tableCellValue}>
                                    {userinfo.phone}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.tableCellName}>
                                    Имя
                                </TableCell>
                                <TableCell className={classes.tableCellValue}>
                                    {userinfo.name}
                                </TableCell>
                                <TableCell className={classes.tableCellName}>
                                    Почта
                                </TableCell>
                                <TableCell className={classes.tableCellValue}>
                                    {userinfo.email}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className={classes.tableCellName}>
                                    Отчество
                                </TableCell>
                                <TableCell className={classes.tableCellValue}>
                                    {userinfo.patronymic}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </Grid>

                    <Grid item xs={12} lg={6} className={classes.buttonContainer}>
                        <Button 
                        variant="contained" 
                        color="primary" 
                        style={{ width: 200}}
                        onClick={() => setResetPasswordOpen(true)}
                        >
                            Сбросить пароль
                        </Button>
                        <Button 
                        variant="contained" 
                        color="primary" 
                        style={{marginTop: 5, width: 200}} 
                        onClick={() => setModalOpen(true)}>
                            Изменить
                        </Button>
                    </Grid>
                </Grid>
            </div>

            <div className={classes.contentWrapper}>
                <Typography
                    component="h2" 
                    variant="h5"
                    style={{color: "#688cbc", display: "inline-block", marginTop: 20, marginBottom: 10}}
                >
                    Проекты
                </Typography>
                {projectsList.map(item => <ProjectOneByCard item={item} />)}
            </div>

            <ModalUserInfo open={modalOpen} onClose={() => setModalOpen(false)} user={userinfo} setUserinfo={setUserinfo}/>
            <ModalResetPassword open={resetPasswordOpen} onClose={() => setResetPasswordOpen(false)} user={user}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      projectsList: state.project.projectsList,
      user: state.auth.user
    }
  }
    
function mapDispatchToProps(dispatch) {
    return {
        getProjects: (action: TODO) => dispatch(thunkData(action)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(User)