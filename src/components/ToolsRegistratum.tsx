import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from '@material-ui/core/Grid'
import {getStatusNameByID} from '../controllers/StatusController'
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';

export default function ToolsRegistratum({
  checkedTools,
  setCheckedTools,
  tools,
  toolsMeta,
  commentHistoryHandler
}) {
  function checkboxClickHandler(e, tool) {
    let sliceOfCheckedTools = checkedTools.splice(0);
    if (e.target.checked) {
      sliceOfCheckedTools.push(tool);
    } else {
      sliceOfCheckedTools.splice(sliceOfCheckedTools.indexOf(tool));
    }
    setCheckedTools(sliceOfCheckedTools);
  }

  function Tool(localTool) {
      const localToolMeta = toolsMeta.find( item => item.id === localTool.id)

      return (
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <FormControlLabel
          style={{display: "flex"}}
          control={
            <Checkbox
              onClick={(e) => checkboxClickHandler(e, localTool)}
              color="primary"
              checked={checkedTools.find(
                (tool) => tool.id === localTool.id
              )}
            />
          }
          label={
            <span style={{ color: "#666b73"}}>{localToolMeta.tool_name}</span>
          }
          />
          <div>
            <span style={{fontWeight: 'bold', color: "#666b73"}}>{getStatusNameByID(+localTool.status_id)}</span>
            <Tooltip title={localTool.last_comment ? localTool.last_comment.comment : "Пока комментариев нет"}>
              <IconButton disabled={!localTool.last_comment} aria-label="delete" onClick={() => commentHistoryHandler(localTool)}>
                <ChatIcon />
              </IconButton>
            </Tooltip>
          </div>
          
        </div>
      )
  }

  return (
    <Grid container spacing={2}>
        {tools ? tools.map( item => <Grid item xs={12}>{Tool(item)}</Grid>) : <span>Ошибка загрузки оборудования</span>}
    </Grid>
  );
}