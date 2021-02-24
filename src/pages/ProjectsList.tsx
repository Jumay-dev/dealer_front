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
      padding: "16px"
    }
  }),
);

function ProjectsList({ projectsList, app, unsetSuccess }) {
  const [page, setPage] = React.useState(1)
  const [modalOpen, setModalOpen] = React.useState(false)

  const classes = useStyles()
  
  function modalOpenHandler(item) {
    setModalOpen(true)
  }

  function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  return (
      <div>
        <div className={classes.subheaderWrapper}>
          <Search />
        </div>
        <div className={classes.content}>
          {projectsList.length !== 0 ? projectsList.map(item => 
          <ProjectOneByCard 
            item={item} 
            key={item.id}
            modalOpenHandler={modalOpenHandler}
          />) : <CircularProgress color="secondary"/>}
        </div>
        <TablePagination
          component="div"
          count={100}
          page={page}
          onChangePage={(e, page) => setPage(page)}
          rowsPerPage={10}
          onChangeRowsPerPage={(e) => console.log(e)}
        />
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
    app: state.app
  }
}

const mapDispatchToProps = {
  unsetSuccess
}
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList)