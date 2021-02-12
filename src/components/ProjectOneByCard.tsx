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
import CommercialOfferList from "./ModalCommercialOffer"
import { red } from '@material-ui/core/colors';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import GetAppIcon from '@material-ui/icons/GetApp';
import ChatIcon from '@material-ui/icons/Chat';
import InfoIcon from '@material-ui/icons/Info';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: "100%",
      marginBottom: 10
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Table
            size="small"
        >
            <TableBody>
                <TableRow style={{background: "#e1edff"}}>
                    <TableCell style={{background: "#688cbc"}} align="center">
                        <Typography variant="subtitle1" style={{color: "white", fontWeight: "bold"}}>
                            # 12312
                        </Typography>
                    </TableCell>
                    <TableCell>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Клиент:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>Аконит-М</span>
                    </TableCell>
                    <TableCell>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Зарегистрирован:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>4.01.2021</span>
                    </TableCell>
                    <TableCell>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Статус:</span>
                        <span style={{fontWeight: "bolder", color: "orange"}}>Авторизовано частично</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Адрес клиента:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>г. Москва, Ленинградское ш., д.25</span>
                    </TableCell>
                    <TableCell>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Продлен до:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>4.01.2021</span>
                    </TableCell>
                    <TableCell>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Менеджер:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>Даэсмедов Михаил Алексеевич</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell> 
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Дилер:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>ООО "ААА"</span>
                    </TableCell>
                    <TableCell>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>В реестре до:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>4.01.2021</span>
                    </TableCell>
                    <TableCell>
                        <span style={{fontWeight: "bolder", color: "#96999c", marginRight: 5}}>Сотрудник дилера:</span>
                        <span style={{fontWeight: "bolder", color: "#666b73"}}>Иванов Иван</span>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </CardContent>
      <CardActions disableSpacing style={{display: "flex", justifyContent: "flex-end", paddingBottom: 0,}}>
        <CommercialOfferList />
        <IconButton aria-label="add to favorites">
            <GetAppIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ChatIcon />
        </IconButton>
        <IconButton aria-label="share">
          <InfoIcon />
        </IconButton>
        
        <Button 
        onClick={handleExpandClick} 
        style={{
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            boxSizing: "border-box", 
            alignSelf: "flex-end",
            boxShadow: "none"
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
        <CardContent style={{padding: "8px", paddingTop: 0}}>
            <div style={{ border: "1px solid #e0e0e0", borderRadius: "4px", background: "#e0e0e0"}}>
            <Table
                size="small"
            >
                <TableBody>
                    <TableRow>
                        <TableCell style={{background: "#dcfcd8"}}>
                            <span style={{fontWeight: "bolder", color: "#666b73"}}>Авторизовано</span>
                        </TableCell>
                        <TableCell style={{background: "#ffe1e1"}}>
                            <span style={{fontWeight: "bolder", color: "#666b73"}}>Не авторизовано</span>
                        </TableCell>
                        <TableCell style={{background: "#fbfcd8"}}>
                            <span style={{fontWeight: "bolder", color: "#666b73"}}>На авторизации</span>
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
