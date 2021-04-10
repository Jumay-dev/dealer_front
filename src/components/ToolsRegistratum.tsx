import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from '@material-ui/core/Grid'
import {getStatusNameByID} from '../controllers/StatusController'

export default function ToolsRegistratum({
  checkedTools,
  setCheckedTools,
  tools,
  toolsMeta
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
        <FormControlLabel
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
          <span style={{ color: "#666b73" }}>
            {localToolMeta.tool_name} <span style={{fontWeight: 'bold'}}>{getStatusNameByID(+localTool.status_id)}</span>
          </span>
        }
      />
      )
  }

  return (
    <Grid container spacing={2}>
        {tools ? tools.map( item => <Grid item>{Tool(item)}</Grid>) : <span>Ошибка загрузки оборудования</span>}
    </Grid>
  );
}