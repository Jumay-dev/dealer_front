import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

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

function FixedCalcBottom({ positionsCount, positionsPrice }) {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
        <Paper className={classes.paper}>
            <TextField id="code" label="Код дилера" />
            <p>Всего позиций: {positionsCount}</p>
            <p>Итого: {positionsPrice} ₽</p>
            <Button variant="contained" color="primary">
                Сформировать КП
            </Button>
        </Paper>
        </div>
    )
}

export default FixedCalcBottom