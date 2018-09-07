import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import Checkbox from '@material-ui/core/Checkbox';

import Tooltip from '@material-ui/core/Tooltip';


const rows = [
    { id: 'id', numeric: false, disablePadding: true, label: 'Id' },
    { id: 'nombreUsuario', numeric: true, disablePadding: false, label: 'Nombre Usuario' },
    { id: 'nombre', numeric: true, disablePadding: false, label: 'Nombre' },
    { id: 'tipoUsuario', numeric: true, disablePadding: false, label: 'Tipo Usuario' },
    { id: 'fechaCreacion', numeric: true, disablePadding: false, label: 'Fecha Creacion' },
];



const styles = theme => ({
  
    TableRow:{
        textAlign:'center'
    }

});
class EnhancedTableHead extends React.Component {

    
    state = {
       open : false
    };


    

createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
};

handleDelete = () => {
    console.log("Eliminar");
    this.setState({ open: true });
};

   

render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, selected} = this.props;
    const { classes } = this.props;
    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox" className={classes.TableRow}>
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={numSelected === rowCount}
                        onChange={onSelectAllClick}
                    />
                </TableCell>
                {rows.map(row => {
                    return (
                        <TableCell
                            key={row.id}
                            numeric={row.numeric}
                            padding={row.disablePadding ? 'none' : 'default'}
                            sortDirection={orderBy === row.id ? order : false}
                            className={classes.TableRow}
                        >
                            <Tooltip
                                title="Sort"
                                placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                                enterDelay={300}
                            >
                                <TableSortLabel
                                    active={orderBy === row.id}
                                    direction={order}
                                    onClick={this.createSortHandler(row.id)}
                                >
                                    {row.label}
                                </TableSortLabel>
                            </Tooltip>
                        </TableCell>
                    );
                }, this)}
            </TableRow>
        </TableHead>
    );
}
}

EnhancedTableHead.propTypes = {
numSelected: PropTypes.number.isRequired,
onRequestSort: PropTypes.func.isRequired,
onSelectAllClick: PropTypes.func.isRequired,
order: PropTypes.string.isRequired,
orderBy: PropTypes.string.isRequired,
rowCount: PropTypes.number.isRequired,
};



export default withStyles(styles)(EnhancedTableHead);