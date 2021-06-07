import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import AccordionOfTools from "../components/AccordionOfTools";
import ReqContainer from "../components/ReqContainer";
import { newProject } from "../actions/project";
import { setSuccess, unsetSuccess } from "../actions/app";
import { connect } from "react-redux";
import ToolInfoInProject from "../components/ToolInfoInProject";
import CircularProgress from "@material-ui/core/CircularProgress";
import { thunkData } from "../services/thunks";
import { backend } from "../config/server";
import { LIST_CATEGORIES } from "../store/types";
import { v4 as uuidv4 } from "uuid";

import {
  enqueueSnackbar as enqueueSnackbarAction,
  closeSnackbar as closeSnackbarAction,
} from "../actions/snackbar";

const categoriesDicitionary = {
  'default': "Остальные"
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      marginBottom: theme.spacing(1),
      overflow: "hidden",
      marginTop: 10,
      padding: theme.spacing(3),
    },
    headerWrapper: {
      width: "100%",
      background: "#e3ecf7",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: theme.spacing(3),
      color: "#688cbc",
      minHeight: "120px",
    },
    contentWrapper: {
      padding: theme.spacing(2),
    },
    tableCellName: {
      fontWeight: "bolder",
      color: "#96999c",
      marginRight: 5,
      width: 100,
    },
    tableCellValue: {
      fontWeight: "bolder",
      color: "#666b73",
    },
    gridContainer: {
      maxWidth: "70%",
    },
  })
);

function Project({
  enqueueSnackbar,
  closeSnackbar,
  history,
  categoriesList,
  toolsList,
  getCategories,
  user,
}) {
  const classes = useStyles();
  const [openPresend, setOpenPresend] = React.useState(false);
  const [allTools, setTools] = React.useState([]);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [toolInfo, setToolInfo] = React.useState({
    tool_name: "",
    price: "",
    price_cur: "",
    img: "",
    description: "",
  });

  React.useEffect(() => {
    if (toolsList.length !== 0) {
      setTools([...toolsList]);
    } else {
      let categoriesListAction = {
        type: LIST_CATEGORIES,
        endpoint: "projects/",
        data: {},
      };
      getCategories(categoriesListAction);
    }
  }, [toolsList]);

  function presendHandler() {
    setOpenPresend(true);
  }
  const handleInfoClick = (event, tool) => {
    console.log(tool);
    setToolInfo({
      tool_name: tool.tool_name,
      price: tool.price,
      price_cur: tool.price_cur,
      img: "",
      description: "",
    });
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const openPop = Boolean(anchorEl);
  const id = openPop ? "simple-popover" : undefined;

  function handleNewProject(clinicInfo, subDealerInfo, isDealerAdded) {
    let toolsIDs = [];
    getCheckedTools(allTools).forEach((item) => toolsIDs.push(item.id));

    function getCheckedTools(tools) {
      return tools.filter((tool) => tool.isChecked === true);
    }

    const project = {
      tools: toolsIDs,
      dealer: user.company.id,
      employee: user.id,
      client: 0,
      manager_id: 0,
      actualised_at: Date.now(),
      expires_at: Date.now() + 10000,
      clinic: JSON.stringify(clinicInfo),
      subdealer: "",
    };

    if (isDealerAdded) {
      project.subdealer = JSON.stringify(subDealerInfo);
    }

    let data = new FormData();
    for (let key in project) {
      data.append(key, project[key]);
    }

    const token = localStorage.getItem("react-crm-token");
    fetch(`${backend}/api/project/create`, {
      method: "POST",
      headers: {
        Authorization: token,
      },
      body: data,
    })
      .then((res) => res.json())
      .then((res) => {
        // setSuccess()
        enqueueSnackbar({
          message: "Ваш проект отправлен на авторизацию",
          options: {
            key: uuidv4(),
            variant: "success",
            action: (key) => (
              <Button onClick={() => closeSnackbar(key)}>Закрыть</Button>
            ),
          },
        });
      });
    history.push("/projects");
  }

  function getFilteredToolsByCategory(tools, categoryID) {
    if (Array.isArray(tools) && tools.length !== 0) {
      return tools.filter((tool) => +tool.category_id === +categoryID);
    }
  }

  interface categorySignature {
    category: any;
    category_tools?: Array<any>;
  }

  function Subcategory({catkey, categories, allTools, setTools}) {
    return (
      <div>
        <Typography
          component="h2"
          variant="h5"
          style={{
            color: "#688cbc",
            display: "block",
            marginTop: 20,
            marginBottom: 10,
          }}
        >
          {categoriesDicitionary[catkey]}
        </Typography>
        {categories.map(category => (
          <AccordionOfTools
          categoryName={category.category.category_name}
          category={category.category}
          filteredToolsByCategory={getFilteredToolsByCategory}
          allTools={allTools}
          setTools={setTools}
          key={category.id}
          handleInfoClick={handleInfoClick}
          />
        ))}
      </div>
    )
  }

  function CategoriesSortedBySubcategories({categories, dictionary, allTools, setTools}) {
    const sortedCategoryObj = {};
    categories.forEach(category => {
      if (dictionary[category.category.subcategory_tag]) {
        if(sortedCategoryObj[category.category.subcategory_tag] && Array.isArray(sortedCategoryObj[category.category.subcategory_tag])) {
          sortedCategoryObj[category.category.subcategory_tag].push(category)
        } else {
          sortedCategoryObj[category.category.subcategory_tag] = [];
          sortedCategoryObj[category.category.subcategory_tag].push(category)
        }
      } else {
        if (sortedCategoryObj['default'] && Array.isArray(sortedCategoryObj['default'])) {
          sortedCategoryObj['default'].push(category)
        } else {
          sortedCategoryObj['default'] = []
          sortedCategoryObj['default'].push(category)
        }
      }
    })
    return (
      <React.Fragment>
        {Object.keys(sortedCategoryObj).map(catkey => <Subcategory catkey={catkey} categories={sortedCategoryObj[catkey]} allTools={allTools} setTools={setTools}/>)}
      </React.Fragment>
    )
  }

  return (
    <div>
      {Array.isArray(categoriesList) && categoriesList.length ? (
        <Box
          visibility={
            Array.isArray(categoriesList) && categoriesList.length !== 0
              ? "visible"
              : "hidden"
          }
        >
          <div className={classes.headerWrapper}>
            <Typography component="h1" variant="h4">
              Новый проект
            </Typography>
          </div>
          <div className={classes.contentWrapper}>
            <ReqContainer
              allTools={allTools}
              handleNewProject={handleNewProject}
              openPresend={openPresend}
              setOpenPresend={setOpenPresend}
            />

            <Typography
              component="h2"
              variant="h5"
              style={{
                color: "#688cbc",
                display: "inline-block",
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Авторизуемое оборудование
            </Typography>

            {/* {categoriesList.map((category) => (
              <AccordionOfTools
                categoryName={category.category.category_name}
                category={category.category}
                filteredToolsByCategory={getFilteredToolsByCategory}
                allTools={allTools}
                setTools={setTools}
                key={category.id}
                handleInfoClick={handleInfoClick}
              />
            ))} */}
            <CategoriesSortedBySubcategories 
              categories={categoriesList}
              dictionary={categoriesDicitionary}
              allTools={allTools}
              setTools={setTools}
            />

            <ToolInfoInProject
              toolName={toolInfo.tool_name}
              img="https://ds-med.ru/wp-content/uploads/2019/05/votem_1200.jpg"
              description={toolInfo.description}
              openPop={openPop}
              anchorEl={anchorEl}
              handleClose={handleClose}
              id={id}
              price={toolInfo.price}
              price_cur={toolInfo.price_cur}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={presendHandler}
            >
              Предварительный просмотр проекта
            </Button>
          </div>
        </Box>
      ) : null}
      <Box
        visibility={
          allTools.length !== 0 && categoriesList.length !== 0
            ? "hidden"
            : "visible"
        }
      >
        <CircularProgress />
      </Box>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    categoriesList: state.tool.categoriesList,
    toolsList: state.tool.toolsList,
    user: state.auth.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    newProject,
    setSuccess: () => dispatch(setSuccess()),
    getProjects: (action: TODO) => dispatch(thunkData(action)),
    getCategories: (action: TODO) => dispatch(thunkData(action)),
    enqueueSnackbar: (data) => dispatch(enqueueSnackbarAction(data)),
    closeSnackbar: (data) => dispatch(closeSnackbarAction(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
