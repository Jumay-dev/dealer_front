import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CompanyCard from '../components/CompanyCard'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        overflow: "hidden",
        marginTop: 10,
        padding: theme.spacing(3),
    },
    headerWrapper: {
        width: "100%",
        background: '#e3ecf7',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: theme.spacing(3),
        color: "#688cbc",
        minHeight: "120px"
    },
    contentWrapper: {
        padding: theme.spacing(2),
    },
  }),
);

function CompanyProfile() {
    const classes = useStyles()
    return (
        <div>
            <div className={classes.headerWrapper}>
                <Typography component="h1" variant="h4">
                    Реквизиты организации
                </Typography>
            </div>
            <div className={classes.contentWrapper}>
                <Paper className={classes.paper}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} lg={12}>
                            <p>Компания ААА</p>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                            <p>Телефон: 88005553535</p>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <p>e-mail: 88005553535</p>
                        </Grid>

                        <Grid item xs={12} lg={12}>
                            <p>Реквизиты</p>
                        </Grid>

                        <Grid item xs={12} lg={12} spacing={1}>
                            <CompanyCard />
                            <CompanyCard />
                            <CompanyCard />
                            <CompanyCard />
                        </Grid>
                    </Grid>
                </Paper>
            </div>

        </div>
    )
}

export default CompanyProfile