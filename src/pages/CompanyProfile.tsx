import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import CompanyCard from '../components/CompanyCard'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import PlusCircle from '../assets/icons/Plus circle.svg'
import EditCircle from '../assets/icons/Edit 3.svg'
import ModalCompanyInfo from '../components/ModalCompanyInfo'
import IconButton from '@material-ui/core/IconButton';

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
        alignItems: "space-between",
        padding: theme.spacing(3),
        color: "#688cbc",
        minHeight: "120px"
    },
    contentWrapper: {
        padding: theme.spacing(2),
    },
    gridCell: {
        padding: theme.spacing(1)
    },
    tableCellName: {
        fontWeight: "bolder", 
        color: "#96999c", 
        marginRight: 5
    },
    tableCellValue: {
        fontWeight: "bolder", 
        color: "#666b73"
    },
    reqAction: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },
    mainCompanyContainerHeader: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        marginBottom: "1em"
    }
  }),
);

const fakeCompanies = [
    {
        id: 0,
        logo: "https://www.prlog.org/12660964-logo.png",
        name: 'ААА Trade',
        shortname: '',
        inn: '',
        head: '',
        address: ''
    },
    {
        id: 1,
        logo: "https://www.clipartmax.com/png/full/112-1129036_logo-samsung-png-samsung-logo-2016-png.png",
        name: '',
        shortname: '',
        inn: '',
        head: '',
        address: ''
    },
    {
        id: 2,
        logo: "https://industrialcolor.com/wp-content/uploads/2019/06/hewlett-packard-logo-black-and-white.png",
        name: '',
        shortname: '',
        inn: '',
        head: '',
        address: ''
    },
    {
        id: 3,
        logo: "https://www.kindpng.com/picc/m/268-2687090_ps-logo-of-games-ps4-logo-png-transparent.png",
        name: '',
        shortname: '',
        inn: '',
        head: '',
        address: ''
    },
]

function CompanyProfile() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [currentCompany, setCurrentCompany] = React.useState({})

    const newReqHandler = () => {
        setCurrentCompany(
            {
                id: 0,
                logo: "",
                name: '',
                shortname: '',
                inn: '',
                head: '',
                address: ''
            },
        )
        setOpen(true)
    }

    const mainReqHandler = () => {
        setCurrentCompany(
            {
                id: 0,
                logo: "",
                name: '',
                shortname: '',
                inn: '',
                head: '',
                address: ''
            },
        )
        setOpen(true)
    }
    return (
        <div>
            <div className={classes.headerWrapper}>
                <Typography component="h1" variant="h4">
                    Информация о компании ААА
                </Typography>
            </div>

            <div className={classes.contentWrapper}>
                <Paper className={classes.paper}>
                    <Grid container>
                        <Grid item lg={2} className={classes.gridCell} style={{padding: 0}}>
                            <img src="https://www.prlog.org/12660964-logo.png" style={{maxWidth: "100%", maxHeight: "300px"}}/>
                        </Grid>
                        <Grid item lg={4} className={classes.gridCell}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className={classes.tableCellName}>
                                            Юр.лицо
                                        </TableCell>
                                        <TableCell className={classes.tableCellValue}>
                                            ООО "ААА"
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.tableCellName}>
                                            Директор
                                        </TableCell>
                                        <TableCell className={classes.tableCellValue}>
                                            Иванов Иван Иванович
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.tableCellName}>
                                            Зарегистрирована
                                        </TableCell>
                                        <TableCell className={classes.tableCellValue}>
                                            21.10.2019
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.tableCellName}>
                                            Телефон
                                        </TableCell>
                                        <TableCell className={classes.tableCellValue}>
                                            +7 (800) 555-35-35
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.tableCellName}>
                                            e-mail
                                        </TableCell>
                                        <TableCell className={classes.tableCellValue}>
                                            head@aaa.ru
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>

                    <div className={classes.reqAction}>
                        <Button 
                            variant="outlined" 
                            color="primary" 
                            onClick={mainReqHandler}
                            style={{marginRight: 10}}
                        ><img src={EditCircle} style={{marginRight: 10}}/>Редактировать компанию</Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            onClick={newReqHandler}
                        ><img src={PlusCircle} style={{marginRight: 10}}/>Добавить реквизиты</Button>
                    </div>
                </Paper>
            </div>
            <div className={classes.contentWrapper}>
                <Typography
                    component="h2" 
                    variant="h5"
                    style={{color: "#688cbc", display: "inline-block", marginTop: 20, marginBottom: 10}}
                >
                    Реквизиты компании
                </Typography>
                {fakeCompanies.map(company =>
                    <CompanyCard 
                        company={company} 
                        open={open} 
                        setOpen={setOpen} 
                        setCurrentCompany={setCurrentCompany}
                />)}
            </div>
            <ModalCompanyInfo open={open} setOpen={setOpen} currentCompany={currentCompany}/>
        </div>
    )
}

export default CompanyProfile