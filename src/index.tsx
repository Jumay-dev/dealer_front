import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import configureStore from "./store";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const store = configureStore();



ReactDOM.render(
  <Provider store={store}>
      <Router>{routes}</Router>
  </Provider>,
  document.getElementById('root')
);
