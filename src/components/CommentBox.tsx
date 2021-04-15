import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
} from "@material-ui/core";
import Comment from './Comment'
import { commentType } from '../types/index'

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  }
}));

function CommentBox({ comments }) {
  const classes = useStyles();
  return (
    <List className={classes.root}>
        {comments.map( comment => <Comment commentOne={comment}/> )}
    </List>
  );
}

export default CommentBox;