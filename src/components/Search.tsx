import React from 'react'
import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120
    },
    formContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "space-between"
    },
    root: {
        fontWeight: "bolder", 
        color: "#666b73",
        fontSize: "0.85rem !important",
    },
    icon: {
        borderRadius: "50%",
        width: 20,
        height: 20,
        boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
        backgroundColor: '#f5f8fa',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
          outline: '2px auto rgba(19,124,189,.6)',
          outlineOffset: 2,
        },
        'input:hover ~ &': {
          backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
          boxShadow: 'none',
          background: 'rgba(206,217,224,.5)',
        },
      },
      checkedIcon: {
        backgroundColor: 'rgb(104, 140, 188)',
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
        '&:before': {
          display: 'block',
          width: 20,
          height: 20,
          backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
          content: '""',
        },
        'input:hover ~ &': {
          backgroundColor: '#106ba3',
        },
      },
  }),
);


function Search() {
    const classes = useStyles();
    const [searchType, setSearchType] = React.useState(0)

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
    const [authorised, setAuthorised] = React.useState(false)
    const possibleProjectStatus = [
        {
            id: 1,
            name: "Авторизовано"
        },
        {
            id: 2,
            name: "Авторизовано частично"
        },
        {
            id: 3,
            name: "Не авторизовано"
        },
        {
            id: 4,
            name: "На авторизации"
        },
        {
            id: 5,
            name: "Запрос актуальности"
        },
        {
            id: 6,
            name: "Завершено"
        },
    ]
    return (
        <Grid container>
            <Grid item lg={8}>
                <Typography style={{fontWeight: "bolder", color: "rgb(104, 140, 188)", marginRight: 5}}>Статусы проектов:</Typography>
                <Grid container style={{display: "flex", alignItems: "center"}}>
                    {possibleProjectStatus.map(status => (
                        <Grid item lg={2}>
                            <FormControlLabel
                                control={
                                    <Checkbox 
                                        size="small" 
                                        name="checkedA"
                                        color="primary"
                                        checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                                        icon={<span className={classes.icon} />}
                                    />}
                                label={status.name}
                                className={classes.root}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>

            <Grid item lg={4} style={{display: "flex", alignItems: "center"}}>
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
            </Grid>
        </Grid>
    )
}

export default Search