import React from "react";
import { useSnackbar } from "notistack";
import { removeSnackbar } from "../actions/snackbar";
import { connect } from 'react-redux'

let displayed = [];

function Notifier(props) {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id) => {
    displayed = [...displayed.filter((key) => id !== key)];
  };

  React.useEffect(() => {
    props.notifications.forEach(
      ({ message, options = {}, dismissed = false }) => {
        const key = options.key
        if (dismissed === true) {
          // dismiss snackbar using notistack
          closeSnackbar(key);
          return;
        }

        // do nothing if snackbar is already displayed
        if (displayed.includes(key)) return;

        // display snackbar using notistack
        enqueueSnackbar(message, {
          key,
          ...options,
          onClose: (event, reason, myKey) => {
            if (options.onClose) {
              options.onClose(event, reason, myKey);
            }
          },
          onExited: (event, myKey) => {
            // remove this snackbar from redux store
            props.removeSnackbar(myKey);
            removeDisplayed(myKey);
          },
        });
        // keep track of snackbars that we've displayed
        storeDisplayed(key);
      }
    );
  }, [props.notifications, enqueueSnackbar]);

  return null;
};

function mapStateToProps(state) {
  return {
    notifications: state.snackbar.notifications
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeSnackbar: (data) => dispatch(removeSnackbar(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifier);
