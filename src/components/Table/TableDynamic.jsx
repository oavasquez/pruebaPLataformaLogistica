import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import AlertDialog from '../Alert/Alert';
import EnhancedTableToolbar from '../TableToolbar/EnhancedTableToolbar';
import EnhancedTableHead from '../TableHead/EnhancedTableHead';
import Notifications from '../Notifications/Notifications';
import ModalFormulario from '../Modal/Modal';
import Delete from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';


import CustomInput from "../CustomInput/CustomInput.jsx";

import AutoComplete from '../Autocomplete/Autocomplete'

import IconButton from "@material-ui/core/IconButton";



import { Link } from "react-router-dom";


function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}


const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 1,
    },
    table: {
        minWidth: 1020,
        minHeight: 'auto',
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    TableRow: {
        textAlign: 'center'
    }

});
let counter = 0;
function createData(idRastreo, cliente, telefono, direccion, descripcion) {
    counter += 1;
    return { id: counter, idRastreo, cliente, telefono, direccion, descripcion };
}



class TableDynamic extends React.Component {

    
    

    state = {
        open: false,
        openNotificacion: false,
        order: 'asc',
        orderBy: 'id',
        selected: [],
        columnaNombre: '',
        valorBuscar: 0,
        filtrar: false,
        data: [],
        page: 0,
        rowsPerPage: 3,
        modalOpen: false,
        telefono: '',
        descripcion: '',
        direccion: '',
        nombreCliente: ''

    };

    handleSetNombre = (values) => {
        this.setState({ nombreCliente: values })
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({ order, orderBy });
    };

    handleSelectAllClick = event => {
        if (event.target.checked) {
            this.setState(state => ({ selected: state.data.map(n => n.id) }));
            return;
        }
        this.setState({ selected: [] });
    };

    handleClick = (event, id) => {
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        this.setState({ selected: newSelected });
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    cambioEstadoModal(values) {
        this.setState({
            open: values,
            openNotificacion: !values,
        });
    }



    filtrarTabla(values) {

        this.setState({
            columnaNombre: values.columnaNombre,
            valorBuscar: values.valorBuscar,
            filtrar: values.filtrar
        });
    }

    handleModalOpen = () => {
        this.setState({ modalOpen: true });
    };

    handleModalClose = () => {
        this.setState({ modalOpen: false });

    };

    handleModalCloseSave = () => {
        this.setState({ modalOpen: false });
        let d = new Date();
        let t= d.getTime();
        this.setState({ data: [...this.state.data, createData(t.toString().substr(8, t.toString().lenght), this.state.nombreCliente, this.state.telefono, this.state.direccion, this.state.descripcion, "")] });
    };

    handleChangeInput = event => {
        this.setState({ [event.target.id]: event.target.value })
    };




    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render() {
        const { classes, title, colortable, rows, mostrarDatos } = this.props;
        const { order, orderBy, selected, rowsPerPage, page, open, openNotificacion, modalOpen } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.state.data.length - page * rowsPerPage);

        return (


            <GridContainer>

                <ModalFormulario
                    open={modalOpen}
                    close={this.handleModalClose}
                >
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <AutoComplete
                                seleccionNombre={this.handleSetNombre}
                            />
                        </GridItem>


                        <GridItem xs={12} sm={12} md={12}>
                            <CustomInput
                                labelText="Telefono"
                                id="telefono"
                                inputProps={{
                                    disabled: this.state.actualizar,
                                    onChange: this.handleChangeInput
                                }}

                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                            <CustomInput
                                labelText="Direccion"
                                id="direccion"
                                inputProps={{
                                    disabled: this.state.actualizar,
                                    onChange: this.handleChangeInput
                                }}

                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={12}>
                            <CustomInput
                                labelText="Descripcion"
                                id="descripcion"
                                inputProps={{
                                    disabled: this.state.actualizar,
                                    onChange: this.handleChangeInput
                                }}

                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                    </GridContainer>
                    <GridContainer spacing={8}>
                        <GridItem xs={12} sm={12} md={2}>
                            <Button onClick={this.handleModalCloseSave}>Guardar</Button>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                            <Button onClick={this.handleModalClose} >Cancelar</Button>
                        </GridItem>
                    </GridContainer>
                </ModalFormulario>


                <GridItem xs={12} sm={12} md={12}>
                    <div className={classes.tableWrapper}>
                        <Table className={classes.table} aria-labelledby="tableTitle">
                            <EnhancedTableHead
                                rows={rows}
                                numSelected={selected.length}
                                selected={selected}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={this.handleSelectAllClick}
                                onRequestSort={this.handleRequestSort}
                                rowCount={this.state.data.length}
                            />
                            <TableBody>
                                {

                                    this.state.data.length > 0 ? (


                                        this.state.data
                                            .filter(
                                                this.state.filtrar ?
                                                    (function (x) {
                                                        return String(x[this.state.columnaNombre]).toLowerCase().indexOf(this.state.valorBuscar.toLowerCase()) > -1;
                                                    }.bind(this)) : (
                                                        x => x
                                                    ))
                                            .sort(getSorting(order, orderBy))
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map(n => {
                                                const isSelected = this.isSelected(n.id);
                                                return (

                                                    <TableRow
                                                        hover

                                                        role="checkbox"
                                                        aria-checked={isSelected}
                                                        tabIndex={-1}
                                                        key={n.id}
                                                        selected={isSelected}
                                                    >
                                                        <TableCell onClick={event => this.handleClick(event, n.id)} className={classes.TableRow} padding="checkbox">
                                                            <Checkbox checked={isSelected} />
                                                        </TableCell>
                                                        <TableCell className={classes.TableRow} component="th" scope="row" padding="none">
                                                            {n.id}
                                                        </TableCell>

                                                        {mostrarDatos.map(x => {
                                                            return (
                                                                x.enlace ? (
                                                                    <TableCell className={classes.TableRow} component="th" scope="row" padding="none">
                                                                        <Link to={{ pathname: x.pathname, state: { valor: n } }} key={n[x.campo]}>{n[x.campo]}</Link>
                                                                    </TableCell>
                                                                )
                                                                    : (
                                                                        <TableCell zeroMinWidth className={classes.TableRow} >{n[x.campo]}</TableCell>)
                                                            )

                                                        })}
                                                        <TableCell>
                                                            <IconButton variant="fab" color='primary' aria-label="Add" >
                                                                <EditIcon />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })

                                    ) :
                                        (
                                           <div></div>

                                        )
                                }

                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>

                                    <TableCell>
                                        <IconButton onClick={this.handleModalOpen} variant="fab" color='primary' aria-label="Add" >
                                            <AddIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>

                                {emptyRows > 0 && (
                                    <TableRow style={{ height: 49 * emptyRows }}>
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )


                                }
                            </TableBody>
                        </Table>
                    </div>
                    <TablePagination
                        component="div"
                        count={this.state.data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        backIconButtonProps={{
                            'aria-label': 'Previous Page',
                        }}
                        nextIconButtonProps={{
                            'aria-label': 'Next Page',
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />

                </GridItem>
            </GridContainer>



        );
    }
}

TableDynamic.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableDynamic);