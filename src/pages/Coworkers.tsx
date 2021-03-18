import React from 'react'
import DataTable from '../components/DataTable'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import ModalUserInfo from '../components/ModalUserInfo'
import { LIST_USERS } from "../store/types";
import { thunkData } from "../services/thunks";
import { connect } from "react-redux";
import { getRoleNameByRoleID } from "../library/UserMethods"
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        overflow: "hidden",
        marginTop: 10,
        padding: theme.spacing(3)
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
        display: "flex",
        flexDirection: "column"
    },
    searchField: {
        margin: theme.spacing(1),
        marginRight: 0,
        maxWidth: 400,
        alignSelf: "flex-end"
    },
    coworkerWrapper: {
        padding: theme.spacing(2)
    },
    usertableHead: {
        border: "2px solid #e1e3e5",
        "&.MuiTableRow-root .MuiTableCell-root": {
            fontWeight: "bolder",
            color: "#4e4a56"
        }
    }
  }),
);

const testUserListReducedToRows = [
    {
        id: 1,
        fullname: 'Иванов Иван Иванович',
        registered: '21.01.2021',
        phone: '+7 (800) 555-35-35',
        mail: "ivanov@aaa.ru",
        role: 'Сотрудник',
    },
    {
        id: 2,
        fullname: 'Петров Петр Петрович',
        registered: '21.01.2021',
        phone: '+7 (800) 555-35-35',
        mail: "petrov@aaa.ru",
        role: 'Сотрудник'
    },
    {
        id: 3,
        fullname: 'Генералов Алексей Иванович',
        registered: '21.01.2021',
        phone: '+7 (800) 555-35-35',
        mail: "generalov@aaa.ru",
        role: 'Нач. отдела'
    },
    {
        id: 4,
        fullname: 'Иванов Иван Иванович',
        registered: '21.01.2021',
        phone: '+7 (800) 555-35-35',
        mail: "ivanov@aaa.ru",
        role: 'Сотрудник',
    },
    {
        id: 5,
        fullname: 'Петров Петр Петрович',
        registered: '21.01.2021',
        phone: '+7 (800) 555-35-35',
        mail: "petrov@aaa.ru",
        role: 'Сотрудник'
    },
    {
        id: 6,
        fullname: 'Генералов Алексей Иванович',
        registered: '21.01.2021',
        phone: '+7 (800) 555-35-35',
        mail: "generalov@aaa.ru",
        role: 'Нач. отдела'
    },
    {
        id: 7,
        fullname: 'Иванов Иван Иванович',
        registered: '21.01.2021',
        phone: '+7 (800) 555-35-35',
        mail: "ivanov@aaa.ru",
        role: 'Сотрудник'
    },
    {
        id: 8,
        fullname: 'Петров Петр Петрович',
        registered: '21.01.2021',
        phone: '+7 (800) 555-35-35',
        mail: "petrov@aaa.ru",
        role: 'Сотрудник',
    },
    {
        id: 9,
        fullname: 'Генералов Алексей Иванович',
        registered: '21.01.2021',
        phone: '+7 (800) 555-35-35',
        mail: "generalov@aaa.ru",
        role: 'Нач. отдела'
    },
]

function Coworkers({ getUsers, usersList }) {
    const classes = useStyles()
    const [modalOpen, setModalOpen] = React.useState(false)
    const [currentUser, setCurrentUser] = React.useState({})
    React.useEffect( () => {   
        let usersListAction = {
          type: LIST_USERS,
          endpoint: "users/",
          data: {},
        };
        getUsers(usersListAction)
    }, [])

    return (
        <div>
            <div className={classes.headerWrapper}>
                <Typography component="h1" variant="h4">
                    Мои сотрудники
                </Typography>
            </div>
        
            <div className={classes.contentWrapper}>
                <Paper className={classes.coworkerWrapper}>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                        <TextField
                            fullWidth
                            placeholder="Поиск"
                            className={classes.searchField}
                        />
                    </div>
                    <Table size="small">
                        <TableHead >
                            <TableRow className={classes.usertableHead}>
                                <TableCell>
                                    Логин
                                </TableCell>
                                <TableCell>
                                    Имя
                                </TableCell>
                                <TableCell>
                                    Дата регистрации
                                </TableCell>
                                <TableCell>
                                    Телефон
                                </TableCell>
                                <TableCell>
                                    Почта
                                </TableCell>
                                <TableCell>
                                    Роль
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {usersList.map( user => (
                                <TableRow key={user.id} hover onClick={() => {
                                    setModalOpen(true)
                                    setCurrentUser({...user, roles: user.roles[0].id})
                                    }} style={{cursor: "pointer"}}>
                                    <TableCell>{user.login}</TableCell>
                                    <TableCell>{`${user.name} ${user.surname} ${user.patronymic}`}</TableCell>
                                    <TableCell>{user.created_at}</TableCell>
                                    <TableCell>{user.phone}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>{getRoleNameByRoleID(user.roles[0].id)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <TablePagination
                        component="div"
                        count={100}
                        page={1}
                        rowsPerPage={10}
                        onChangeRowsPerPage={() => {}}
                        onChangePage={() => {}}
                    />
                </Paper>
            </div>
            <ModalUserInfo 
            open={modalOpen} 
            onClose={() => setModalOpen(false)} 
            user={currentUser} 
            setUserinfo={setCurrentUser}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      usersList: state.user.usersList
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      getUsers: (action: TODO) => dispatch(thunkData(action)),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Coworkers)