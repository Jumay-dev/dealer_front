import React from 'react'
import ProjectOne from "../components/ProjectOne"
import Typography from '@material-ui/core/Typography'
import Search from '../components/Search'

import { thunkAuth, thunkProjects } from "../services/thunks";
import { connect } from "react-redux";
import { LIST_PROJECTS } from "../store/types";

function ProjectsList({ getProjects, projectsList }) {
  let projectListAction = {
    type: LIST_PROJECTS,
    endpoint: "projects/",
    data: {},
  };

  React.useEffect( () => {
    getProjects(projectListAction)
    console.log('pr', projectsList)
  }, [])

  return (
      <>
          <Typography component="h1" variant="h4">
              Список проектов
          </Typography>
          <Search />
          {projectsList.map(item => <ProjectOne item={item} />)}
      </>
  )
}

function mapStateToProps(state) {
  return {
    projectsList: state.project.projectsList
  }
}
  
  function mapDispatchToProps(dispatch) {
    return {
       getProjects: (action: TODO) => dispatch(thunkProjects(action)),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList)