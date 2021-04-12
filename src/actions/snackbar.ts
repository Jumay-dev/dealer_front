import {
  ENQUEUE_SNACKBAR,
  CLOSE_SNACKBAR,
  REMOVE_SNACKBAR,
} from "../store/types";
import { v4 as uuidv4 } from 'uuid';

export const enqueueSnackbar = (notification) => {
  return {
    type: ENQUEUE_SNACKBAR,
    notification
  };
};

export const closeSnackbar = (key) => ({
  type: CLOSE_SNACKBAR,
  dismissAll: !key, // dismiss all if no key has been defined
  key,
});

export const removeSnackbar = (key) => ({
  type: REMOVE_SNACKBAR,
  key,
});
