import React from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';


function Search() {
    const [searchType, setSearchType] = React.useState(0)

    function isSearchByToolsType(searchType) {
        return searchType === 4
    }
    
    return (
        <div style={{
            display: "flex",
            marginBottom: '1em'
        }}>
            <Select
                value={searchType}
                id="select"
                onChange={(e) => setSearchType(+e.target.value)}
            >   
                <MenuItem value={0}>Все</MenuItem>
                <MenuItem value={1}>По ИНН</MenuItem>
                <MenuItem value={2}>По КЛАДР</MenuItem>
                <MenuItem value={3}>По оборудованию</MenuItem>
                <MenuItem value={4}>По типу оборудования</MenuItem>
                <MenuItem value={5}>По датам</MenuItem>
                <MenuItem value={6}>По названию ЛУ</MenuItem>
            </Select>

            {isSearchByToolsType(searchType) ? <Select
                value={0}
                id="select"
                style={{
                    marginLeft: "1em"
                }}
            >   
                <MenuItem value={0}>Мониторы пациента</MenuItem>
                <MenuItem value={1}>Рентген аппараты</MenuItem>
            </Select> 
            :
            <TextField
                fullWidth
                label="Поиск"
                style={{
                    marginLeft: "1em"
                }}
            />
            }
        </div>
    )
}

export default Search