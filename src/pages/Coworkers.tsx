import React from 'react'
import DataTable from '../components/DataTable'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

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
                <TextField
                    fullWidth
                    placeholder="Поиск"
                    className={classes.searchField}
                />
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