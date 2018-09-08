import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';



const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 220,
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85),
            }
            : {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark,
            },
    spacer: {
        flex: '1 1 100%',
    },
    actions: {
        color: theme.palette.text.secondary,
    },
    title: {
        flex: '0 0 auto',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },    
});

class EnhancedTableToolbar extends React.Component {

    state = {
        open: true,
        nombreColumna: 'id',
        valorBuscar:  0,
        filtrar:false
    }

    handleDelete = () => {
        this.setState({ open: false })
        this.props.handleOpenModal(true)

    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        const values={}
        console.log (event.target.name)
    };

    handleChangeTextField = event => {
        this.setState({ [event.target.name]: event.target.value });
        let values={}
        if(event.target.value!=""){
            this.setState({ filtrar: true });
            values={
                columnaNombre:this.state.nombreColumna,
                valorBuscar:event.target.value,
                filtrar:true
            }
        }else{
            this.setState({ filtrar: false });
            values={
                columnaNombre:this.state.nombreColumna,
                valorBuscar:event.target.value,
                filtrar:false
            }
        }
        this.props.searchValues(values)
      
    };

    render() {

        const { numSelected, classes, selected, rows } = this.props;


        return (
            <Toolbar
                className={classNames(classes.root, {
                    [classes.highlight]: numSelected > 0,
                })}
            >
                <div className={classes.title}>
                    {numSelected > 0 ? (
                        <Typography color="inherit" variant="subheading">
                            {numSelected} Elementos selecionados
          </Typography>
                    ) : (
                            <div>
                                 <FormControl className={classes.formControl}>
                                <TextField
                                    name="valorBuscar"
                                    id="buscar"
                                    label="Buscar"
                                    defaultValue=""
                                    className={classes.textField}
                                    margin="normal"
                                    onChange={this.handleChangeTextField }
                                />
                                 </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel htmlFor="columna">Nombre de columna</InputLabel>
                                    <Select
                                       
                                        name="nombreColumna"
                                        inputProps={{
                                            name: 'nombreColumna',
                                            id: 'columna',
                                        }}
                                        value={this.state.nombreColumna}
                                        onChange={this.handleChange}
                                    >
                                        <MenuItem value="" disabled>Selecciona una columna</MenuItem>
                                        {rows.map(n=>{
                                            console.log(n.id)
                                            return(
                                            <MenuItem value={n.id}>{n.label}</MenuItem>
                                            )
                                        })}
                                    </Select>
                                </FormControl>
                            </div>
                        )}
                </div>
                <div className={classes.spacer} />
                <div className={classes.actions}>

                    {numSelected > 0 ? (
                        <Tooltip title="Delete" >
                            <IconButton aria-label="Delete" onClick={this.handleDelete} >
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                    ) : (

                            <Tooltip title="Filtrar lista">
                                <IconButton aria-label="Filter list">
                                    <FilterListIcon />
                                </IconButton>
                            </Tooltip>
                        )}
                </div>
            </Toolbar>
        );
    }
};

EnhancedTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired,
};

export default withStyles(toolbarStyles)(EnhancedTableToolbar);