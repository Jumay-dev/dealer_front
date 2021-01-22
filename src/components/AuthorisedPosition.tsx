import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    mainPosition: {
        display: "flex",
    },
    secondaryPosition: {
        display: "flex",
        marginBottom: theme.spacing(1)
    },
    image: {
        height: 100,
        width: 100
    },
    text: {
        display: "flex",
        flexDirection: "column"
    },
    content: {
        display: "flex",
        flexDirection: "column"
    }
  }),
);

function Subposition() {
    const classes = useStyles();
    return (
        <Paper className={classes.secondaryPosition}>
            <img className={classes.image} src="https://ds-med.ru/wp-content/uploads/2019/05/850-650-RF222-2.png" alt="..."/>
            <Typography variant="subtitle2" paragraph>
                Стул пациента
            </Typography>
            <Button 
                variant="contained" 
                color="primary"
            >Добавить в КП</Button>
        </Paper>
    )
}

function AuthorisedPosition() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ListItem>
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.mainPosition}
                >
                    <img className={classes.image} src="https://ds-med.ru/wp-content/uploads/2019/05/850-650-RF222-2.png" alt="..."/>
                    <div className={classes.text}>
                        <Typography variant="subtitle2" paragraph>
                        Рентгеновский аппарат Listem REX-650RF: FLUOROSCOPY
                        </Typography>
                        <Typography variant="subtitle2" paragraph>
                        Подробнее
                        </Typography>
                    </div>
                    <Button 
                        variant="contained" 
                        color="primary"
                    >Добавить в КП</Button>
                </AccordionSummary>
                <AccordionDetails className={classes.content}>
                    <Subposition />
                    <Subposition />
                    <Subposition />
                    <Subposition />
                </AccordionDetails>
            </Accordion>
            </ListItem>
        </React.Fragment>
    )
}

export default AuthorisedPosition