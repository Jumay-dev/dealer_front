import React from "react";
import Typography from "@material-ui/core/Typography";
import AccordionOfTools from "./AccordionOfTools";

class Subcategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      catkey: props.catkey,
      categories: props.categories,
      allTools: props.allTools,
      setTools: props.setTools,
      categoriesDicitionary: props.categoriesDicitionary
    };
  }

  render(props) {
    return (
      <div key={this.state.catkey}>
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
          {this.props.categoriesDicitionary[this.state.catkey]}
        </Typography>
        {this.state.categories.map((category) => (
          <AccordionOfTools
            categoryName={category.category.category_name}
            category={category.category}
            filteredToolsByCategory={props.getFilteredToolsByCategory}
            allTools={this.state.allTools}
            setTools={this.state.setTools}
            key={category.id}
            handleInfoClick={props.handleInfoClick}
          />
        ))}
      </div>
    )
  }
}

export default Subcategory;
