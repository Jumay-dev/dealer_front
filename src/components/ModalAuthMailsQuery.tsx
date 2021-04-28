import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "../assets/icons/Close circle.svg";
import { Typography } from "@material-ui/core";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';
import DOMPurify from 'dompurify'
import ReactDOMServer from 'react-dom/server'
import { backend } from "../config/server"
import { addMail, clearMails } from '../actions/app'
import { connect } from 'react-redux'
const token = localStorage.getItem("react-crm-token")

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "&.MuiDialog-root": {
        backdropFilter: "blur(5px)",
        background: "rgba(104, 140, 188, 0.4) !important",
      },
    },
    stepperRoot: {
      width: "100%",
    },
    containerRoot: {
      padding: theme.spacing(2),
    },
    tableCellName: {
      fontWeight: "bolder",
      color: "#96999c",
      marginRight: 5,
    },
    tableCellValue: {
      fontWeight: "bolder",
      color: "#666b73",
    },
    headerStyle: {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    deleteButton: {
      marginRight: 10,
      background: theme.palette.error.main,
      color: "white",
      "&:hover": {
        background: theme.palette.error.dark,
      },
    },
    button: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: "inline-block",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    mailWrapper: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  })
);

function ModalAuthMailsQuery(
  { 
    onClose, 
    open,
    toolsForQuery,
    toolsList,
    projectID,
    addMail,
    clearMails
  }) {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState([])
  const [completed, setCompleted] = React.useState<{ [k: number]: boolean }>(
    {}
  );
  let dividedMail = []
  const [editorState, setEditorState] = React.useState(() => EditorState.createEmpty())

  React.useEffect(() => {
    const arSteps = [];
    toolsForQuery.forEach( provider => {
      arSteps.push(provider.name)
    })
    setSteps(arSteps)
  }, [toolsForQuery])

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    addMail(dividedMail[0] + editorState + dividedMail[1])
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
    clearMails();
  };

  function getStepContent(step: number, toolsForQuery, toolsList, projectID, addMail) {
    if (toolsForQuery[step]) {
      return <MailToProviderForm 
      projectID={projectID}
      provid={toolsForQuery[step].id}
      tools={toolsForQuery[step].tools}
      toolsList={toolsList}
      />
    }
    return 'Неизвестный поставщик'
  }
  
  function Tool(localTool, toolsList) {
    const localToolMeta = toolsList.find( item => +item.id === +localTool.tool_id)
  
    return (
        <span style={{ color: "#666b73"}}>{localToolMeta.tool_name}</span>
    )
  }
  
  function MailToProviderForm({tools, toolsList, provid, projectID}) 
  {
    const [mailTemplateFromBackend, setMailTemplateFromBackend] = React.useState('')
    const [dictionary, setDictionary] = React.useState({});
    React.useEffect(() => {
      const data = new FormData
      data.append('provider_id', provid)
      data.append('project_id', projectID)
      fetch(`${backend}/api/provider/template`, {
        method: "POST",
        headers: {
          "Authorization": token
        },
        body: data
      })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          setMailTemplateFromBackend(res.template.body)
          setDictionary(res.dictionary)
        }
      })
      
    }, [])
    
  
    let placeholder = new Map()
    const toolsLi = tools.map( tool => <li>{Tool(tool, toolsList)}</li>)
    placeholder.set("#tools#", ReactDOMServer.renderToString(toolsLi))
  
    for(let key in dictionary) {
      console.log(key)
      placeholder.set(key, dictionary[key])
    }
  
    let mailTemplate = mailTemplateFromBackend
    placeholder.forEach((value, key) => {
      mailTemplate = mailTemplate.replace(key, value)
    })
  
    let dividedMailLocal = mailTemplate.split('#editor#')
    dividedMail = dividedMailLocal
    
    return (
      <div>
        <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(dividedMailLocal[0])}}></div>
        <Editor placeholder="Дополнительная информация..." editorState={editorState} onChange={setEditorState} />
        <div className="content" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(dividedMailLocal[1])}}></div>
      </div>
    )
  }

  function sendMailsToBackend() {}

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      className={classes.root}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle
        id="simple-dialog-title"
        className={classes.headerStyle}
        disableTypography
      >
        <Typography variant="h5">Запросы к поставщикам</Typography>

        <IconButton onClick={() => onClose()} style={{ marginRight: "-16px" }}>
          <img src={CloseIcon} />
        </IconButton>
      </DialogTitle>
      <div className={classes.containerRoot}>
        <div className={classes.stepperRoot}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepButton
                  onClick={handleStep(index)}
                  completed={completed[index]}
                >
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
          <div>
            {allStepsCompleted() ? (
              <div>
                <Typography className={classes.instructions}>
                  Все шаги пройдены. Письма будут отправлены следующим поставщикам:
                  <ul>
                    <li>Линс</li>
                    <li>Махаон</li>
                    <li>Поставщик3</li>
                  </ul>
                  Нажмите "Отправить", если уверены, что все верно.
                </Typography>
                <Button onClick={handleReset} variant="contained">Отмена</Button>
                <Button color="primary" variant="contained" onClick={sendMailsToBackend}>Отправить</Button>
              </div>
            ) : (
              <div className={classes.mailWrapper}>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep, toolsForQuery, toolsList, projectID, addMail)}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Назад
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    Далее
                  </Button>
                  {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography
                        variant="caption"
                        className={classes.completed}
                      >
                        Шаг {activeStep + 1} уже выполнен
                      </Typography>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleComplete}
                      >
                        {completedSteps() === totalSteps() - 1
                          ? "Завершено"
                          : "Подтвердить шаг"}
                      </Button>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Dialog>
  );
}

function setStateToProps(state) {
  return {

  }
}

function setDispatchToProps(dispatch) {
  return {
    addMail: (data) => dispatch(addMail(data)),
    clearMails: () => dispatch(clearMails())
  }
}
export default connect(setStateToProps, setDispatchToProps)(ModalAuthMailsQuery)
