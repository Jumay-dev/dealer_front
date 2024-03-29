import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "../assets/icons/Info circle.svg";
import clsx from "clsx";
import { connect } from "react-redux";
import { checkTool, uncheckTool } from "../actions/tool";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    table: {
      minWidth: 650,
      width: "100%",
    },
    accordionSummaryStyle: {
      display: "flex",
      justifyContent: "space-between !important",
      alignItems: "center",
      width: "100%",
      height: "100%",
    },
    accordionContainer: {
      marginBottom: "1em",
    },
    fullDirection: {
      background: "#e6f7e3",
      color: "green",
    },
    outDirection: {
      background: "#ffffff",
      color: "#666b73",
    },
    partDirection: {
      background: "#f7f5e3",
      color: "#ffb62f",
    },
    buttonFullDirection: {
      border: "1px solid green",
      minWidth: 150,
      color: "green",
      "&:hover": {
        color: "green",
        border: "1px solid green",
      },
    },
    buttonPartDirection: {
      border: "1px solid #ffb62f",
      minWidth: 150,
      color: "#ffb62f",
      "&:hover": {
        color: "#ffb62f",
        border: "1px solid #ffb62f",
      },
    },
    buttonOutDirection: {
      minWidth: 150,
    },
    popoverPaper: {
      padding: theme.spacing(1),
    },
    media: {
      height: 0,
      paddingTop: "56.25%", // 16:9
    },
    selectedMedia: {
      height: 300,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    addingStyle: {
      minWidth: 275,
      background: "#F2CEAA",
      margin: 5,
      height: "100%",
    },
    toolStyle: {
      // minWidth: 275,
      margin: 5,
      height: "100%",
    },
  })
);

function AccordionOfTools({
  categoryName,
  category,
  toolsList,
  checkTool,
  handleInfoClick,
  checkedTools,
  uncheckTool
}) {
  const classes = useStyles();
  const [toolsInAccordion, setToolsInAccordion] = React.useState([]);
  const [choosingType, setChoosingType] = React.useState("nope");
  const [checkedCount, setCheckedCount] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    setToolsInAccordion(
      toolsList.filter((tool) => +tool.category_id === +category.id)
    );
  }, []);

  React.useEffect(() => {
    toolsInAccordion.length && calculateCheckedTools()
  }, [checkedTools])

  const calculateCheckedTools = () => {
    let checkedLength = checkedTools.filter(
      (tool) => +tool.category_id === +category.id
    ).length;
    if (checkedLength === toolsInAccordion.length) {
      setChoosingType("all");
    } else {
      if (checkedLength > 0) {
        setChoosingType("part");
      } else {
        setChoosingType("nope");
      }
    }
    setCheckedCount(checkedLength);
  }

  const oneToolChecked = (event) => {
    const tool = toolsList.find( tool => +tool.id === +event.target.id)
    event.target.checked ? checkTool(tool) : uncheckTool(tool)
    calculateCheckedTools()
  };

  function buttonStyleSelector(variable) {
    switch (variable) {
      case "all":
        return classes.buttonFullDirection;
      case "part":
        return classes.buttonPartDirection;
      default:
        return classes.buttonOutDirection;
    }
  }

  function styleSelector(variable) {
    switch (variable) {
      case "all":
        return classes.fullDirection;
      case "part":
        return classes.partDirection;
      default:
        return classes.outDirection;
    }
  }

  function spanCounterSelector(variable) {
    switch (variable) {
      case "all":
        return (
          <span style={{ marginRight: 20, fontWeight: "bold" }}>
            Выбрано позиций: {toolsInAccordion.length} из{" "}
            {toolsInAccordion.length}
          </span>
        );
      case "part":
        return (
          <span style={{ marginRight: 20, fontWeight: "bold" }}>
            Выбрано позиций: {checkedCount} из {toolsInAccordion.length}
          </span>
        );
      default:
        return null;
    }
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getProviderLogos = () => {
    const logos = JSON.parse(category.logo);
    if (Array.isArray(logos)) {
      return (
        <div style={{ display: "flex", marginRight: "1em" }}>
          {logos.map((logo) =>
            logo !== null ? (
              <img style={{ width: 60 }} src={logo} alt="..." />
            ) : null
          )}
        </div>
      );
    }
    return (
      logos !== null && <img style={{ width: 40 }} src={logos} alt="..." />
    );
  };

  return (
    <div className={classes.accordionContainer}>
      <Accordion className={styleSelector(choosingType)}>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          onClick={handleExpandClick}
        >
          <div className={classes.accordionSummaryStyle}>
            <Typography className={classes.heading}>{categoryName}</Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              {toolsInAccordion ? spanCounterSelector(choosingType) : null}
              {getProviderLogos()}
              <Button
                variant="outlined"
                color="primary"
                className={buttonStyleSelector(choosingType)}
                onClick={handleExpandClick}
              >
                <span>{expanded ? "Скрыть" : "Показать"}</span>
                <ExpandMoreIcon
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                />
              </Button>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.root}>
            <Table
              className={classes.table}
              aria-label="simple table"
              size="small"
            >
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "#666b73", fontWeight: "bolder" }}>
                    Название
                  </TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {toolsInAccordion
                  ? toolsInAccordion.map((oneTool) => (
                      <TableRow key={oneTool.id}>
                        <TableCell component="th" scope="row">
                          {oneTool.tool_name}
                          {oneTool.source_link !== "NONE" ? (
                            <IconButton
                              onClick={(event) =>
                                handleInfoClick(event, oneTool)
                              }
                            >
                              <img src={InfoIcon} />
                            </IconButton>
                          ) : null}
                        </TableCell>

                        <TableCell align="center" scope="row" component="th">
                          <Checkbox
                            checked={checkedTools.find(
                              (tool) => +tool.id === +oneTool.id
                            ) !== undefined}
                            id={oneTool.id}
                            onChange={oneToolChecked}
                            color="primary"
                          />
                        </TableCell>
                      </TableRow>
                    ))
                  : null}
              </TableBody>
            </Table>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

const setStateToProps = (state) => {
  return {
    toolsList: state.tool.toolsList,
    checkedTools: state.tool.checkedTools,
  };
};

const setDistpatchToProps = (dispatch) => {
  return {
    checkTool: (data) => dispatch(checkTool(data)),
    uncheckTool: (data) => dispatch(uncheckTool(data)),
  };
};

export default connect(setStateToProps, setDistpatchToProps)(AccordionOfTools);
