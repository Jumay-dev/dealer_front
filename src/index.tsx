import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { routes } from './routes';
import { ConnectedRouter } from 'connected-react-router'
import configureStore, {history} from "./store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>{routes}</Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
