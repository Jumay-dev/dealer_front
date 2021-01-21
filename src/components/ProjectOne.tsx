import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Accordion from '@material-ui/core/Accordion'
import Grid from '@material-ui/core/Grid';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        padding: theme.spacing(2),
    },

    gridInfo: {

    },

    gridTools: {
        
    },

    gridButtons: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }
  }),
);

function ProjectOne() {
    const classes = useStyles()
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1" paragraph>
                        # 0000000000
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Зарегистрирован 4.01.2021
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Дилер: ООО "ААА" 
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Сотрудник: Иванов Иван Иванович 
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Клиент: "Доктор Айболит", г.Москва 
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Актуализирован: 10.01.2021
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        В реестре до 20.02.2021 
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Менеджер: Даэсмедов Михаил Алексеевич 
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Typography variant="subtitle1" paragraph>
                        # 0000000000
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Зарегистрирован 4.01.2021
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Дилер: ООО "ААА" 
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Сотрудник: Иванов Иван Иванович 
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Клиент: "Доктор Айболит", г.Москва 
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Актуализирован: 10.01.2021
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        В реестре до 20.02.2021 
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                        Менеджер: Даэсмедов Михаил Алексеевич 
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={4} className={classes.gridButtons}>

                    <Button variant="contained" color="primary">
                        Сформирвать КП для клиента
                    </Button>
                    <Button variant="contained" color="primary">
                        Скачать КП дилера
                    </Button>
                    <Button variant="contained" color="primary">
                        Подробнее о проекте
                    </Button>
                    <Button variant="contained" color="primary">
                        Чат с менеджером
                    </Button>

                </Grid>
            </Grid>
        </Paper>
    )
}

export default ProjectOne