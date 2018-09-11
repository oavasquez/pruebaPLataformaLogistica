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
import grey from '@material-ui/core/colors/grey';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    direction: "ltl",
    overflow: "auto",
    height: 450,
  },

  greyAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: grey[500],
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
    maxWidth: '100%',
    backgroundColor: "#4caf50",

  },

});

class ShowMessageList extends React.Component {



  render() {

    const { classes } = this.props;

    const message = 'El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer.';

    return (

      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Paper className={classes.paper1}>
            <Grid container wrap="nowrap" spacing={16}>
              <Grid item>
                <Avatar className={classes.grey}>W</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap>{message}</Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" className={classes.button}>
                  Contestar
                </Button>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper1}>
            <Grid container wrap="nowrap" spacing={16}>
              <Grid item>
                <Avatar className={classes.grey}>W</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap>{message}</Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" className={classes.button}>
                  Contestar
                </Button>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper1}>
            <Grid container wrap="nowrap" spacing={16}>
              <Grid item>
                <Avatar className={classes.grey}>W</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap>{message}</Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" className={classes.button}>
                  Contestar
                </Button>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper1}>
            <Grid container wrap="nowrap" spacing={16}>
              <Grid item>
                <Avatar className={classes.grey}>W</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Typography noWrap>{message}</Typography>
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" className={classes.button}>
                  Contestar
                </Button>
              </Grid>
            </Grid>
          </Paper>

        </GridItem>
      </GridContainer>

    );
  }
}

export default withStyles(styles)(ShowMessageList);