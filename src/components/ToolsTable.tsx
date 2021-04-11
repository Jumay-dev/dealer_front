import React from "react";
import Grid from "@material-ui/core/Grid";
import { getStatusNameByID } from "../controllers/StatusController";

export default function ToolsRegistratum({ tools, toolsMeta }) {
  function Tool(localTool) {
    const localToolMeta = toolsMeta.find((item) => item.id === localTool.id);

    return (
        <div style={{ color: "#666b73", display: "flex", justifyContent: "space-between"}}>
          {localToolMeta.tool_name}{" "}
          <span style={{ fontWeight: "bold" }}>
            {getStatusNameByID(+localTool.status_id)}
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
