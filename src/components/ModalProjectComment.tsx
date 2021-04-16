import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "../assets/icons/Close circle.svg";
import { Typography } from "@material-ui/core";
import CommentBox from "./CommentBox";
import TextField from "@material-ui/core/TextField";
import { commentType } from "../types/index";
import { sendProjectComment } from "../controllers/ProjectCardController";
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "&.MuiDialog-root": {
        backdropFilter: "blur(5px)",
        background: "rgba(104, 140, 188, 0.4) !important",
      },
    },
    containerRoot: {
      padding: theme.spacing(2),
    },
    tableCellName: {
      fontWeight: "bolder",
      color: "#96999c",
      marginRight: 5,
    },
    tableCellValue: {
      fontWeight: "bolder",
      color: "#666b73",
    },
    headerStyle: {
      background: theme.palette.secondary.main,
      color: theme.palette.primary.main,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    deleteButton: {
      marginRight: 10,
      background: theme.palette.error.main,
      color: "white",
      "&:hover": {
        background: theme.palette.error.dark,
      },
    },
  })
);

export default function ModalToolCommentsHistory({
  onClose,
  open,
  comments,
  project,
  enqueueSnackbar,
  closeSnackbar
}) {
  const classes = useStyles();
  const [comment, setComment] = React.useState("");

  function sendComment() {
    sendProjectComment(project, comment).then((res) => {
      if (res.success) {
        const myKey = uuidv4()
        enqueueSnackbar({
          message: 'Комментарий успешно добавлен',
          key: uuidv4(),
          options: {
              key: myKey,
              variant: 'success',
              action: key => (
                  <Button onClick={() => closeSnackbar(myKey)}>Закрыть</Button>
              ),
          },
        });
        onClose()
      } else {
        const myKey = uuidv4()
        enqueueSnackbar({
          message: 'Ошибка добавления комментария: ' + res.message,
          key: uuidv4(),
          options: {
              key: myKey,
              variant: 'error',
              action: key => (
                  <Button onClick={() => closeSnackbar(myKey)}>Закрыть</Button>
              ),
          },
        });
      }
    });
  }

  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      className={classes.root}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle
        id="simple-dialog-title"
        className={classes.headerStyle}
        disableTypography
      >
        <Typography variant="h5">Комментарии к проекту</Typography>

        <IconButton onClick={() => onClose()} style={{ marginRight: "-16px" }}>
          <img src={CloseIcon} />
        </IconButton>
      </DialogTitle>
      <div className={classes.containerRoot}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CommentBox comments={comments} />
          <TextField
            id="outlined-basic"
            label="Комментарий"
            variant="outlined"
            rows={4}
            fullWidth
            style={{ marginTop: "1em" }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button onClick={sendComment}>Отправить</Button>
        </div>
      </div>
    </Dialog>
  );
}
