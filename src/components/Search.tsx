import React from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem';


function Search() {
    return (
        <div style={{
            display: "flex",
            marginBottom: '1em'
        }}>
            <Select
                value={0}
                id="select"
            >   
                <MenuItem value={0}>Все</MenuItem>
                <MenuItem value={1}>По ИНН</MenuItem>
                <MenuItem value={2}>По КЛАДР</MenuItem>
                <MenuItem value={3}>По оборудованию</MenuItem>
                <MenuItem value={3}>По типу оборудования</MenuItem>
                <MenuItem value={3}>По датам</MenuItem>
                <MenuItem value={3}>По названию ЛУ</MenuItem>
            </Select>

            <TextField
                fullWidth
                label="Поиск"
                style={{
                    marginLeft: "1em"
                }}
              />
        </div>
    )
}

export default Search