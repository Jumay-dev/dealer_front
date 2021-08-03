import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '../assets/icons/Close circle.svg'
import { Typography } from '@material-ui/core';
import furuno  from '../assets/logos/furuno.png'
import listem  from '../assets/logos/listem.png'
import dssurg from '../assets/logos/logo_ds-surg.png'
import dsvision from '../assets/logos/logo_ds-vision.png'
import mahe from '../assets/logos/mahe.png'
import maico  from '../assets/logos/maico.png'
import medstar from '../assets/logos/medstar.png'
import norland from '../assets/logos/norland.png'
import votem from '../assets/logos/votem.png'
import { connect } from 'react-redux'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        "&.MuiDialog-root": {
            backdropFilter: "blur(5px)",
            background: "rgba(104, 140, 188, 0.4) !important"
        },
        overflow: "hidden"
    },
    containerRoot: {
      padding: theme.spacing(3),
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
    headerStyle: {
        background: theme.palette.secondary.main,
        color: theme.palette.primary.main,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    buttonGreen: {
        border: "1px solid green",
        minWidth: 250,
        color: "green",
        "&:hover": {
            color: "green",
            border: "1px solid green"
        }
    },
  }),
);

function ProjectPresend(
    {
        onClose, 
        open, 
        tools,
        clinicInn, 
        clinicAddress, 
        clinicName, 
        clinicUr,
        handleNewProject,
        showAdditionalReq,
        dealerInn, 
        setDealerInn, 
        dealerAddress, 
        setDealerAddress, 
        dealerName, 
        setDealerName, 
        dealerUr, 
        setDealerUr,
        checkedTools
    }) {
    const classes = useStyles();

    function getCheckedTools(tools) {
        return tools.filter( tool => tool.isChecked === true)
    }

    function getLogoByProducerName(producer) {
        let img = ''
        switch (producer) {
            case 'ds.surg': img = dssurg; break
            case 'ds.vision': img = dsvision; break
            case 'votem': img = votem; break
            case 'listem': img = listem; break
            case 'medstar': img = medstar; break
            case 'maico': img = maico; break
            case 'mahe': img = mahe; break
            case 'furuno': img = furuno; break
            case 'norland': img = norland; break
            default: img = ''
        }
        return img
    }

    function logoOrNot(producer) {
        if (getLogoByProducerName(producer)) {
            return (<span style={{marginLeft: 10}}><img width="70" src={getLogoByProducerName(producer)} /></span>)
        }
        return null
    }
    
    function ToolsProducers(tools) {
        const producers = ['ds.surg', 'ds.vision', 'votem', 'listem', 'medstar', 'maico', 'mahe', 'furuno', 'norland']
        const toolsProductor = []
        tools.forEach(tool => {
            producers.forEach(producer => {
                console.log(producer, tool.tool_name.toLowerCase())
                if (tool.tool_name.toLowerCase().indexOf(producer) >= 0) {
                    console.log('aha', producer)
                    toolsProductor.push(producer)
                }
            })
        })
       
        for (var i = toolsProductor.length - 1; i >= 0; i--) {
            if (toolsProductor.indexOf(toolsProductor[i]) != i)
              toolsProductor.splice(i, 1);
          }
        return (
            <div style={{display: "flex", alignItems: "center"}}>
                {toolsProductor.map( prod => logoOrNot(prod))}
            </div>
        )
    }

    return (
        <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" open={open} className={classes.root} fullWidth maxWidth="lg">
            <DialogTitle id="simple-dialog-title" className={classes.headerStyle} disableTypography>
                <Typography variant="h5">
                    Предварительный просмотр проекта
                </Typography>

                <Button 
                    type="button" 
                    variant="outlined" 
                    className={classes.buttonGreen} 
                    onClick={() => handleNewProject(
                        {
                            clinicName, 
                            clinicUr, 
                            clinicAddress, 
                            clinicInn
                        },
                        {
                            dealerInn,
                            dealerAddress,
                            dealerName,
                            dealerUr
                        },
                        showAdditionalReq
                        )}>
                    Подтвердить и отправить
                </Button>
                
                <IconButton onClick={() => onClose()} style={{marginRight: "-16px"}}>
                    <img src={CloseIcon} />
                </IconButton>
            </DialogTitle>
            <div className={classes.containerRoot}>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <Typography variant="h5" style={{marginTop: 15, marginBottom: 10, color: "rgb(104, 140, 188)"}}>
                            Реквизиты клиента
                            </Typography>
                            <Typography>
                                <span className={classes.tableCellName}>ИНН клиники:</span>
                                <span className={classes.tableCellValue}>{clinicInn}</span>
                            </Typography>
                            <Typography>
                                <span className={classes.tableCellName}>Название клиники:</span>
                                <span className={classes.tableCellValue}>{clinicName}</span>
                            </Typography>
                            <Typography>
                                <span className={classes.tableCellName}>Адрес клиники:</span>
                                <span className={classes.tableCellValue}>{clinicAddress}</span>
                            </Typography>
                            <Typography>
                                <span className={classes.tableCellName}>Юр.лицо клиники:</span>
                                <span className={classes.tableCellValue}>{clinicUr}</span>
                            </Typography>
                        </div>


                        {showAdditionalReq ? (
                            <div style={{display: "flex", flexDirection: "column", marginLeft: 20}}>
                            <Typography variant="h5" style={{marginTop: 15, marginBottom: 10, color: "rgb(104, 140, 188)"}}>
                            Реквизиты промежуточного дилера
                            </Typography>
                            <Typography>
                                <span className={classes.tableCellName}>ИНН дилера:</span>
                                <span className={classes.tableCellValue}>{dealerInn}</span>
                            </Typography>
                            <Typography>
                                <span className={classes.tableCellName}>Название дилера:</span>
                                <span className={classes.tableCellValue}>{dealerName}</span>
                            </Typography>
                            <Typography>
                                <span className={classes.tableCellName}>Адрес дилера:</span>
                                <span className={classes.tableCellValue}>{dealerAddress}</span>
                            </Typography>
                            <Typography>
                                <span className={classes.tableCellName}>Юр.лицо дилера:</span>
                                <span className={classes.tableCellValue}>{dealerUr}</span>
                            </Typography>
                            </div>
                        ) : null}
                    </div>


                    <Typography variant="h5" style={{marginTop: 15, marginBottom: 10, color: "rgb(104, 140, 188)"}}>
                       Состав проекта
                    </Typography>
                    {ToolsProducers(getCheckedTools(tools))}
                    
                    <Grid container>
                        {checkedTools.map(tool => (
                            <Grid className={classes.tableCellValue} md={6}  sm={12} style={{marginBottom: 5}}>
                                {tool.tool_name}
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </Dialog>
    );
}

const setStateToProps = (state) => {
    return {
        checkedTools: state.tool.checkedTools
    }
}

export default connect(setStateToProps, null)(ProjectPresend)