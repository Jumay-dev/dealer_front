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
        logo: "https://ds-med.ru/wp-content/uploads/2020/03/logoDS-1.png",
        brand: "Medical Solutions",
        name: 'ООО "Медицинские решения"',
        shortname: "",
        lawform: "Общество с ограниченной ответственностью",
        address: "142200, Московская область, г. Серпухов, ш. Борисовское, д. 1,  пом. 7, офис 1",
        postaddress: "142200, Московская область, г. Серпухов, ш. Борисовское, д. 1,  пом. 7, офис 1",
        phone: "+7 499 686 08 80",
        email: "info@ds-med.ru , law@ds-med.ru",
        inn: "ИНН 7724417426 / КПП 504301001",
        ogrn: "ОГРН 1177746863250, ОКАТО 45296571000",
        req: "р/с 40702810740000007467 в ПАО Сбербанк г. Москва, к/с 30101810400000000225, БИК 044525225",
        licenses: "",
        director: "",
        head_company: false
    },
    {
        id: 1,
        logo: "https://ds-med.ru/wp-content/uploads/2020/03/logoDS-1.png",
        brand: "DS.Vision",
        name: 'ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ ДЕМЕНТЬЕВА НАТАЛЬЯ АЛЕКСАНДРОВНА',
        shortname: "",
        lawform: "Индивидуальный предприниматель",
        address: "142207, Московская обл., г. Серпухов, Борисовское шоссе, д. 17, офис 605",
        postaddress: "142207, Московская обл., г. Серпухов, Борисовское шоссе, д. 17, офис 605",
        phone: "+7 (495) 248-12-21",
        email: "info@ds-vision.ru",
        inn: "ИНН 503702925292",
        ogrn: "ОГРНИП 316504300054402, ОКПО 0102029652",
        req: "р/с 40802810520010004182 АО ЮниКредит Банк г. Москва к/с 30101810300000000545 БИК 044525545",
        licenses: "",
        director: "",
        head_company: false
    },
    {
        id: 2,
        logo: "https://ds-med.ru/wp-content/uploads/2020/03/logoDS-1.png",
        brand: "DS.Med",
        name: 'Общество с ограниченной ответственностью  «ДС.Мед»',
        shortname: "ООО «ДС.Мед»",
        lawform: "Индивидуальный предприниматель",
        address: "142207, Московская обл., г. Серпухов, Борисовское шоссе, д. 17, офис 605",
        postaddress: "142207, Московская обл., г. Серпухов, Борисовское шоссе, д. 17, офис 605",
        phone: "+7 (495) 248-12-21",
        email: "e.semochkin@ds-med.ru",
        inn: "ИНН 5043035712 / КПП 504301001",
        ogrn: "ОГРН 1085043003352, ОКАТО 46470000000",
        req: "р/с 40702810040000004924 в ПАО Сбербанк г. Москва, к/с 30101810400000000225, БИК 044525225",
        licenses: "",
        director: "Сёмочкин Евгений Иванович",
        head_company: true
    },
    {
        id: 3,
        logo: "https://ds-med.ru/wp-content/uploads/2020/03/logoDS-1.png",
        brand: "Л-Сервис",
        name: 'Общество с ограниченной ответственностью «Л-Сервис»',
        shortname: "Л-Сервис",
        lawform: "Индивидуальный предприниматель",
        address: "142207, Московская область, г. Серпухов, Борисовское шоссе, д. 17, этаж 6, офис 601",
        postaddress: "142207, Московская область, г. Серпухов, Борисовское шоссе, д. 17, этаж 6, офис 601",
        phone: "+7(499)686-00-30",
        email: "info@L-Service.ru",
        inn: "ИНН 5043048091 / КПП 504301001",
        ogrn: "ОГРН 1085043003352, ОКАТО 46470000000",
        req: "р/с 40702810040000004924 в ПАО Сбербанк г. Москва, к/с 30101810400000000225, БИК 044525225",
        licenses: "№ФС-99-04-004955 от 18.08.2017г. №77.99.15.002.Л.000116.12.16 от 06.12.2016г.",
        director: "Сёмочкин Евгений Иванович",
        head_company: false
    },
]

function CompanyProfile() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [currentCompany, setCurrentCompany] = React.useState({})
    const [headCompany, setHeadCompany] = React.useState(fakeCompanies.find( item => item.head_company === true))

    const newReqHandler = () => {
        setCurrentCompany(
            {
                id: null,
                logo: "",
                brand: "",
                name: '',
                shortname: "",
                lawform: "",
                address: "",
                postaddress: "",
                phone: "",
                email: "",
                inn: "",
                ogrn: "",
                req: "",
                licenses: "",
                director: "",
                head_company: false
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
                    Информация о компании {headCompany.brand}
                </Typography>
            </div>

            <div className={classes.contentWrapper}>
                <Paper className={classes.paper}>
                    <Grid container>
                        <Grid item lg={2} style={{padding: 0, display: "flex", alignItems: "center"}}>
                            <img src="https://ds-med.ru/wp-content/uploads/2020/03/logoDS-1.png" style={{maxWidth: "100%", maxHeight: "200px"}}/>
                        </Grid>
                        <Grid item lg={8} className={classes.gridCell}>
                            <Table size="small">
                                <TableBody>
                                    <TableRow>
                                        <TableCell className={classes.tableCellName}>
                                            Название компании
                                        </TableCell>
                                        <TableCell className={classes.tableCellValue}>
                                            {headCompany.brand}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.tableCellName}>
                                            Администратор
                                        </TableCell>
                                        <TableCell className={classes.tableCellValue}>
                                            {headCompany.director}
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
                                            {headCompany.phone}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className={classes.tableCellName}>
                                            e-mail
                                        </TableCell>
                                        <TableCell className={classes.tableCellValue}>
                                            {headCompany.email}
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
            <ModalCompanyInfo open={open} setOpen={setOpen} company={currentCompany}/>
        </div>
    )
}

export default CompanyProfile