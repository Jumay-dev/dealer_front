import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import CircularProgress from '@material-ui/core/CircularProgress'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { red } from '@material-ui/core/colors'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import InfoIcon from '../assets/icons/Info circle.svg'
import ChatIcon from '../assets/icons/Chat left.svg'
import DownloadIcon from '../assets/icons/Download.svg'
import ToolsRegistratum from './ToolsRegistratum'
import {
  getProjectComments
} from '../controllers/ProjectCardController'
import moment from 'moment'
import 'moment/locale/ru';
import ModalProjectComment from '../components/ModalProjectComment'
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux'
import { backend } from '../config/server'
import {
  enqueueSnackbar as enqueueSnackbarAction,
  closeSnackbar as closeSnackbarAction,
} from '../actions/snackbar';
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '100%',
      marginBottom: 20,
    },
    media: {
      height: 0,
      //   paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
)

function ProjectCardForAuth({
  item,
  toolsList,
  modalOpenHandler,
  modalOpen,
  commentHistoryHandler,
  enqueueSnackbar,
  closeSnackbar
}) {
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)
  const [tools, setTools] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [checkedTools, setCheckedTools] = React.useState([])
  const [openCommentHistory, setOpenCommentHistory] = React.useState(false)
  const [comments, setComments] = React.useState([])
  
  const handleExpandClick = () => {
    if (!expanded) {
      loadTools(item.id, setLoading, setTools)
    }
    setExpanded(!expanded)
  }

  function loadTools(id, setLoading, setTools) {
    const token = localStorage.getItem('react-crm-token')
    setLoading(true)
    let data = new FormData()
    data.append('id', item.id)
    fetch(`${backend}/api/project/tools`, {
      method: 'POST',
      headers: {
        Authorization: token,
      },
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        setTools(res)
        setLoading(false)
      })
  }

  React.useEffect(() => {
    if (!modalOpen && expanded) {
      loadTools(item.id, setLoading, setTools)
      setCheckedTools([])
    }
  }, [modalOpen])

  const autoPadding = 4

  let expiringData =
    '' +
    new Date(+item.expires_at)
      .toISOString()
      .replace(/^([^T]+)T(.+)$/, '$1')
      .replace(/^(\d+)-(\d+)-(\d+)$/, '$3.$2.$1')
  let LPU = item.clinics.find((item) => item.is_subdealer === '0')
  let subDealer = item.clinics.find((item) => item.is_subdealer === '1')
  moment.locale("ru")

  function openHistoryModal() {
    getProjectComments(item).then(res => {
      if (!res.success) {
        const myKey = uuidv4()
        enqueueSnackbar({
          message: 'Ошибка загрузки истории комментариев',
          key: uuidv4(),
          options: {
              key: myKey,
              variant: 'error',
              action: key => (
                  <Button onClick={() => closeSnackbar(myKey)}>Закрыть</Button>
              ),
          },
        });
      } else {
        setComments(res.comments)
        setOpenCommentHistory(true)
      }
    })
  }

  return (
    <Card className={classes.root}>
      <CardContent style={{ paddingBottom: 8 }}>
        <Table size="small">
          <TableBody>
            <TableRow style={{ background: '#e1edff' }}>
              <TableCell
                style={{
                  background: '#688cbc',
                  paddingTop: autoPadding,
                  paddingBottom: autoPadding,
                }}
                align="center"
              >
                <Typography
                  variant="subtitle2"
                  style={{ color: 'white', fontWeight: 'bold' }}
                >
                  # ND{item.id}
                </Typography>
              </TableCell>
              <TableCell
                style={{
                  paddingTop: autoPadding,
                  paddingBottom: autoPadding,
                  maxWidth: '5vw',
                }}
              >
                <span
                  style={{
                    fontWeight: 'bolder',
                    color: '#96999c',
                    marginRight: 5,
                  }}
                >
                  ЛПУ(юр.лицо):
                </span>
                <span style={{ fontWeight: 'bolder', color: '#666b73' }}>
                  {LPU ? LPU.name : 'Не указано'} (
                  {LPU ? LPU.urname : 'Не указано'})
                </span>
              </TableCell>
              <TableCell
                style={{ paddingTop: autoPadding, paddingBottom: autoPadding }}
              >
                <span
                  style={{
                    fontWeight: 'bolder',
                    color: '#96999c',
                    marginRight: 5,
                  }}
                >
                  Актуален до:
                </span>
                <span style={{ fontWeight: 'bolder', color: '#666b73' }}>
                {moment(expiringData).format("LLL")}
                </span>
              </TableCell>
              <TableCell
                style={{ paddingTop: autoPadding, paddingBottom: autoPadding }}
              >
                <span
                  style={{
                    fontWeight: "bolder",
                    color: "#96999c",
                    marginRight: 5,
                  }}
                >
                  Ответственный:
                </span>
                <span style={{ fontWeight: "bolder", color: "#666b73" }}>
                  {item.responsible
                    ? `${item.responsible.name} ${item.responsible.surname}`
                    : "Не указан"}
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell
                style={{ paddingTop: autoPadding, paddingBottom: autoPadding }}
              >
                <span
                  style={{
                    fontWeight: 'bolder',
                    color: '#96999c',
                    marginRight: 5,
                  }}
                >
                  Адрес клиента:
                </span>
                <span style={{ fontWeight: 'bolder', color: '#666b73' }}>
                  {item.clinics[0].address ? item.clinics[0].address : ''}
                </span>
              </TableCell>
              <TableCell
                style={{ paddingTop: autoPadding, paddingBottom: autoPadding }}
              >
                <span
                  style={{
                    fontWeight: 'bolder',
                    color: '#96999c',
                    marginRight: 5,
                  }}
                >
                  Добавлен:
                </span>
                <span style={{ fontWeight: 'bolder', color: '#666b73' }}>
                  {moment(item.created_at).format("LLL")}
                </span>
              </TableCell>
              <TableCell
                style={{ paddingTop: autoPadding, paddingBottom: autoPadding }}
              >
                <span
                  style={{
                    fontWeight: 'bolder',
                    color: '#96999c',
                    marginRight: 5,
                  }}
                >
                  Куратор:
                </span>
                <span style={{ fontWeight: 'bolder', color: '#666b73' }}>
                  {item.manager}
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
      <CardActions
        disableSpacing
        style={{ display: 'flex', justifyContent: 'flex-end', padding: 0 }}
      >
        <IconButton aria-label="add to favorites">
          <img src={DownloadIcon} />
        </IconButton>
        <Tooltip title={item.last_comment ? item.last_comment.comment : "У проекта нет комментариев"}>
          <IconButton aria-label="delete" onClick={openHistoryModal}>
            <img src={ChatIcon} />
          </IconButton>
        </Tooltip>
        <IconButton aria-label="share">
          <img src={InfoIcon} />
        </IconButton>

        <Button
          onClick={handleExpandClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxSizing: 'border-box',
            alignSelf: 'flex-end',
            boxShadow: 'none',
            color: 'white',
            background: '#688cbc',
            borderRadius: '4px 0px 0px 0px',
          }}
          variant="contained"
        >
          <span>Показать оборудование</span>
          <div
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            style={{ margin: 0, padding: 0 }}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon style={{ margin: 0, padding: 0 }} />
          </div>
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{ padding: 0, background: 'rgba(104, 140, 188, 0.06)' }}
        >
          <div style={{ borderTop: '2px solid #688cbc', padding: '16px' }}>
            {!loading ? (
              <ToolsRegistratum
                checkedTools={checkedTools}
                setCheckedTools={setCheckedTools}
                tools={tools}
                toolsMeta={toolsList}
                commentHistoryHandler={commentHistoryHandler}
              />
            ) : null}

            {loading ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <CircularProgress />
              </div>
            ) : null}

            <div style={{display: "flex", justifyContent: "flex-end", marginTop: "1em"}}>
              <Button 
              color="primary" 
              variant="contained" 
              onClick={() => modalOpenHandler(checkedTools)}
              >
                Изменить статус
              </Button>
            </div>
          </div>
        </CardContent>
      </Collapse>
      <ModalProjectComment 
        onClose={() => setOpenCommentHistory(false)}
        open={openCommentHistory}
        comments={comments}
        project={item}
        enqueueSnackbar={enqueueSnackbar}
        closeSnackbar={closeSnackbar}
      />
    </Card>
  )
}

function mapStateToProps(state) {
  return {
    toolsList: state.tool.toolsList,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    enqueueSnackbar: (data) => dispatch(enqueueSnackbarAction(data)),
    closeSnackbar: (data) => dispatch(closeSnackbarAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCardForAuth)
