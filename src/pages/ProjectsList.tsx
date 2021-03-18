import React from 'react'
import ProjectOneByCard from "../components/ProjectOneByCard"
import Search from '../components/Search'
import CircularProgress from '@material-ui/core/CircularProgress';
import TablePagination from '@material-ui/core/TablePagination';
import ModalCommercialOffer from "../components/ModalCommercialOffer"
import { connect } from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { setSuccess, unsetSuccess } from '../actions/app';
import { LIST_PROJECTS } from '../store/types'
import { thunkData } from '../services/thunks'



function ProjectsList({ projectsList, app, unsetSuccess, getProjects, project }) {
  const [page, setPage] = React.useState(1)
  const [modalOpen, setModalOpen] = React.useState(false)

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

  const classes = useStyles()
  
  function modalOpenHandler(item) {
    setModalOpen(true)
  }

  function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  React.useEffect(() => {
    let projectListAction = {
      type: LIST_PROJECTS,
      endpoint: "projects/",
      data: {},
    };
    getProjects(projectListAction)
  }, [])

  return (
      <div className={classes.wrapper}>
        <div className={classes.subheaderWrapper}>
          <Search />
        </div>
        <div className={classes.content}>
          {project.isFetching ? <CircularProgress color="primary"/> : null}
          {projectsList.length && !project.isFetching ? projectsList.map(item => 
          <ProjectOneByCard 
            item={item} 
            key={item.id}
            modalOpenHandler={modalOpenHandler}
          />) : <span>Пока проектов нет</span>}
        </div>
        {!app.isFetching ? <TablePagination
          component="div"
          count={100}
          page={page}
          onChangePage={(e, page) => setPage(page)}
          rowsPerPage={10}
          onChangeRowsPerPage={(e) => console.log(e)}
        /> : null}
        <ModalCommercialOffer 
          open={modalOpen}
          user={{}}
          onClose={() => setModalOpen(false)}
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
    unsetSuccess,
    getProjects: (action: TODO) => dispatch(thunkData(action))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList)