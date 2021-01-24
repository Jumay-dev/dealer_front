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

function Subposition({child}) {
    const classes = useStyles();
    return (
        <Paper className={classes.secondaryPosition}>
            <img className={classes.image} src={child.image ? child.image : null} alt="..."/>
            <Typography variant="subtitle2" paragraph>
                {child.name ? child.name : null}
            </Typography>
            <Button 
                variant="contained" 
                color="primary"
            >Добавить в КП</Button>
        </Paper>
    )
}

function AuthorisedPosition({ position }) {
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
                    <img className={classes.image} src={position.image ? position.image : null} alt="..."/>
                    <div className={classes.text}>
                        <Typography variant="subtitle2" paragraph>
                        {position.name}
                        </Typography>
                        <a href={position.wiki}>Подробнее</a>
                    </div>
                    <Button 
                        variant="contained" 
                        color="primary"
                    >Добавить в КП</Button>
                </AccordionSummary>
                <AccordionDetails className={classes.content}>
                    {position.children ? position.children.map( child => <Subposition child={child}/>) : <p>У этой позиции нет дополнительного оборудования</p>}
                </AccordionDetails>
            </Accordion>
            </ListItem>
        </React.Fragment>
    )
}

export default AuthorisedPosition