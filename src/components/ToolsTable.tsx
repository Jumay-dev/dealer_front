import React from "react";
import Grid from "@material-ui/core/Grid";
import { getStatusNameByID } from "../controllers/StatusController";

export default function ToolsRegistratum({ tools, toolsMeta }) {
  console.log(tools.sort(function(a, b) {
    return +b.status_id - +a.status_id;
  }));
  function Tool(localTool) {
    const localToolMeta = toolsMeta.find((item) => item.id === localTool.id);
    const toolDescs = getStatusNameByID(+localTool.status_id)
    return (
        <div style={{ color: "#666b73", display: "flex", justifyContent: "space-between"}}>
          {localToolMeta.tool_name}{" "}
          <span style={{ fontWeight: "bold" }}>
            {toolDescs.text}
            <div style={{display: "inline-block", minHeight: 8, minWidth: 8, borderRadius: "50%", background: toolDescs.color, marginLeft: 5}}></div>
          </span>
        </div>
    );
  }

  return (
    <Grid container spacing={2}>
      {tools ? (
        tools.map((item) => <Grid item xs={12}>{Tool(item)}</Grid>)
      ) : (
        <span>Ошибка загрузки оборудования</span>
      )}
    </Grid>
  );
}
