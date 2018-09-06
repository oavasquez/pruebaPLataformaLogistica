import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { Route, BrowserRouter, Link, Redirect, Switch } from 'react-router-dom';
import Login from '../../views/Login/Login.jsx';
import Register from '../../views/Register/Register.jsx';
import Home from '../../views/Home/Home.jsx';
import Dashboard from '../../views/Dashboard/Dashboard.jsx';
import { logout } from '../../helpers/auth.jsx';
import { firebaseAuth } from '../../config/constants.jsx';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import UserProfile from "../../views/UserProfile/UserProfile.jsx";
import TableList from "../../views/TableList/TableList.jsx";
import Icons from "../../views/Icons/Icons.jsx";
import Maps from "../../views/Maps/Maps.jsx";
import ShowUsers from "../../views/ShowUsers/ShowUsers.jsx";
import NotificationsPage from "../../views/Notifications/Notifications.jsx";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import purple from '@material-ui/core/colors/purple';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Minidrawer from "../../components/MiniDrawer/MiniDrawer.jsx";
import Sidebar from "../../components/Sidebar/Sidebar.jsx";
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import dashboardRoutes from "../../routes/dashboard.jsx";



const drawerWidth = 220;
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  container: {
    textAlign: 'center',
    Paddingbottom: "0",
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
});

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          )}
    />
  );
}

function PublicRoute({ component: Component, loanding, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
            <Redirect to="/dashboard" />
          )}
    />
  );
}

class App extends Component {
  classes = {}
  constructor(props) {
    super(props);
    //const { classes } = this.props;
    this.classes = this.props.classes;
  }



  theme = {
    direction: "rtl"
  }
  state = {
    authed: false,
    loading: true,
    open: false,
    usuario: {},
    anchorEl: null,
  };

  usuario = {}

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerOpenSidebar = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  componentDidMount() {
    this.removeListener = firebaseAuth().onAuthStateChanged(user => {
      if (user) {

        this.setState({
          usuario: user,
          authed: true,
          loading: false
        });
      } else {
        this.setState({
          authed: false,
          loading: false
        });
      }
    });
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  cambioEstadoBar(Values) {
    this.setState(state => ({
      open: !state.open
    }));
    this.theme.direction = "ltl"
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { anchorEl } = this.state;
    const openUsuarioMenu = Boolean(anchorEl);
    const { classes, ...rest } = this.props;
    const authButtons = this.state.authed ? (
      <div></div>
    ) : (
        <span>
          <Link to="/login">
            <Button style={{ color: '#fff' }} >Login</Button>
          </Link>
          <Link to="/register">
            <Button style={{ color: '#fff' }} >Register</Button>
          </Link>
        </span>
      );

    const topbarButtons = (
      <div>
        <Link to="/" color="inherit">
          <Button style={{ color: '#fff' }}>Home</Button>
        </Link>
        {authButtons}
      </div>
    );
    return this.state.loading === true ? (



      <div className={classes.container}>
        <Typography variant="display3" gutterBottom>
          Estamos cargando lo necesario
      </Typography>
        <br></br>
        <br></br>
        <br></br>
        <CircularProgress className={classes.progress} size={200} style={{ color: purple[40] }} thickness={15} />
      </div>
    ) : (
        <div className={this.classes.root} >


          <Grid container spacing={24}>
            <Grid item md={12}>
              <AppBar
                position="sticky"
                className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
              >
                <Toolbar disableGutters={!this.state.open}>
                  <div className={classNames(classes.menuButton, !this.state.authed && classes.hide)}>
                    <IconButton
                      color="inherit"
                      aria-label="Open drawer"
                      onClick={this.handleDrawerOpen}
                      className={classNames(classes.menuButton, this.state.open && classes.hide)}
                    >
                      <MenuIcon />
                    </IconButton>
                  </div>
                  <Typography variant="title" color="inherit" className={this.classes.flex}>
                    Plataforma Logistica
                      </Typography>
                  {authButtons}

                  <div className={classNames(!this.state.authed && classes.hide)}>
                   
                      <Typography variant="subheading" color="inherit" align="right">
                        {this.state.usuario.displayName}
                      </Typography>
                    </div>


                    <div className={classNames(!this.state.authed && classes.hide)}>

                    <IconButton
                      aria-owns={openUsuarioMenu ? 'menu-appbar' : null}
                      aria-haspopup="true"
                      onClick={this.handleMenu}
                      color="inherit"
                      >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={openUsuarioMenu}
                      onClose={this.handleClose}
                      >
                      <Link to="/" color="inherit">
                        <MenuItem onClick={this.handleClose}>
                          Home
                                </MenuItem>
                      </Link>
                      <MenuItem onClick={() => { logout() }}>Salir</MenuItem>
                    </Menu>
                      </div>
       

                </Toolbar>
              </AppBar>
            </Grid>


            <Grid item md={this.state.open ? 2 : 1}>
              <div className={classNames(classes.menuButton, !this.state.authed && classes.hide)}>
                <Minidrawer
                  onSelectLanguage={this.cambioEstadoBar.bind(this)}
                  open={this.state.open}
                  routes={dashboardRoutes}
                  theme={this.theme}

                >
                </Minidrawer>
              </div>
            </Grid>
            <Grid item md={this.state.open ? 10 : 11} >

              <div >
                <Switch>
                  <Route path="/" exact component={Home} />
                  <PublicRoute
                    authed={this.state.authed}
                    path="/login"
                    component={Login}
                  />
                  <PrivateRoute
                    authed={this.state.authed}
                    path="/userProfile"
                    component={UserProfile}
                  />
                  <PrivateRoute
                    authed={this.state.authed}
                    path="/entregas"
                    component={TableList}
                  />
                  <PrivateRoute
                    authed={this.state.authed}
                    path="/rastreo"
                    component={Icons}
                  />
                  <PrivateRoute
                    authed={this.state.authed}
                    path="/user"
                    component={ShowUsers}
                  />
                  <PrivateRoute
                    authed={this.state.authed}
                    path="/maps"
                    component={Maps}
                  />
                  <PrivateRoute
                    authed={this.state.authed}
                    path="/notifications"
                    component={NotificationsPage}
                  />
                  <PublicRoute
                    authed={this.state.authed}
                    path="/register"
                    component={Register}
                  />
                  <PrivateRoute
                    authed={this.state.authed}
                    loanding={this.state.loading}
                    path="/dashboard"
                    component={Dashboard}
                  />
                  <Route render={() => <h3>No Se encuentra la pagina</h3>} />
                </Switch>

              </div>
            </Grid>
          </Grid>
        </div>


      );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);