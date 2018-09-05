import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "../../actions/index.jsx";

import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import Table from "../../components/Table/Table.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardBody from "../../components/Card/CardBody.jsx";


const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class ToDoListItem extends Component {
  handleCompleteClick = completeToDoId => {
    const { completeToDo } = this.props;
    completeToDo(completeToDoId);
  };



  render() {
    const { todoId, todo, classes } = this.props;


    return (
      <div key="toDoName" >

        <GridContainer>

          <GridItem xs={12} sm={12} md={12}>
            {todo.title}{" "}
            <h4>
              <button
                onClick={() => this.handleCompleteClick(todoId)}
              >
                <i >Listo</i>
              </button>
            </h4>
          </GridItem>
        </GridContainer>

      </div>
    );
  }
}

export default connect(null, { completeToDo })(ToDoListItem);