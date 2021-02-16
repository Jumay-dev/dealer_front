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
        name: 1,
        cells: ['Иванов Иван Иванович', '21.01.2021', '+7 (800) 555-35-35', "ivanov@aaa.ru", 'Сотрудник']
    },
    {
        name: 2,
        cells: ['Петров Петр Петрович', '21.01.2021', '+7 (800) 555-35-35', "petrov@aaa.ru", 'Сотрудник']
    },
    {
        name: 3,
        cells: ['Генералов Алексей Иванович', '21.01.2021', '+7 (800) 555-35-35', "generalov@aaa.ru", 'Нач. отдела']
    },
    {
        name: 4,
        cells: ['Иванов Иван Иванович', '21.01.2021', '+7 (800) 555-35-35', "ivanov@aaa.ru", 'Сотрудник']
    },
    {
        name: 5,
        cells: ['Петров Петр Петрович', '21.01.2021', '+7 (800) 555-35-35', "petrov@aaa.ru", 'Сотрудник']
    },
    {
        name: 6,
        cells: ['Генералов Алексей Иванович', '21.01.2021', '+7 (800) 555-35-35', "generalov@aaa.ru", 'Нач. отдела']
    },
    {
        name: 7,
        cells: ['Иванов Иван Иванович', '21.01.2021', '+7 (800) 555-35-35', "ivanov@aaa.ru", 'Сотрудник']
    },
    {
        name: 8,
        cells: ['Петров Петр Петрович', '21.01.2021', '+7 (800) 555-35-35', "petrov@aaa.ru", 'Сотрудник']
    },
    {
        name: 9,
        cells: ['Генералов Алексей Иванович', '21.01.2021', '+7 (800) 555-35-35', "generalov@aaa.ru", 'Нач. отдела']
    },
]

function Coworkers() {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.headerWrapper}>
                <Typography component="h1" variant="h4">
                    Мои сотрудники
                </Typography>
            </div>
        
            <div className={classes.contentWrapper}>
                <Paper className={classes.coworkerWrapper}>
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                        <Typography component="h2" variant="h6" style={{marginBottom: "2em", color: "#4e4a56", fontWeight: "bold"}}>
                            Список сотрудников
                        </Typography>
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
                            {testUserListReducedToRows.map( user => (
                                <TableRow key={user.name} hover>
                                    <TableCell>{user.cells[0]}</TableCell>
                                    <TableCell>{user.cells[1]}</TableCell>
                                    <TableCell>{user.cells[2]}</TableCell>
                                    <TableCell>{user.cells[3]}</TableCell>
                                    <TableCell>{user.cells[4]}</TableCell>
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
        </div>
    )
}

export default Coworkers