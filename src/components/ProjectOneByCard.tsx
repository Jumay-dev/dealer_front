import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CircularProgress from '@material-ui/core/CircularProgress';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InfoIcon from "../assets/icons/Info circle.svg"
import ChatIcon from "../assets/icons/Chat left.svg"
import DownloadIcon from "../assets/icons/Download.svg"
import SortedToolsTable from './SortedToolsTable'

import { thunkData } from "../services/thunks";
import { connect } from "react-redux";
import { backend } from "../config/server"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "100%",
      marginBottom: 20
    },
    media: {
      height: 0,
    //   paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

function ProjectOneByCard(
    { 
        item, 
        toolsList,
        modalOpenHandler
    }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [tools, setTools] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [sortedObj, setSortedObj] = React.useState({})

  const handleExpandClick = () => {
    const token = localStorage.getItem("react-crm-token")
    if (!expanded) {
        let data = new FormData
        data.append('id', item.id)
        fetch(`${backend}/api/project/tools`, {
            method: "POST",
            headers: {
                "Authorization": token
            },
            body: data
        })
        .then(res => res.json())
        .then(res => {
            setTools(res)
            setLoading(false)
        })
    }
        setExpanded(!expanded);
    };

    React.useEffect(() => {
        setSortedObj(sortToolsByStatus(tools))
    }, [tools])

    function sortToolsByStatus(unsortedTools) {
        const resultObj = {}
        if (unsortedTools.length !== 0) {
            unsortedTools.forEach( tool => {
                if (!Array.isArray(resultObj[tool.status_id])) resultObj[tool.status_id] = []
                resultObj[tool.status_id].push(toolsList.find( item => +item.id === +tool.tool_id))
            })
            let maxLength = 0
            for (let statusKey in resultObj) {
                if (resultObj[statusKey].length > maxLength) {
                    maxLength = resultObj[statusKey].length
                }
            }
            resultObj['max'] = maxLength
            return resultObj
        }
    }

    function getStylesByProjectStatus(item) {
      switch (item.status) {
            case "1": return {
                labelColor: "#9cd69b",
                statusText: "Авторизовано"
            }
            case "2": return {
                labelColor: "#e8df6b",
                statusText: "Авторизовано частично"
            }
            case "3": return {
                labelColor: "#efb6b6",
                statusText: "Не авторизовано"
            }
            case "4": return {
                labelColor: "#688cbc",
                statusText: "На авторизации"
            }
            case "5": return {
                labelColor: "#688cbc",
                statusText: "Запрос актуальности"
            }
            case "6": return {
                labelColor: "#688cbc",
                statusText: "Завершено"
            }
            default: return {
                labelColor: "black",
                statusText: "Ошибка определения статуса"
            }
      }
    }

  const projectStatusStyles = getStylesByProjectStatus(item)
  const autoPadding = 4
  
  let expiringData = "" + new Date(+item.expires_at).toISOString().replace(/^([^T]+)T(.+)$/,'$1').replace(/^(\d+)-(\d+)-(\d+)$/,'$3.$2.$1')
  let LPU = item.clinics.find( item => item.is_subdealer === "0")
  let subDealer = item.clinics.find( item => item.is_subdealer === "1")

  return (
    <Card className={classes.root}>
      <CardContent style={{paddingBottom: 8}}>
        <Table
            size="small"
        >
            <TableBody>
                <TableRow style={{background: "#e1edff"}}>
                    <TableCell style={{background: "#688cbc", paddingTop: autoPadding, paddingBottom: autoPadding}} align="center">
                        <Typography variant="subtitle2" style={{color: "white", fontWeight: "bold"}}>
                            #  ND{item.id}
                        </Typography>
                    </TableCell>
                    <TableCell style={{paddingTop: autoPadding, paddingBottom: autoPadding, maxWidth: "5vw"}}>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>ЛПУ(юр.лицо):</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>{LPU ? LPU.name : "Не указано"} ({LPU ? LPU.urname : "Не указано"})</span>
                    </TableCell>
                    <TableCell style={{paddingTop: autoPadding, paddingBottom: autoPadding}}>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Актуален до:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>{expiringData}</span>
                    </TableCell>
                    <TableCell style={{paddingTop: autoPadding, paddingBottom: autoPadding}}>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Статус:</span>
                        <span style={{fontWeight: "bolder", background: projectStatusStyles.labelColor, color: "white", borderRadius: "2px", padding: 2}}>{projectStatusStyles.statusText}</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell style={{paddingTop: autoPadding, paddingBottom: autoPadding}}>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Адрес клиента:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>г. Москва, Ленинградское ш., д.25</span>
                    </TableCell>
                    <TableCell style={{paddingTop: autoPadding, paddingBottom: autoPadding}}>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Добавлен:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>{item.created_at}</span>
                    </TableCell>
                    <TableCell style={{paddingTop: autoPadding, paddingBottom: autoPadding}}>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Куратор:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>{item.manager}</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell style={{paddingTop: autoPadding, paddingBottom: autoPadding}}>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Ответственный:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>{item.responsible ? `${item.responsible.name} ${item.responsible.surname}` : "Не указан"}</span>
                    </TableCell>

                </TableRow>
            </TableBody>
        </Table>
      </CardContent>
      <CardActions disableSpacing style={{display: "flex", justifyContent: "flex-end", padding: 0}}>
        <IconButton aria-label="add to favorites">
            <img src={DownloadIcon} />
        </IconButton>
        <IconButton aria-label="share">
        <img src={ChatIcon} />
        </IconButton>
        <IconButton aria-label="share">
            <img src={InfoIcon} />
        </IconButton>
        
        <Button onClick={() => modalOpenHandler()} color="primary" variant="outlined" style={{marginRight: 10}}>
            Коммерческие предложения
        </Button>

        <Button 
        onClick={handleExpandClick} 
        style={{
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            boxSizing: "border-box", 
            alignSelf: "flex-end",
            boxShadow: "none",
            color: "white",
            background: "#688cbc",
            borderRadius: "4px 0px 0px 0px"
            }} 
            variant="contained"
        >
            <span>Показать оборудование</span>
            <div
            className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
            })}
            style={{margin: 0, padding: 0}}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon style={{margin: 0, padding: 0}}/>
            </div>
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style={{ padding: 0, background: "rgba(104, 140, 188, 0.06)"}}>
            <div style={{ borderTop: "2px solid #688cbc",  padding: "16px"}}>
                {!loading ?
                <SortedToolsTable sortedObj={sortedObj}/>
                : null}
                {loading ? 
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <CircularProgress />
                </div> : null}
            </div>
        </CardContent>
      </Collapse>
    </Card>
  );
}

function mapStateToProps(state) {
    return {
      toolsList: state.tool.toolsList,
    }
  }
    
function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectOneByCard)