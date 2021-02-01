import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import Clinics from "../pages/Clinics";
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
import { SIGN_IN, SIGN_OUT } from "../store/types";

// const isAuthetificated = true

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

  return (
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
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)

