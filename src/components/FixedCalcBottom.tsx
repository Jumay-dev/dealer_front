import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
        background: "#968C83"
    },
    wrapper: {
        display: "fixed"
    }
  }),
);

function FixedCalcBottom({ positionsCount, positionsPrice, addedTools }) {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
        <Paper className={classes.paper}>
            <TextField id="code" label="Код дилера" />
            <p>Всего позиций: {positionsCount}</p>
            <p>Итого: {positionsPrice} ₽</p>
            <ModalCommercialOfferPresend addedTools={addedTools}/>
        </Paper>
        </div>
    )
}

export default FixedCalcBottom