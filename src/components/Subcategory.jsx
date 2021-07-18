import React from "react";
import Typography from "@material-ui/core/Typography";
import AccordionOfTools from "./AccordionOfTools";

const Subcategory = (props) => {
  const {
    catkey,
    categories,
    allTools,
    setTools,
    categoriesDicitionary,
    getFilteredToolsByCategory,
    handleInfoClick,
  } = props;

  return (
    <div key={catkey}>
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
      {categories.map((category) => (
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
  );
};

export default Subcategory;
