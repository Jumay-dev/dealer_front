import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";
import moment from 'moment'
import 'moment/locale/ru';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  fonts: {
    fontWeight: "bold",
  },
  inline: {
    display: "inline",
  },
  commentHeader: {
    display: "flex",
    justifyContent: "space-between"
  },
  commentDate: {
    fontSize: "0.8em",
    color: "inherit"
  }
}));

export default function Comment({commentOne}) {
  moment.locale("ru")
  const date = moment(commentOne.created_at).format('LLL')
  //date.locale()
  const classes = useStyles();
  return (
    <React.Fragment>
      <ListItem key={commentOne.id} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="avatar"
            src={"https://ds-med.ru/wp-content/uploads/2020/03/logoDS-1.png"}
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <div className={classes.commentHeader}>
              <Typography className={classes.fonts}>{commentOne.name} {commentOne.surname}</Typography>
              <span className={classes.commentDate}>{date}</span>
            </div>
            
          }
          secondary={
            <>
              {commentOne.comment}
            </>
          }
        />
      </ListItem>
      <Divider />
      </React.Fragment>
  );
}
