/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import Snackbar from "../Snackbar/Snackbar.jsx";


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

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tr: false,
    };
    this.lertTimeout = null;
  }
  componentWillUnmount() {
    this.clearAlertTimeout();
  }
  clearAlertTimeout() {
    if (this.alertTimeout !== null) {
      clearTimeout(this.alertTimeout);
    }
  }
  showNotification(place) {
    var x = [];
    x[place] = true;
    this.setState(x);
    this.clearAlertTimeout();
    this.alertTimeout = setTimeout(
      function() {
        x[place] = false;
        this.setState(x);
      }.bind(this),
      6000
    );
  }
  render() {
    const { classes, mensaje,open } = this.props;
    return (                
                  <Snackbar
                    place="tr"
                    color="info"
                    icon={AddAlert}
                    message={mensaje}
                    open={open}
                    closeNotification={() => this.setState({ tr: false })}
                    close
                  />
    );
  }
}

export default withStyles(styles)(Notifications);
