import React from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";


import { withRouter } from "react-router-dom";


import MessageList from "./MessageList";
import InputArea from "./InputArea";






class ChatPage extends React.Component {


  render() {
    const { messages, onSignOut } = this.props;

    return (
      <Grid container justify="center">
        
                <MessageList  />
                <InputArea  />
            
          
      </Grid>
    );
  }
}


export default (ChatPage);