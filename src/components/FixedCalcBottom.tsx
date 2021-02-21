import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ModalCommercialOfferPresend from './ModalCommercialOfferPresend'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: '1em',
        background: "rgb(225, 237, 255)"
    },
    wrapper: {
        display: "fixed"
    },
    term: {
        fontWeight: "bolder", 
        color: "#96999c", 
        marginRight: 5
    },
    value: {
        fontWeight: "bolder", 
        color: "#666b73"
    }
  }),
);

function FixedCalcBottom({ positionsCount, positionsPrice, addedTools }) {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
        <Paper className={classes.paper}>
            <TextField id="code" label="Код дилера" variant="outlined" size="small"/>
            <span className={classes.term}>Всего позиций:</span> <span className={classes.value}>{positionsCount}</span>
            <span className={classes.term}>Итого:</span> <span className={classes.value}>{positionsPrice} ₽</span>
            <ModalCommercialOfferPresend addedTools={addedTools}/>
        </Paper>
        </div>
    )
}

export default FixedCalcBottom