import React from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    formContainer: {
        display: "flex",
        flexDirection: "row"
    }
  }),
);


function Search() {
    const classes = useStyles();
    const [searchType, setSearchType] = React.useState(0)
    const [statusType, setStatusType] = React.useState(0)

    function GetSearchFieldByType(searchType: number) {
        switch(searchType) {
            case 4: return <div style={{display: "inline-block", flex: "1 0 auto"}}><SelectorForSearchByToolsType /></div>
            case 5: return <div style={{display: "inline-block", flex: "1 0 auto"}}><DatePickerForSearchByDate /></div>
            default: return (
                // <div style={{display: "inline-block", flex: "1 0 auto"}}><DefaultTextField /></div>
                <FormControl className={classes.formControl}><DefaultTextField /></FormControl>
            )
        }
    }
    
    function SelectorForSearchByToolsType() {
        return (
            <Select
                value={0}
                id="select"
            >   
                <MenuItem value={0}>Всё оборудование</MenuItem>
                <MenuItem value={1}>Мониторы пациента</MenuItem>
                <MenuItem value={2}>Рентген-аппараты</MenuItem>
            </Select>
        )
    }

    function DatePickerForSearchByDate() {
        const [startRangeDate, setStartRangeDate] = React.useState(new Date('2014-08-18T21:11:54'));
        const [endRangeDate, setEndRangeDate] = React.useState(new Date('2014-08-18T21:11:54'));

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd.mm.yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="С какой даты"
                    value={startRangeDate}
                    onChange={date => setStartRangeDate(date)}
                    KeyboardButtonProps={{
                    'aria-label': 'change date',
                    }}
                    style={{margin: 0}}
                />
                <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="dd.mm.yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="До какой даты"
                    value={endRangeDate}
                    onChange={date => setEndRangeDate(date)}
                    KeyboardButtonProps={{
                    'aria-label': 'change date',
                    }}
                    style={{margin: 0, marginLeft: "1em"}}
                />
          </MuiPickersUtilsProvider>
        )
    }

    function DefaultTextField() {
        return (
            <TextField
            fullWidth
            label="Поиск"
            style={{}}
        />
        )
    }
    
    return (
        <div className={classes.formContainer}>
            <FormControl className={classes.formControl}>
                <InputLabel id="status">Статус проекта</InputLabel>
                <Select
                    value={statusType}
                    id="status"
                    onChange={(e) => setStatusType(+e.target.value)}
                    style={{
                        marginRight: "1em"
                    }}
                >   
                    <MenuItem value={0} >Любой</MenuItem>
                    <MenuItem value={1} style={{fontWeight: "bolder", color: "green"}}>Авторизованые</MenuItem>
                    <MenuItem value={2} style={{fontWeight: "bolder", color: "orange"}}>Авторизованные частично</MenuItem>
                    <MenuItem value={3} style={{fontWeight: "bolder", color: "blue"}}>На авторизации</MenuItem>
                    <MenuItem value={4} style={{fontWeight: "bolder", color: "red"}}>Не авторизованные</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id="select_filter">Искать</InputLabel>
                <Select
                value={searchType}
                id="select_filter"
                onChange={(e) => setSearchType(+e.target.value)}
                style={{
                    marginRight: "1em"
                }}
                >   
                    <MenuItem value={0}>Все проекты</MenuItem>
                    <MenuItem value={1}>По ИНН</MenuItem>
                    <MenuItem value={2}>По КЛАДР</MenuItem>
                    <MenuItem value={3}>По оборудованию</MenuItem>
                    <MenuItem value={4}>По типу оборудования</MenuItem>
                    <MenuItem value={5}>По датам</MenuItem>
                    <MenuItem value={6}>По названию ЛУ</MenuItem>
                </Select>
            </FormControl>
            {GetSearchFieldByType(searchType)}
        </div>
        
    )
}

export default Search