import React from 'react'
import ProjectCardForAuth from "../components/ProjectCardForAuth"
import Search from '../components/Search'
import CircularProgress from '@material-ui/core/CircularProgress';
import TablePagination from '@material-ui/core/TablePagination';
import { connect } from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { setSuccess, unsetSuccess } from '../actions/app';
import { LIST_PROJECTS } from '../store/types'
import { thunkData } from '../services/thunks'
import { updateState } from '../actions/project'
import ModalAuthorisation from '../components/ModalAuthorisation'



function Registratum(
  { 
    projectsList, 
    app, 
    unsetSuccess, 
    getProjects, 
    project, 
    setPage,
    setLimit
   }) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [checkedToolsForModal, setCheckedToolsForModal] = React.useState([])

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pagination: {
      "& .MuiPaginationItem-root": {
        fontWeight: "bolder"
      },
      "& .Mui-selected": {
        background: "#688cbc",
        color: "white"
      },
      "& .MuiPaginationItem-outlined:hover": {
        background: "#e1edff",
        color: "#688cbc"
      },
        
    },
    subheaderWrapper: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      background: "#e3ecf7",
      height: 120,
      padding: 18
    },
    content: {
      padding: "16px",
      display: (project.isFetching || projectsList.length === 0) ? "flex" : "block",
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    },
    wrapper: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }),
  );

  React.useEffect(() => {
    let projectListAction = {
      type: LIST_PROJECTS,
      endpoint: "projects/",
      data: {
        page: project.page,
        limit: project.limit
      },
    };
    getProjects(projectListAction)
  }, [])

  function setPageAndListProjects(page) {
    setPage({ page, isFetching: true, projectsList: [] })
    let projectListAction = {
      type: LIST_PROJECTS,
      endpoint: "projects/",
      data: {
        page,
        limit: project.limit
      },
    };
    getProjects(projectListAction)
  }

  function setLimitAndListProjects(limit) {
    setLimit({ limit, isFetching: true, projectsList: [], page: 1 })
    let projectListAction = {
      type: LIST_PROJECTS,
      endpoint: "projects/",
      data: {
        page: 1,
        limit
      },
    };
    getProjects(projectListAction)
  }

  const classes = useStyles()
  
  function modalOpenHandler(tools) {
    console.log(tools)
    setCheckedToolsForModal(tools)
    setModalOpen(true)
  }

  function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
      <div className={classes.wrapper}>
        <div className={classes.subheaderWrapper}>
          <Search />
        </div>
        <div className={classes.content}>
          {project.isFetching ? <CircularProgress color="primary"/> : null}
          {projectsList.length && !project.isFetching ? projectsList.map(item => 
          <ProjectCardForAuth 
            item={item} 
            key={item.id}
            modalOpenHandler={modalOpenHandler}
            modalOpen={modalOpen}
          />) : !project.isFetching && <span>Пока проектов нет</span>}

        {!project.isFetching ? 
        <TablePagination
          component="div"
          count={+project.total}
          page={project.page - 1}
          onChangePage={(e, page) => setPageAndListProjects(page + 1)}
          rowsPerPage={project.limit}
          onChangeRowsPerPage={(e) => setLimitAndListProjects(e.target.value)}
        />
        : null
        } 
        </div>

        <ModalAuthorisation 
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          tools={checkedToolsForModal}
        />
        <Snackbar open={app.projectSuccesfullyAdded} autoHideDuration={6000} onClose={() => unsetSuccess()}>
          <Alert onClose={() => unsetSuccess()} severity="success">
            Проект успешно добавлен
          </Alert>
        </Snackbar>
      </div>
  )
}

function mapStateToProps(state) {
  return {
    projectsList: state.project.projectsList,
    app: state.app,
    project: state.project
  }
}

function mapDispatchToProps(dispatch) {
  return {
    unsetSuccess: () => dispatch(unsetSuccess()),
    getProjects: (action: TODO) => dispatch(thunkData(action)),
    setPage: (action: TODO) => dispatch(updateState(action)),
    setLimit: (action: TODO) => dispatch(updateState(action))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Registratum)