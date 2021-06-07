import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import { getStatusNameByID } from "../controllers/StatusController";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ChatIcon from "@material-ui/icons/Chat";

export default function ToolsRegistratum({
  checkedTools,
  setCheckedTools,
  tools,
  toolsMeta,
  commentHistoryHandler,
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
    interface toolObj {
      id: number
      external_id: string;
      tool_name: string;
      category_id: string;
      tool_provider: string;
      tool_sort: string;
      visibility: string;
      created_at: string;
      updated_at: string;
      price: string;
      price_cur: string;
    }
    const [localToolMeta, setMeta] = React.useState<undefined | toolObj>(undefined)

    React.useEffect(() => {
      const meta = toolsMeta.find(
        (item) => +item.id === +localTool.tool_id
      )
      setMeta(meta)
    }, [toolsMeta])

    const toolStatus = getStatusNameByID(+localTool.status_id)

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          style={{ display: "flex" }}
          control={
            <Checkbox
              onClick={(e) => checkboxClickHandler(e, localTool)}
              color="primary"
              checked={checkedTools.find((tool) => tool.id === localTool.id)}
            />
          }
          label={
            <span style={{ color: "#666b73" }}>{localToolMeta ? localToolMeta.tool_name : null}</span>
          }
        />
        <div
          style={{
            minWidth: "15vw",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <span style={{ fontWeight: "bold", color: toolStatus.color }}>
            {toolStatus.text}
          </span>
          <Tooltip
            title={
              localTool.last_comment
                ? localTool.last_comment.comment
                : "Пока комментариев нет"
            }
          >
            <IconButton
              disabled={!localTool.last_comment}
              aria-label="delete"
              onClick={() => commentHistoryHandler(localTool)}
            >
              <ChatIcon />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    );
  }

  try {
    return (
      <Grid container spacing={2}>
        {tools ? (
          tools.map((item) => (
            <Grid item xs={12}>
              {Tool(item)}
            </Grid>
          ))
        ) : (
          <span>Ошибка загрузки оборудования</span>
        )}
      </Grid>
    );
  }
  catch {
    return <span>Ошибка загрузки оборудования</span>
  }

}
