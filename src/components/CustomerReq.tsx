import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function CustomerReq() {
    return (
        <React.Fragment>
            <Typography component="h1" variant="h4" align="center">
                Реквизиты клиента
            </Typography>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                <TextField
                    required
                    id="clinicName"
                    name="clinicName"
                    label="Название клиники"
                    fullWidth
                    autoComplete="given-name"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    required
                    id="inn"
                    name="inn"
                    label="ИНН"
                    fullWidth
                    autoComplete="shipping address-line1"
                />
                </Grid>
                <Grid item xs={12}>
                <TextField
                    id="urname"
                    name="urname"
                    label="Наименование юр.лица клиники"
                    fullWidth
                    autoComplete="shipping address-line2"
                />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="country"
                    name="country"
                    label="Страна"
                    fullWidth
                    autoComplete="shipping country"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField 
                    id="state" 
                    name="state" 
                    label="Регион" 
                    fullWidth 
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="city"
                    name="city"
                    label="Город"
                    fullWidth
                    autoComplete="shipping address-level2"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Улица"
                    fullWidth
                    autoComplete="shipping postal-code"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Дом"
                    fullWidth
                    autoComplete="shipping postal-code"
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Офис/Помещение"
                    fullWidth
                    autoComplete="shipping postal-code"
                />
                </Grid>

                <Grid item xs={12}>
                <FormControlLabel
                    control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                    label="Государственная клиника"
                />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default CustomerReq