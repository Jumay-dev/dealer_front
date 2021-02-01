import React from 'react'
import DataTable from '../components/DataTable'
import Search from '../components/Search'
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        overflow: "hidden",
        marginTop: 10,
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
        <>
            <Typography component="h1" variant="h4">
                Мои сотрудники
            </Typography>
            <Search />
            <Pagination count={10} color="secondary" size="large" style={{marginBottom: 10}}/>
            <DataTable
                headers={["Имя", "Зарегистрирован", "Телефон", "Почта", "Роль"]}
                rows={testUserListReducedToRows}
                actions={['delete', 'edit']}
            />
            <Pagination count={10} color="secondary" size="large" style={{marginTop: 10}}/>
        </>
    )
}

export default Coworkers