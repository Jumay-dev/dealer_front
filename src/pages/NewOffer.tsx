import React from 'react'
import ToolsOffersSidebar from '../components/ToolsOffersSidebar'
import Configurator from '../components/Configurator'
import ComOffer from '../components/ComOffer'
import Grid from "@material-ui/core/Grid"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        padding: theme.spacing(2)
    },
  }),
);

function NewOffer() {
    const classes = useStyles()
    // TestData
    const [authorised, setAuthorised] = React.useState([
        {
            id: 0,
            parent: null,
            name: 'Рентгеновский аппарат Listem REX-650RF: FLUOROSCOPY',
            image: 'https://ds-med.ru/wp-content/uploads/2019/05/850-650-RF222-2.png',
            wiki: 'https://ds-med.ru/product/listem-rex-650rf-fluoroscopy/',
            dealerPrice: 300000,
            dealerDiscount: 30,
            clientPrice: 300000,
            count: 1
        },
        {
            id: 1,
            parent: null,
            category: 1,
            name: 'Центральная станция мониторинга Votem VC-2000',
            image: 'https://ds-med.ru/wp-content/uploads/2020/04/650-R-DRS.png',
            wiki: 'https://ds-med.ru/product/listem-progen-650r-drs/',
            dealerPrice: 300000,
            dealerDiscount: 30,
            clientPrice: 300000,
            count: 1
        },
        {
            id: 2,
            parent: 0,
            category: 1,
            name: 'Кресло врача',
            image: 'https://ds-med.ru/wp-content/uploads/2020/04/650-R-DRS.png',
            wiki: 'https://ds-med.ru/product/listem-progen-650r-drs/',
            dealerPrice: 300000,
            dealerDiscount: 30,
            clientPrice: 300000,
            count: 1
        },
        {
            id: 3,
            parent: 0,
            category: 1,
            name: 'Рабочее место врача',
            image: 'https://ds-med.ru/wp-content/uploads/2020/04/650-R-DRS.png',
            wiki: 'https://ds-med.ru/product/listem-progen-650r-drs/',
            dealerPrice: 300000,
            dealerDiscount: 30,
            clientPrice: 300000,
            count: 1
        },
    ])

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} md={7}>
                    <Configurator />
                </Grid>
                <Grid item xs={12} md={5}>
                    <ComOffer authorised={authorised}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default NewOffer