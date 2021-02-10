import React from 'react'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';

import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      width: "60%",
      marginRight: 10,
      padding: 10,
      flexDirection: "column",
    },
    directionStyle: {
      minWidth: 275,
      background: '#D4E4F2',
      margin: 5
    },
    toolStyle: {
      minWidth: 275,
      background: '#DAEAD9',
      margin: 5,
      height: "100%"
    },
    selectedToolStyle: {
      background: "#D8CEDF",
    },
    addingStyle: {
      minWidth: 275,
      background: "#F2CEAA",
      margin: 5,
      height: "100%"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    directionsContainer: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    },
    toolsContainerHeader: {
      background: "#F2EDF1"
    },
    toolsContainer: {
      background: "#F2EDF1",
      display: "flex",
      flexDirection: "column"
    },
    addingsContainerHeader: {
      background: "#D8CEDF"
    },
    addingsContainer: {
      background: "#D8CEDF",
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    selectedMedia: {
      height: 300,
      paddingTop: '56.25%', // 16:9
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

function Configurator() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" component="h2">Конфигуратор</Typography>
            <AuthTools />
            <AuthDirections />
        </Paper>
    )
}


function AuthTools() {
    const classes = useStyles();
    return (
      <Accordion>
          <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.toolsContainerHeader}
          >
              <Typography>Мониторы пациента</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.toolsContainer}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <ToolCard
                    toolName={'Центральная станция мониторинга Votem VC-2000'}
                    selected={true}
                    img="https://ds-med.ru/wp-content/uploads/2020/04/votem_station.jpg"
                    description="VC-2000 позволяет вести наблюдение за жизненно важными функциями пациента в режиме реального времени, отображая числовые данные и графики волн, передаваемые от мониторов серии VP."
                    />
                </Grid>
                <Grid item xs={4}>
                    <ToolCard
                    toolName={'Многофункциональный монитор пациента Votem VP-1200'}
                    selected={false}
                    img="https://ds-med.ru/wp-content/uploads/2019/05/votem_1200.jpg"
                    description="Монитор пациента VP-1200 компании VOTEM (Южная Корея) — модель с расширенными функциональными возможностями. Диагональ экрана составляет 12,1 дюйма. Опционально доступны функции мультигаз, оценки глубины наркоза и капнометрии EtCO2. Низкая стоимость комплектующих делает VP-1200 экономически выгодным решением при регулярном проведении оценки глубины анестезии."
                    />
                </Grid>
                <Grid item xs={4}>
                    <ToolCard
                    toolName={'Многофункциональный монитор пациента Votem VP-1000'}
                    selected={false}
                    img="https://ds-med.ru/wp-content/uploads/2019/05/VP-1000-3.jpg"
                    description="Монитор пациента VP-1000 - продвинутая модель в линейке мониторов VOTEM (Южная Корея). Имеет диагональ 10,4 дюйма. Опционально доступны функции капнометрии EtCO2 и сердечного выброса. Широкий функционал и оптимальная цена делает VP-1000 популярным выбором среди отделений реанимации и интенсивной терапии. Мониторы пациента VotemМониторы пациента Votem"
                    />
                </Grid>
                <Grid item xs={4}>
                    <ToolCard
                    toolName={'Многофункциональный монитор пациента Votem VP-1000'}
                    selected={false}
                    img="https://ds-med.ru/wp-content/uploads/2019/05/VP-1000-3.jpg"
                    description="Монитор пациента VP-1000 - продвинутая модель в линейке мониторов VOTEM (Южная Корея). Имеет диагональ 10,4 дюйма. Опционально доступны функции капнометрии EtCO2 и сердечного выброса. Широкий функционал и оптимальная цена делает VP-1000 популярным выбором среди отделений реанимации и интенсивной терапии. Мониторы пациента VotemМониторы пациента Votem"
                    />
                </Grid>
                <Grid item xs={4}>
                    <ToolCard
                    toolName={'Многофункциональный монитор пациента Votem VP-1000'}
                    selected={false}
                    img="https://ds-med.ru/wp-content/uploads/2019/05/VP-1000-3.jpg"
                    description="Монитор пациента VP-1000 - продвинутая модель в линейке мониторов VOTEM (Южная Корея). Имеет диагональ 10,4 дюйма. Опционально доступны функции капнометрии EtCO2 и сердечного выброса. Широкий функционал и оптимальная цена делает VP-1000 популярным выбором среди отделений реанимации и интенсивной терапии. Мониторы пациента VotemМониторы пациента Votem"
                    />
                </Grid>
            </Grid>
          </AccordionDetails>
      </Accordion>
    )
}

function AddingCard({toolName, img, description}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.addingStyle}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={toolName}
        subheader="+ 1000 $"
      />
      <CardMedia
        className={classes.media}
        image={img}
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <Button variant="contained" color="secondary">В доп.</Button>
        <Button variant="contained" color="secondary" style={{marginLeft: 10}}>В рекомендованное</Button>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Характеристики</Typography>
          <Typography paragraph>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

function ToolCard({toolName, img, description, selected}) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
      <Card className={selected ? classes.selectedToolStyle : classes.toolStyle}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={toolName}
          subheader="10 000 $"
        />
        <CardMedia
          className={classes.media}
          image={img}
          title="Paella dish"
        />
        <CardActions disableSpacing>
          {selected ? <Button variant="contained" color="secondary">Удалить</Button> : <Button variant="contained" color="secondary">Выбрать</Button>}
          {selected ? (
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="0"
                    style={{
                      marginLeft: 10
                    }}
                    >
                      <MenuItem value={0}>Комплектация 1</MenuItem>
                      <MenuItem value={1}>Комплектация 2</MenuItem>
                      <MenuItem value={2}>Комплектация 3</MenuItem>
                    </Select>
          ) : null}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {selected ? <Typography variant="h6" component="h2">Дополнительное оборудование</Typography> : <Typography variant="h6" component="h2">Характеристики</Typography>}
            <Typography paragraph>
              {selected ? (
                <>
                  <Typography variant="h6" component="h2">Манжеты</Typography>
                  <Grid container spacing={2}>
                      <Grid item xs={6}>
                          <AddingCard
                          toolName={'Манжета для НИАД (манжета взрослая, одноразовая (25-17))'}
                          img="https://ds-med.ru/wp-content/uploads/2020/04/votem_station.jpg"
                          description="VC-2000 позволяет вести наблюдение за жизненно важными функциями пациента в режиме реального времени, отображая числовые данные и графики волн, передаваемые от мониторов серии VP."
                          />
                      </Grid>
                      <Grid item xs={6}>
                          <AddingCard
                          toolName={'Манжета для НИАД (манжета детская, одноразовая (22-15))'}
                          img="https://ds-med.ru/wp-content/uploads/2020/04/votem_station.jpg"
                          description="VC-2000 позволяет вести наблюдение за жизненно важными функциями пациента в режиме реального времени, отображая числовые данные и графики волн, передаваемые от мониторов серии VP."
                          />
                      </Grid>
                      <Grid item xs={6}>
                          <AddingCard
                          toolName={'Манжета для НИАД (манжета неонатальная, одноразовая (15-8,9))'}
                          img="https://ds-med.ru/wp-content/uploads/2020/04/votem_station.jpg"
                          description="VC-2000 позволяет вести наблюдение за жизненно важными функциями пациента в режиме реального времени, отображая числовые данные и графики волн, передаваемые от мониторов серии VP."
                          />
                      </Grid>
                  </Grid>

                  <Typography variant="h6" component="h2">Датчики</Typography>
                  <Grid container spacing={2}>
                      <Grid item xs={6}>
                          <AddingCard
                          toolName={'Датчик пульсоксиметрии напалечный (SpO2: (кабель + датчик на палец) для взрослых)'}
                          img="https://ds-med.ru/wp-content/uploads/2020/04/votem_station.jpg"
                          description="VC-2000 позволяет вести наблюдение за жизненно важными функциями пациента в режиме реального времени, отображая числовые данные и графики волн, передаваемые от мониторов серии VP."
                          />
                      </Grid>
                      <Grid item xs={6}>
                          <AddingCard
                          toolName={'Датчик пульсоксиметрии напалечный (SpO2: (кабель + датчик на палец) для детей)'}
                          img="https://ds-med.ru/wp-content/uploads/2020/04/votem_station.jpg"
                          description="VC-2000 позволяет вести наблюдение за жизненно важными функциями пациента в режиме реального времени, отображая числовые данные и графики волн, передаваемые от мониторов серии VP."
                          />
                      </Grid>
                      <Grid item xs={6}>
                          <AddingCard
                          toolName={'Датчик пульсоксиметрии SpO2: (кабель + датчик ректальный)'}
                          img="https://ds-med.ru/wp-content/uploads/2020/04/votem_station.jpg"
                          description="VC-2000 позволяет вести наблюдение за жизненно важными функциями пациента в режиме реального времени, отображая числовые данные и графики волн, передаваемые от мониторов серии VP."
                          />
                      </Grid>
                      <Grid item xs={6}>
                          <AddingCard
                          toolName={'Датчик пульсоксиметрии SpO2: (кабель + датчик на ухо) '}
                          img="https://ds-med.ru/wp-content/uploads/2020/04/votem_station.jpg"
                          description="VC-2000 позволяет вести наблюдение за жизненно важными функциями пациента в режиме реального времени, отображая числовые данные и графики волн, передаваемые от мониторов серии VP."
                          />
                      </Grid>
                  </Grid>
                </>
              ): description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
}

function AuthDirections() {
    const classes = useStyles();
    return (
        <div className={classes.directionsContainer}>
          <Typography variant="h6" component="h2">Выберите авторизованное направление</Typography>
          <Grid container spacing={2}>
              <Grid item xs={6}>
                  <DirectionCard directionName={'Мониторы пациента'}/>
              </Grid>
              <Grid item xs={6}>
                  <DirectionCard directionName={'Рентгены'}/>
              </Grid>
              <Grid item xs={6}>
                  <DirectionCard directionName={'Маммографы'}/>
              </Grid>
              <Grid item xs={6}>
                  <DirectionCard directionName={'Денситометры'}/>
              </Grid>
          </Grid>
        </div>
    )
}

function DirectionCard({directionName}) {
    const classes = useStyles();
    return (
        <Card className={classes.directionStyle}>
          <CardContent> 
            <Typography variant="h5" component="h2">
              {directionName}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Выбрать</Button>
          </CardActions>
      </Card>
    )
}

export default Configurator