import React from 'react'
import ProjectOne from "../components/ProjectOne"
import Typography from '@material-ui/core/Typography'
import Search from '../components/Search'
import { thunkAuth } from "../services/thunks";
import { connect } from "react-redux";

function ProjectsList() {
    return (
        <>
            <Typography component="h1" variant="h4">
                Список проектов
            </Typography>
            
            <Search />

            <ProjectOne />
            <ProjectOne />
            <ProjectOne />
            <ProjectOne />
        </>
    )
}

function mapStateToProps(state) {
    const { auth } = state
    const { isAuthenticated, user } = auth
  
    return {
      isAuthenticated,
      user
    }
  }
  
  function mapDispatchToProps(dispatch) {
    return {
       getProjects: (action: TODO) => dispatch(thunkAuth(action)),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList)