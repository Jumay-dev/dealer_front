import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login";
import CompanyProfile from "../pages/CompanyProfile";
import ProjectsList from "../pages/ProjectsList";
import Coworkers from "../pages/Coworkers";
import Project from "../pages/Project";
import NewOffer from "../pages/NewOffer";
import UserPage from "../pages/User";
import mainLayout from "../layouts/mainLayout";
import AppIsLoading from "../pages/AppIsLoading";
import Registratum from "../pages/Registratum";
import { connect } from "react-redux";
import { thunkAuth } from "../services/thunks";
import { SIGN_IN, AUTH_CHECK, LIST_CATEGORIES, LIST_TOOLS } from "../store/types";
import { thunkData } from "../services/thunks";
import Notifier from "../components/Notifer"
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import {
    enqueueSnackbar as enqueueSnackbarAction,
    closeSnackbar as closeSnackbarAction,
} from '../actions/snackbar';
import { v4 as uuidv4 } from 'uuid';

function App(props) {
  const { token, isAuthenticated, notificationsQueue, enqueueSnackbar, closeSnackbar } = props

  React.useEffect(() => {
    const myKey = uuidv4()
    enqueueSnackbar({
      message: 'Соединение установлено',
      key: uuidv4(),
      options: {
          key: uuidv4(),
          variant: 'warning',
          action: key => (
            <Button onClick={() => closeSnackbar(myKey)}>Закрыть</Button>
          ),
      },
    });
  }, [])

  let signInAction = {
    type: SIGN_IN,
    endpoint: "login/",
    data: {},
  };

  function userLoginAction(login, password) {
    signInAction.data = { login, password };
    props.signInUser(signInAction);
  }

  React.useEffect(() => {
    document.title = "DS.Med - система авторизации оборудования";

    let categoriesListAction = {
      type: LIST_CATEGORIES,
      endpoint: "categories/",
      data: {},
    };
    props.getTools(categoriesListAction);

    let checkAuthAction = {
      type: AUTH_CHECK,
      endpoint: "categories/",
      data: {},
    };
    props.authCheck(checkAuthAction);
  }, []);

  const isRegistrator = true;
  const isAdmin = true;

  return (
    <Switch>
      
      {isAuthenticated && (
        <div>
          <Notifier />
          <RouteWrapper exact path="/" component={Main} layout={mainLayout} />
          <RouteWrapper
            exact
            path="/company"
            component={CompanyProfile}
            layout={mainLayout}
          />
          <RouteWrapper
            exact
            path="/projects"
            component={ProjectsList}
            layout={mainLayout}
          />
          <RouteWrapper
            exact
            path="/newproject"
            component={Project}
            layout={mainLayout}
          />
          <RouteWrapper
            exact
            path="/coworkers"
            component={Coworkers}
            layout={mainLayout}
          />
          <RouteWrapper
            exact
            path="/user"
            component={UserPage}
            layout={mainLayout}
          />
          <RouteWrapper
            exact
            path="/newoffer"
            component={NewOffer}
            layout={mainLayout}
          />
          {isRegistrator && (
            <RouteWrapper
              exact
              path="/registratum"
              component={Registratum}
              layout={mainLayout}
            />
          )}
        </div>
      )}

      {!isAuthenticated && !token ? (
        <Login userLoginAction={userLoginAction} />
      ) : (
        <AppIsLoading />
      )}
    </Switch>
  );
}

function RouteWrapper({ component: Component, layout: Layout, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

function mapStateToProps(state) {
  const { auth, app } = state;
  const { isAuthenticated, token } = auth;

  return {
    isAuthenticated,
    token,
    notificationsQueue: app.notificationsQueue,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signInUser: (action: TODO) => dispatch(thunkAuth(action)),
    signOutUser: (action: TODO) => dispatch(thunkAuth(action)),
    getProjects: (action: TODO) => dispatch(thunkData(action)),
    getTools: (action: TODO) => dispatch(thunkData(action)),
    authCheck: (action: TODO) => dispatch(thunkAuth(action)),
    enqueueSnackbar: (data) => dispatch(enqueueSnackbarAction(data)),
    closeSnackbar: (data) => dispatch(closeSnackbarAction(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
