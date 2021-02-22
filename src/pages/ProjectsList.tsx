import React from 'react'
import ProjectOneByCard from "../components/ProjectOneByCard"
import Search from '../components/Search'
import CircularProgress from '@material-ui/core/CircularProgress';
import TablePagination from '@material-ui/core/TablePagination';
import ModalCommercialOffer from "../components/ModalCommercialOffer"
import { connect } from "react-redux";
import { LIST_PROJECTS } from "../store/types";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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

function ProjectsList({ projectsList }) {
  const [page, setPage] = React.useState(1)
  const [modalOpen, setModalOpen] = React.useState(false)

  const classes = useStyles()
  
  function modalOpenHandler(item) {
    setModalOpen(true)
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
      </div>
  )
}

function mapStateToProps(state) {
  return {
    projectsList: state.project.projectsList,
  }
}

export default connect(mapStateToProps, null)(ProjectsList)