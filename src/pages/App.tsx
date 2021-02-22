import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import CompanyProfile from "../pages/CompanyProfile"
import ProjectsList from "../pages/ProjectsList"
import Coworkers from '../pages/Coworkers'
import Project from '../pages/Project'
import NewOffer from '../pages/NewOffer'
import UserPage from '../pages/User'
import mainLayout from "../layouts/mainLayout"

import { connect } from "react-redux";
import { User } from "../types";
import { thunkAuth } from "../services/thunks";
import { 
  SIGN_IN, 
  SIGN_OUT,
  LIST_PROJECTS
 } from "../store/types";
import { thunkData } from "../services/thunks";

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// const isAuthetificated = true

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: 'rgb(104, 140, 188)',
      dark: 'rgb(104, 140, 188)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#e3ecf7',
      dark: 'rgb(104, 140, 188)',
      contrastText: '#000',
    },
    error: {
      light: '#d67474',
      main: "#bc6868",
      dark: '#945151',
      contrastText: '#000',
    }
  },
  typography: {

  },
  props: {
    MuiButton: {
      
    },
    
  }
});

function App(props) {
  const { isAuthenticated, signInUser } = props

  let signInAction = {
      type: SIGN_IN,
      endpoint: "login/",
      data: {},
  };

  function userLoginAction(login, password) {
      signInAction.data = {login, password}
      props.signInUser(signInAction)
  }

  React.useEffect( () => {
    let projectListAction = {
      type: LIST_PROJECTS,
      endpoint: "projects/",
      data: {},
    };
    props.getProjects(projectListAction)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        {isAuthenticated && (
          <div>
            <RouteWrapper exact path="/" component={Main} layout={mainLayout}/>
            <RouteWrapper exact path="/company" component={CompanyProfile} layout={mainLayout} />
            <RouteWrapper exact path="/projects" component={ProjectsList} layout={mainLayout} />
            <RouteWrapper exact path="/newproject" component={Project} layout={mainLayout} />
            <RouteWrapper exact path="/coworkers" component={Coworkers} layout={mainLayout} />
            <RouteWrapper exact path="/user" component={UserPage} layout={mainLayout} />
            <RouteWrapper exact path="/newoffer" component={NewOffer} layout={mainLayout} />
          </div>
        )}

        {!isAuthenticated && (
          <Login userLoginAction={userLoginAction} />
        )}
      </Switch>
    </ThemeProvider>
  )
}

function RouteWrapper({
  component: Component, 
  layout: Layout, 
  ...rest
}) {
  return (
    <Route {...rest} render={(props) =>
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    } />
  );
}

function mapStateToProps(state) {
  const { auth } = state
  const { isAuthenticated } = auth

  return {
    isAuthenticated
  }
}

function mapDispatchToProps(dispatch) {
    return {
      signInUser: (action: TODO) => dispatch(thunkAuth(action)),
      signOutUser: (action: TODO) => dispatch(thunkAuth(action)),
      getProjects: (action: TODO) => dispatch(thunkData(action)),
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)

