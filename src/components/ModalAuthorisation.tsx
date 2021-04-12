import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import CloseIcon from "../assets/icons/Close circle.svg";
import { Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { backend } from "../config/server";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { getStatusNameByID } from '../controllers/StatusController'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "&.MuiDialog-root": {
        backdropFilter: "blur(5px)",
        background: "rgba(104, 140, 188, 0.4) !important",
      },
      overflow: "hidden",
    },
    containerRoot: {
      padding: theme.spacing(3),
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
    buttonGreen: {
      border: "1px solid green",
      minWidth: 250,
      color: "green",
      "&:hover": {
        color: "green",
        border: "1px solid green",
      },
    },
  })
);

export default function ModalAuthorisation(
  { 
    onClose,
    open, 
    tools,
    toolsMeta
  }) {
  const classes = useStyles();
  const [comment, setComment] = React.useState("");
  const token = localStorage.getItem("react-crm-token");
  const [modalLoading, setModalLoading] = React.useState(false);
  const [status, setStatus] = React.useState("");

  const handleStatusChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string);
  };

  function Tool(localTool) {
    const localToolMeta = toolsMeta.find( item => item.id === localTool.id)

    return (
      <span>{localToolMeta.tool_name} ({getStatusNameByID(+localTool.status_id)}){status !== '' ? `->${getStatusNameByID(+status)}` : null}</span>
    )
}

  function sendCheckedToolsToChangeStatus(tools, comment, status) {
    setModalLoading(true);
    const data = new FormData();
    const toolsForSendtinIDs = [];
    data.append("comment", comment);
    data.append("status", status);
    tools.forEach((tool) => {
      toolsForSendtinIDs.push(tool.id);
    });
    data.append("tools", JSON.stringify(toolsForSendtinIDs));

    fetch(`${backend}/api/tool/authorisation`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: data,
    })
      .then((res) => res.json())
      .then((res: any) => {
        setModalLoading(false);
        if (res.success) {
          onClose({success: true})
        } else {
          onClose({success: false})
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
      maxWidth="lg"
    >
      <DialogTitle
        id="simple-dialog-title"
        className={classes.headerStyle}
        disableTypography
      >
        <Typography variant="h5">Изменение статуса оборудования</Typography>
        <IconButton onClick={() => onClose()} style={{ marginRight: "-16px" }}>
          <img src={CloseIcon} />
        </IconButton>
      </DialogTitle>
      <div className={classes.containerRoot}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            style={{
              marginTop: 15,
              marginBottom: 10,
              color: "rgb(104, 140, 188)",
            }}
          >
            Авторизуемое оборудование
          </Typography>

          <Grid container>
            {tools
              ? tools.map((tool) => (
                  <Grid
                    item
                    className={classes.tableCellValue}
                    md={6}
                    sm={12}
                    style={{ marginBottom: 5 }}
                  >
                    {Tool(tool)}
                  </Grid>
                ))
              : null}
          </Grid>
          <FormControl variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
              Статус
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={status}
              onChange={handleStatusChange}
              label="Статус"
            >
              <MenuItem value=""></MenuItem>
              <MenuItem value={2}>Авторизовано</MenuItem>
              <MenuItem value={0}>На авторизации</MenuItem>
              <MenuItem value={1}>Не авторизовано</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Комментарий"
            variant="outlined"
            rows={4}
            fullWidth
            style={{ marginTop: "1em" }}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
          />
          <Button
            type="button"
            variant="outlined"
            className={classes.buttonGreen}
            style={{ width: "10vw", alignSelf: "flex-end", marginTop: "1em" }}
            onClick={() =>
              sendCheckedToolsToChangeStatus(tools, comment, status)
            }
          >
            Изменить статус
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
