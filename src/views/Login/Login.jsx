import React, { Component } from 'react';
import { login, resetPassword } from '../../helpers/auth.jsx';
import { firebaseUI, firebaseAuth } from '../../config/constants.jsx';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function setErrorMsg(error) {
  return {
    loginMessage: error
  };
}
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginMessage: null
    };
  }

  handleSubmit = e => {
    console.log('submut');
    e.preventDefault();
    login(this.state.email, this.state.password).catch(error => {
      this.setState(setErrorMsg('Invalid username/password.'));
    });
  };
  resetPassword = () => {
    resetPassword(this.state.email)
      .then(() =>
        this.setState(
          setErrorMsg(`Password reset email sent to ${this.state.email}.`)
        )
      )
      .catch(error => this.setState(setErrorMsg(`Email address not found.`)));
  };
  render() {
    const {classes}=this.props
    return (
      <div >
      <div className={classes.container}>
      <Typography variant="title" gutterBottom>
          Puede iniciar sesion con su cuenta de google
      </Typography>
      
    
      <StyledFirebaseAuth uiConfig={firebaseUI} firebaseAuth={firebaseAuth()}/>
      </div>
      </div>
          );
  }
}

const raisedBtn = {
  margin: 15
};

const container = {
  textAlign: 'center',
  Paddingbottom: "0",
};

const styles = {
  raisedBtn,
  container

};

export default withStyles(styles)(Login);
