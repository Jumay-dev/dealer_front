import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Accordion from '@material-ui/core/Accordion'
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'

import CommercialOfferList from "./ModalCommercialOffer"

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
    },

    gridInfo: {
        background: "gray"
    },

    gridTools: {
        
    },

    gridButtons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "gray"
    }
  }),
);

function ClinicOne() {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item xs={12} lg={3} className={classes.gridInfo}>
                    <Typography variant="subtitle1" paragraph>
                        ProMED
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        г. Москва, ул.Пушкина, д.1, к.1
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        ИНН: 123456789000
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Юр. лицо: ООО “Промед”
                    </Typography>
                </Grid>

                <Grid item xs={12} lg={6} className={classes.gridTools}>
                    <Typography variant="subtitle1" paragraph>
                        Проекты учреждения
                    </Typography>
                    
                    <Typography variant="subtitle1" paragraph>
                        Проект №239475874576 от 10.01.2021
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Проект №239475874576 от 10.01.2021
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Проект №239475874576 от 10.01.2021
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Проект №239475874576 от 10.01.2021 (завершено 30.02.2021)
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Проект №239475874576 от 10.01.2021 (завершено 30.02.2021)
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Проект №239475874576 от 10.01.2021 (завершено 30.02.2021)
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
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