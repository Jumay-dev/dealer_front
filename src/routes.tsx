import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Clinics from "./pages/Clinics";
import CommercialOffer from "./pages/CommercialOffer"
import CompanyProfile from "./pages/CompanyProfile"
import ProjectsList from "./pages/ProjectsList"
import Coworkers from './pages/Coworkers'
import Project from './pages/Project'

import mainLayout from "./layouts/mainLayout"
import emptyLayout from "./layouts/emptyLayout"

export const routes = (
    <Switch>
      <RouteWrapper exact path="/" component={Main} layout={mainLayout}/>
      <RouteWrapper exact path="/login" component={Login} layout={emptyLayout} />
      <RouteWrapper exact path="/clinics" component={Clinics} layout={mainLayout} />
      <RouteWrapper exact path="/offer" component={CommercialOffer} layout={mainLayout} />
      <RouteWrapper exact path="/company" component={CompanyProfile} layout={mainLayout} />
      <RouteWrapper exact path="/projects" component={ProjectsList} layout={mainLayout} />
      <RouteWrapper exact path="/newproject" component={Project} layout={mainLayout} />
      <RouteWrapper exact path="/coworkers" component={Coworkers} layout={mainLayout} />
    </Switch>
);

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