import React from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


function Search() {
    const [searchType, setSearchType] = React.useState(0)

    function GetSearchFieldByType(searchType: number) {
        switch(searchType) {
            case 4: return <SelectorForSearchByToolsType />
            case 5: return <DatePickerForSearchByDate />
            default: return <DefaultTextField />
        }
    }
    
    function SelectorForSearchByToolsType() {
        return (
            <Select
                value={searchType}
                id="select"
            >   
                <MenuItem value={0}>Мониторы пациента</MenuItem>
                <MenuItem value={1}>Рентген-аппараты</MenuItem>
            </Select>
        )
    }

    function DatePickerForSearchByDate() {
        const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

        const handleDateChange = (date) => {
          setSelectedDate(date);
        };

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
          </MuiPickersUtilsProvider>
        )
    }

    function DefaultTextField() {
        return (
            <TextField
            fullWidth
            label="Поиск"
        />
        )
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
                style={{
                    marginRight: "1em"
                }}
            >   
                <MenuItem value={0}>Все</MenuItem>
                <MenuItem value={1}>По ИНН</MenuItem>
                <MenuItem value={2}>По КЛАДР</MenuItem>
                <MenuItem value={3}>По оборудованию</MenuItem>
                <MenuItem value={4}>По типу оборудования</MenuItem>
                <MenuItem value={5}>По датам</MenuItem>
                <MenuItem value={6}>По названию ЛУ</MenuItem>
            </Select>
            
            {GetSearchFieldByType(searchType)}

        </div>
    )
}

export default Search