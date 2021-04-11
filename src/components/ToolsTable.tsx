import React from "react";
import Grid from "@material-ui/core/Grid";
import { getStatusNameByID } from "../controllers/StatusController";

export default function ToolsRegistratum({ tools, toolsMeta }) {
  function Tool(localTool) {
    const localToolMeta = toolsMeta.find((item) => item.id === localTool.id);

    return (
        <span style={{ color: "#666b73" }}>
          {localToolMeta.tool_name}{" "}
          <span style={{ fontWeight: "bold" }}>
            {getStatusNameByID(+localTool.status_id)}
          </span>
        </span>
    );
  }

  return (
    <Grid container spacing={2}>
      {tools ? (
        tools.map((item) => <Grid item xs={4}>{Tool(item)}</Grid>)
      ) : (
        <span>Ошибка загрузки оборудования</span>
      )}
    </Grid>
  );
}
