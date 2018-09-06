import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";

import TableUser from "../../components/TableUser/TableUser";

const styles = {

};

function TableList(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <TableUser/>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(TableList);
