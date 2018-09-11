import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { PropTypes } from 'prop-types';
import red from '@material-ui/core/colors/red';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import avatar from "../../assets/img/faces/marc.jpg";
import rappiAvatar from "../../assets/img/faces/rappi.png";
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    direction: "ltl",
    overflow: "auto",
    height: 450,
  },

  barchat: {
    direction: "ltl",
    overflow: "auto",
    height: 450,
    maxWidth: 370,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  margin: {
    margin: theme.spacing.unit * 1,
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 0.2}px`,
  },
  wrapper: {

  },
  paper1: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    maxWidth: '60%',
    backgroundColor: "#FFAB91",
  },
  paper2: {
    margin: theme.spacing.unit,
    padding: theme.spacing.unit * 2,
    maxWidth: '60%',
    backgroundColor: "#B3E5FC",
  },
});

class Message extends React.Component {


  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "instant" });
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }



  render() {

    const { classes } = this.props;

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <div className={classes.barchat}>
            <div
              ref={(el) => { this.messagesEnd = el; }}>
            </div>
            <List component="nav">
              <ListItem button>
                <Badge color="primary" badgeContent={1}>
                  <Avatar src={avatar} />
                </Badge>
                <ListItemText primary="Usuario 1" secondary="11:00pm" />
              </ListItem>
              <li>
                <Divider inset />
              </li>
              <ListItem button>
                <Badge color="secondary" badgeContent={3}>
                  <Avatar src={avatar} />
                </Badge>
                <ListItemText primary="Usuario 2" secondary="11:00pm" />
              </ListItem>
              <li>
                <Divider inset />
              </li>
              <ListItem button>
                <Badge color="secondary" badgeContent={4}>
                  <Avatar src={avatar} />
                </Badge>
                <ListItemText primary="Usuario 3" secondary="11:00pm" />
              </ListItem>
              <li>
                <Divider inset />
              </li>
              <ListItem button>
                <Badge color="secondary" badgeContent={8}>
                  <Avatar src={avatar} />
                </Badge>
                <ListItemText primary="Usuario 4" secondary="11:00pm" />
              </ListItem>
              <li>
                <Divider inset />
              </li>
              <ListItem button>
                <Badge color="secondary" badgeContent={10}>
                  <Avatar src={avatar} />
                </Badge>
                <ListItemText primary="Usuario 5" secondary="11:00pm" />
              </ListItem>
              <li>
                <Divider inset />
              </li>
              <ListItem button>
                <Badge color="secondary" badgeContent={4}>
                  <Avatar src={avatar} />
                </Badge>
                <ListItemText primary="Usuario 1" secondary="11:00pm" />
              </ListItem>
              <li>
                <Divider inset />
              </li>
              <ListItem button>
                <Badge color="secondary" badgeContent={4}>
                  <Avatar src={avatar} />
                </Badge>
                <ListItemText primary="Usuario 1" secondary="11:00pm" />
              </ListItem>
              <li>
                <Divider inset />
              </li>
              <ListItem button>
                <Badge color="secondary" badgeContent={4}>
                  <Avatar src={avatar} />
                </Badge>
                <ListItemText primary="Usuario 1" secondary="11:00pm" />
              </ListItem>
              <li>
                <Divider inset />
              </li>
              <ListItem button>
                <Badge color="secondary" badgeContent={4}>
                  <Avatar src={avatar} />
                </Badge>
                <ListItemText primary="Usuario 1" secondary="11:00pm" />
              </ListItem>
              <li>
                <Divider inset />
              </li>

            </List>





          </div>
        </GridItem>


        <GridItem xs={12} sm={12} md={9}>
          <div className={classes.root}>
            <Grid container justify="flex-start">
              <Paper className={classes.paper1} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={avatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-end">
              <Paper className={classes.paper2} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={rappiAvatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-start">
              <Paper className={classes.paper1} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={avatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-end">
              <Paper className={classes.paper2} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={rappiAvatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-start">
              <Paper className={classes.paper1} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={avatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-end">
              <Paper className={classes.paper2} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={rappiAvatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-start">
              <Paper className={classes.paper1} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={avatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-end">
              <Paper className={classes.paper2} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={rappiAvatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-start">
              <Paper className={classes.paper1} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={avatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-end">
              <Paper className={classes.paper2} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={rappiAvatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-start">
              <Paper className={classes.paper1} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={avatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-end">
              <Paper className={classes.paper2} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={rappiAvatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-start">
              <Paper className={classes.paper1} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={avatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-end">
              <Paper className={classes.paper2} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={rappiAvatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-start">
              <Paper className={classes.paper1} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={avatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <Grid container justify="flex-end">
              <Paper className={classes.paper2} >
                <Grid container wrap="nowrap" spacing={16} >
                  <Grid item>
                    <Avatar src={rappiAvatar}></Avatar>
                  </Grid>
                  <Grid item xs>
                    <Typography variant="body1" paragraph>Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. </Typography>
                    <Typography variant="caption" >10:11 PM </Typography>
                  </Grid>

                </Grid>
              </Paper>
            </Grid>
            <div
              ref={(el) => { this.messagesEnd = el; }}>
            </div>

          </div>
        </GridItem>
      </GridContainer>
    );
  }
}

const stylesForMessageList = {};


class MessageList extends React.Component {
  render() {
    return (
      <div>
        <Message />
      </div>

    );
  }

}

export default withStyles(styles)(Message);