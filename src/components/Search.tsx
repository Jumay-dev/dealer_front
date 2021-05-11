import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import { connect } from 'react-redux'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { listProjects } from '../actions/project'
import { setSearch } from '../actions/search'
import _ from 'lodash'
import { thunkData } from '../services/thunks'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      minWidth: 120,
      marginRight: "2em",
    },
    formContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "space-between",
      width: "100%",
    },
    mainWrapper: {
      width: "100%",
    },
    toolsWrapper: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      marginTop: "1em",
    },
    checkboxContainer: {
      display: "flex",
      alignItems: "center",
      marginRight: 10,
    },
    checkboxGroup: {
      display: "flex",
      fontWeight: 500,
    },
    icon: {
      borderRadius: "50%",
      width: 15,
      height: 15,
      boxShadow:
        "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
      backgroundColor: "#f5f8fa",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
      "$root.Mui-focusVisible &": {
        outline: "2px auto rgba(19,124,189,.6)",
        outlineOffset: 2,
      },
      "input:hover ~ &": {
        backgroundColor: "#ebf1f5",
      },
      "input:disabled ~ &": {
        boxShadow: "none",
        background: "rgba(206,217,224,.5)",
      },
    },
    checkedIcon: {
      backgroundColor: "rgb(104, 140, 188)",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
      "&:before": {
        display: "block",
        width: 15,
        height: 15,
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
      },
      "input:hover ~ &": {
        backgroundColor: "#106ba3",
      },
    },
    datepickerWrapper: {
      display: "flex",
      alignItems: "center",
    },
  })
);

type searchTypeEnum = "all"
| "inn"
| "kladr"
| "tool"
| "tool_type"
| "date"
| "lu_name"
| "manager"

function Search({listProjects, setSearch, search, project}) {
  const classes = useStyles();
  const [searchType, setSearchType] = React.useState<searchTypeEnum>("all");

  function getProjectsByFilter(event, datetime_start?, datetime_end?) {
    switch(searchType) {
      case 'all': {
        setSearch({
          all: event.target.value
        })
        break
      }
      case 'date': {
        setSearch({
          datetime_start: '123123',
          datetime_end: '321321'
        })
        break
      }
      default: {
        let data = {}
        data[searchType] = event.target.value
        setSearch(data)
      }
    }
  }

  function GetSearchFieldByType(searchType: string) {
    switch (searchType) {
      case "tool_type":
        return (
          <div style={{ display: "inline-block", flex: "1 0 auto" }}>
            <SelectorForSearchByToolsType />
          </div>
        );
      case "date":
        return (
          <div style={{ display: "inline-block", flex: "1 0 auto" }}>
            <DatePickerForSearchByDate />
          </div>
        );
      default:
        return <DefaultTextField />;
    }
  }

  function DatePickerForSearchByDate() {
    const classes = useStyles();
    const [startRangeDate, setStartRangeDate] = React.useState(
      new Date("2014-08-18T21:11:54")
    );
    const [endRangeDate, setEndRangeDate] = React.useState(
      new Date("2014-08-18T21:11:54")
    );
    // getProjectsByFilter(event)
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <div className={classes.datepickerWrapper}>
          <span>с</span>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd.mm.yyyy"
            margin="normal"
            id="date-picker-inline"
            value={startRangeDate}
            onChange={(date) => setStartRangeDate(date)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            style={{
              margin: 0,
              maxWidth: 120,
              marginLeft: 10,
              marginRight: 10,
            }}
          />
          <span>по</span>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd.mm.yyyy"
            margin="normal"
            id="date-picker-inline"
            value={endRangeDate}
            onChange={(date) => setEndRangeDate(date)}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            style={{ margin: 0, marginLeft: 10, maxWidth: 120 }}
          />
        </div>
      </MuiPickersUtilsProvider>
    );
  }

  function DefaultTextField() {
    //_.debounce(getProjectsByFilter, 1000)
    return (
      <TextField
        onChange={(event) => getProjectsByFilter(event)}
        value={search[searchType]}
        fullWidth
        placeholder="Поиск"
        autoFocus
      />
    );
  }

  function SelectorForSearchByToolsType() {
    return (
      <Select value={search.tool_type} onChange={(event) => getProjectsByFilter(event)} id="select" fullWidth>
        <MenuItem value={'all_tools'}>Всё оборудование</MenuItem>
        <MenuItem value={'monitors'}>Мониторы пациента</MenuItem>
        <MenuItem value={'xray'}>Рентген-аппараты</MenuItem>
      </Select>
    );
  }

  return (
    <div className={classes.mainWrapper}>
      <Typography
        style={{
          fontWeight: "bolder",
          color: "rgb(104, 140, 188)",
          marginRight: 5,
        }}
      >
        Статусы проектов:
      </Typography>
      <div className={classes.toolsWrapper}>
        <div className={classes.formContainer}>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(
                e: React.ChangeEvent<{
                  name?: string;
                  value: searchTypeEnum;
                }>
              ) => setSearchType(e.target.value)}
              value={searchType}
            >
              <MenuItem value={"all"}>Все проекты</MenuItem>
              <MenuItem value={"inn"}>По ИНН</MenuItem>
              <MenuItem value={"kladr"}>По КЛАДР</MenuItem>
              <MenuItem value={"tool"}>По оборудованию</MenuItem>
              <MenuItem value={"tool_type"}>По типу оборудования</MenuItem>
              <MenuItem value={"date"}>По датам</MenuItem>
              <MenuItem value={"lu_name"}>По названию ЛУ</MenuItem>
              <MenuItem value={"manager"}>По сотруднику</MenuItem>
            </Select>
          </FormControl>
          {GetSearchFieldByType(searchType)}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    search: state.search,
    project: state.project
  }
}

function mapDispatchToProps(dispatch) {
  return {
    listProjects: (data) => dispatch(listProjects(data)),
    setSearch: (data) => dispatch(setSearch(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
