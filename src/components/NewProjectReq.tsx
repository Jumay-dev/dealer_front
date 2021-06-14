import React from "react"
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import ModalProjectPresend from '../components/ModalProjectPresend'
import MaskedInput from 'react-text-mask';

const INN_MASK = '999_999_999_999';

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={[/\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/,]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
        marginBottom: theme.spacing(1),
        overflow: "hidden",
        marginTop: 10,
        padding: theme.spacing(3),
        display: "flex",
        alignItems: "center"
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
    tableCellName: {
        fontWeight: "bolder", 
        color: "#96999c", 
        marginRight: 5,
        width: 100
    },
    tableCellValue: {
        fontWeight: "bolder", 
        color: "#666b73"
    },
    gridContainer: {
        maxWidth: "70%"
    }
  }),
);

export default function NewProjectReq(
    {
        allTools, 
        handleNewProject, 
        openPresend, 
        setOpenPresend, 
        showAdditionalReq, 
        setShowAdditionalReq,
        clinicInn, 
        setClinicInn, 
        clinicAddress, 
        setClinicAddress, 
        clinicName, 
        setClinicName, 
        clinicUr, 
        setClinicUr,
        dealerInn, 
        setDealerInn, 
        dealerAddress, 
        setDealerAddress, 
        dealerName, 
        setDealerName, 
        dealerUr, 
        setDealerUr
    }) {
    const classes = useStyles()

    return (
    <div>
    <Typography
        component="h2" 
        variant="h5"
        style={{color: "#688cbc", display: "inline-block", marginTop: 20, marginBottom: 10}}
    >
        Реквизиты клиента
    </Typography>
    <Paper className={classes.paper} key="unikey">
        <Grid container className={classes.gridContainer}>
            <Grid item md={6} sm={12}>
                    <TextField 
                    style={{margin: 5, width: "20vw"}}
                    fullWidth
                    size="small"
                    variant="outlined"
                    label="ИНН клиники (7727063616)"
                    required
                    value={clinicInn}
                    onChange={event => setClinicInn(event.target.value)}
                    InputProps={{inputComponent: TextMaskCustom}}
                    />

            </Grid>
            <Grid item md={6} sm={12}>
                <TextField 
                label="Адрес клиники"
                fullWidth
                size="small"
                variant="outlined"
                value={clinicAddress}
                style={{margin: 5, width: "20vw"}}
                onChange={event => setClinicAddress(event.target.value)}
                />
            </Grid>
            <Grid item md={6} sm={12}>
                <TextField 
                label="Название клиники"
                fullWidth
                size="small"
                variant="outlined"
                style={{margin: 5, width: "20vw"}}
                value={clinicName}
                onChange={event => setClinicName(event.target.value)}
                />
            </Grid>
            <Grid item md={6} sm={12}>
                <TextField 
                label="Наименование юр.лица клиники"
                fullWidth
                size="small"
                variant="outlined"
                style={{margin: 5, width: "20vw"}}
                value={clinicUr}
                onChange={event => setClinicUr(event.target.value)}
                />
            </Grid>
        </Grid>
        <Button style={{height: 40}} variant="outlined" onClick={() => setShowAdditionalReq(!showAdditionalReq)}>Добавить промежуточного дилера</Button>
    </Paper>
    <ModalProjectPresend 
        open={openPresend}
        onClose={() => setOpenPresend(false)} 
        tools={allTools}
        clinicInn={clinicInn}
        clinicAddress={clinicAddress}
        clinicName={clinicName}
        clinicUr={clinicUr}
        handleNewProject={handleNewProject}
        showAdditionalReq={showAdditionalReq}
        dealerInn={dealerInn}
        setDealerInn={setDealerInn}
        dealerAddress={dealerAddress}
        setDealerAddress={setDealerAddress}
        dealerName={dealerName}
        setDealerName={setDealerName}
        dealerUr={dealerUr}
        setDealerUr={setDealerUr}
    />
    </div>
    )
}