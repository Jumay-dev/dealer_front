import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { routes } from "./routes";
import { ConnectedRouter } from "connected-react-router";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import configureStore, { history } from "./store";
import { SnackbarProvider } from "notistack";

const store = configureStore();
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "rgb(104, 140, 188)",
      dark: "rgb(104, 140, 188)",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#e3ecf7",
      dark: "rgb(104, 140, 188)",
      contrastText: "#000",
    },
    error: {
      light: "#d67474",
      main: "#bc6868",
      dark: "#945151",
      contrastText: "#000",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            {routes}
          </SnackbarProvider>
        </ThemeProvider>
      </Router>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
