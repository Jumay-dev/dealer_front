import React from 'react'
import DataTable from '../components/DataTable'
import Search from '../components/Search'
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        overflow: "hidden",
        marginTop: 10,
    },
    headerWrapper: {
        width: "100%",
        background: '#e3ecf7',
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(3),
        color: "#688cbc",
    },
    contentWrapper: {
        padding: theme.spacing(2),
    },
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
                <span>поиск сотрудников</span>
                <Paper>
                    <DataTable
                        headers={["Имя", "Зарегистрирован", "Телефон", "Почта", "Роль"]}
                        rows={testUserListReducedToRows}
                        actions={['delete', 'edit']}
                    />
                </Paper>
            </div>
        </div>
    )
}

export default Coworkers