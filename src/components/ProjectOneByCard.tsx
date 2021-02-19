import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
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

import { thunkData } from "../services/thunks";
import { connect } from "react-redux";
import { LIST_TOOLS } from "../store/types";

import { tools } from '../middleware/infods5i_dealers'

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

function ProjectOneByCard({ item, toolsList, getTools, setModalOpen }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  function getStylesByProjectStatus(item) {
      console.log(item)
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
            default: return {
                labelColor: "black",
                statusText: "Ошибка определения статуса"
            }
      }
  }

  const projectStatusStyles = getStylesByProjectStatus(item)

  const autoPadding = 4

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
                            # {item.id}
                        </Typography>
                    </TableCell>
                    <TableCell style={{paddingTop: autoPadding, paddingBottom: autoPadding}}>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Конечный клиент:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>{item.client}</span>
                    </TableCell>
                    <TableCell style={{paddingTop: autoPadding, paddingBottom: autoPadding}}>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Актуален до:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>{item.actualised}</span>
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
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Зарегистрирован:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>{item.added}</span>
                    </TableCell>
                    <TableCell style={{paddingTop: autoPadding, paddingBottom: autoPadding}}>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Куратор:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>{item.manager}</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell style={{paddingTop: autoPadding, paddingBottom: autoPadding}}>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Сотрудник дилера:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>{item.employee}</span>
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
        
        <Button onClick={() => setModalOpen(item)} color="primary" variant="outlined" style={{marginRight: 10}}>
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
                <Table
                    size="small"
                >
                    <TableBody>
                        <TableRow style={{background: "#e6e6e6"}}>
                            <TableCell>
                                <span style={{color: "#666b73", fontWeight: "bolder"}}>Авторизовано</span>
                            </TableCell>
                            <TableCell>
                                <span style={{color: "#666b73", fontWeight: "bolder"}}>Не авторизовано</span>
                            </TableCell>
                            <TableCell>
                                <span style={{color: "#666b73", fontWeight: "bolder"}}>На авторизации</span>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <span style={{color: "#666b73"}}>ЛОР-комбайн Medstar UE-3000 базовая версия</span>
                            </TableCell>
                            <TableCell>
                                <span style={{color: "#666b73"}}>Dr.Camscope DCS-103E - универсальная эндоскопическая система</span>
                            </TableCell>
                            <TableCell>
                                <span style={{color: "#666b73"}}>ЛОР-комбайн Medstar UE-3000 базовая версия</span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{color: "#666b73"}}>Dr. Camscope DCS-102 - видеокольпоскоп</span>
                            </TableCell>
                            <TableCell>
                                <span style={{color: "#666b73"}}>Dr. Camscope DCS-103R - видеоректоскоп</span>
                            </TableCell>
                            <TableCell>
                                <span style={{color: "#666b73"}}>Dr.Camscope DCS-103E - универсальная эндоскопическая система</span>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{color: "#666b73"}}>Dr. Camscope DCS-105 - видеодерматоскоп</span>
                            </TableCell>
                            <TableCell>
                                <span style={{color: "#666b73"}}>Dr.Camscope DCS-103E - универсальная эндоскопическая система</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
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
        getTools: (action: TODO) => {dispatch(thunkData(action))},
        // getTools: (action: TODO) => dispatch(action)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectOneByCard)