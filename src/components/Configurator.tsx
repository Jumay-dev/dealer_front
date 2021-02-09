import React from 'react'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        width: "60%",
        marginRight: 10,
        padding: 10
    },
    root: {
        minWidth: 275,
        background: '#D4E4F2',
        margin: 5
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
        overflow: "hidden"
    }
  }),
);

function Configurator() {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" component="h2">Конфигуратор</Typography>
            <AuthDirections />
        </Paper>
    )
}

function AuthDirections() {
    const classes = useStyles();
    return (
        <div className={classes.directionsContainer}>
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
        <Card className={classes.root}>
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