import React from 'react'
import DataTable from '../components/DataTable'
import Search from '../components/Search'
import Pagination from '@material-ui/lab/Pagination';

function Coworkers() {
    return (
        <>
            <Search />
            <Pagination count={10} color="secondary" size="large"/>
            <DataTable
                headers={["Имя", "Зарегистрирован", "Роль"]}
                rows={[
                    {
                        name: 1,
                        cells: ['Иванов Иван Иванович', '21.01.2021', '30.02.2021']
                    },
                    {
                        name: 2,
                        cells: ['Петров Петр Петрович', '21.01.2021', '30.02.2021']
                    },
                    {
                        name: 3,
                        cells: ['Сидоров Сидор Сидорович', '21.01.2021', '30.02.2021']
                    }
                ]}
                actions={['delete', 'edit']}
            />
            <Pagination count={10} color="secondary" size="large"/>
        </>
    )
}

export default Coworkers