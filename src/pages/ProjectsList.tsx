import React from 'react'
import ProjectOne from "../components/ProjectOne"
import ProjectOneByCard from "../components/ProjectOneByCard"
import Typography from '@material-ui/core/Typography'
import Search from '../components/Search'
import Pagination from '@material-ui/lab/Pagination';
import CircularProgress from '@material-ui/core/CircularProgress';
import TablePagination from '@material-ui/core/TablePagination';

import { thunkData } from "../services/thunks";
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
      justifyContent: "space-between"
    }
  }),
);

function ProjectsList({ getProjects, projectsList }) {
  const [page, setPage] = React.useState(1)

  const classes = useStyles()
  
  let projectListAction = {
    type: LIST_PROJECTS,
    endpoint: "projects/",
    data: {},
  };

  React.useEffect( () => {
    getProjects(projectListAction)
  }, [])

  return (
      <>
          <Typography component="h1" variant="h4">
              Список проектов
          </Typography>
          <div className={classes.subheaderWrapper}>
            <Search />
            {/* <Pagination style={{alignSelf: "right"}} className={classes.pagination} variant="outlined" count={10} size="large" page={page} onChange={(e, page) => setPage(page)}/> */}
            <TablePagination
              component="div"
              count={100}
              page={page}
              onChangePage={(e, page) => setPage(page)}
              rowsPerPage={10}
              onChangeRowsPerPage={(e) => console.log(e)}
            />
          </div>

          <ProjectOneByCard />
          <ProjectOneByCard />
          <ProjectOneByCard />
          <ProjectOneByCard />

          {projectsList.length !== 0 ? projectsList.map(item => <ProjectOne item={item} key={item.id}/>) : <CircularProgress color="secondary"/>}
          <Pagination variant="outlined" count={10} className={classes.pagination} size="large" page={page} onChange={(e, page) => setPage(page)}/>
      </>
  )
}

function mapStateToProps(state) {
  return {
    projectsList: state.project.projectsList,
  }
}
  
function mapDispatchToProps(dispatch) {
  return {
      getProjects: (action: TODO) => dispatch(thunkData(action)),
  };
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList)