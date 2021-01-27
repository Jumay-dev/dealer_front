import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Accordion from '@material-ui/core/Accordion'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        overflow: "hidden"
    },

    gridInfo: {
        background: "gray",
        padding: "10px !important",
    },

    gridTools: {
        padding: "10px !important",
    },

    gridButtons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "gray",
        padding: "10px !important",
    }
  }),
);

function ClinicOne() {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item xs={12} lg={3} className={classes.gridInfo}>
                    <Typography variant="subtitle1">
                        ProMED
                    </Typography>
                    <Typography variant="subtitle1">
                        г. Москва, ул.Пушкина, д.1, к.1
                    </Typography>
                    <Typography variant="subtitle1">
                        ИНН: 123456789000
                    </Typography>
                    <Typography variant="subtitle1">
                        Юр. лицо: ООО “Промед”
                    </Typography>
                </Grid>

                <Grid item xs={12} lg={6} className={classes.gridTools}>
                    <Typography variant="subtitle1">
                        Проекты учреждения
                    </Typography>
                    
                    <Typography variant="subtitle1">
                        Проект №239475874576 от 10.01.2021
                    </Typography>
                    <Typography variant="subtitle1">
                        Проект №239475874576 от 10.01.2021
                    </Typography>
                    <Typography variant="subtitle1">
                        Проект №239475874576 от 10.01.2021
                    </Typography>
                    <Typography variant="subtitle1">
                        Проект №239475874576 от 10.01.2021 (завершено 30.02.2021)
                    </Typography>
                    <Typography variant="subtitle1">
                        Проект №239475874576 от 10.01.2021 (завершено 30.02.2021)
                    </Typography>
                    <Typography variant="subtitle1">
                        Проект №239475874576 от 10.01.2021 (завершено 30.02.2021)
                    </Typography>
                    <Typography variant="subtitle1">
                        Проект №239475874576 от 10.01.2021 (завершено 30.02.2021)
                    </Typography>

                </Grid>

                <Grid item xs={12} lg={3} className={classes.gridButtons}>
                    <Button variant="contained" color="primary">
                        Удалить
                    </Button>

                    <Button variant="contained" color="primary">
                        Забронированное оборудование
                    </Button>

                    <Button variant="contained" color="primary">
                        Изменить
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default ClinicOne