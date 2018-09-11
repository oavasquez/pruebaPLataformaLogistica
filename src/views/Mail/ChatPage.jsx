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
        <Grid item style={{ flexGrow: 1, maxWidth: 1000 }}>
          <Grid container>
            <Grid item xs={12}>
              <Paper elevation={2} style={{ padding: 20 }}>
                <MessageList  />
                <InputArea  />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}


export default (ChatPage);