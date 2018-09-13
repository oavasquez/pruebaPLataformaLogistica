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

import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import Card from "../Card/Card";
import CardHeader from "../Card/CardHeader";
import CardBody from "../Card/CardBody";
import AlertDialog from '../Alert/Alert';
import EnhancedTableToolbar from '../TableToolbar/EnhancedTableToolbar';
import EnhancedTableHead from '../TableHead/EnhancedTableHead';
import Notifications from '../Notifications/Notifications';
import ModalFormulario from '../Modal/Modal';
import Delete from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import SeeIcon from '@material-ui/icons/RemoveRedEye';


import CustomInput from "../CustomInput/CustomInput";

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

function createData(idRastreo, cliente, telefono, direccionShort, direccion, descripcionShort, descripcion) {
  
    return { idRastreo, cliente, telefono, direccionShort, direccion, descripcionShort, descripcion };
}

function createDataJson(idRastreo, cliente, telefono, direccionShort, direccion, descripcionShort, descripcion) {

    return {idRastreo, cliente,  telefono, direccionShort, direccion, descripcionShort, descripcion };
}




class TableDynamic extends React.Component {

    constructor(props) {
        super(props)

    }




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
        dataModal: {},
        page: 0,
        rowsPerPage:5,
        modalOpen: false,
        telefono: '',
        descripcion: '',
        direccion: '',
        nombreCliente: '',
        test: '00000',
        single: 'foo',
        actualizarModal: false,
        refreshData: false

    };



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
        this.setState({ dataModal: [{}], nombreCliente: '', idRastreo: '', telefono: '', direccion: '', descripcion: '' })
    };

    handleModalOpenSee = (event, n) => {
        console.log(n)
        this.setState({ 
            modalOpen: true, 
            dataModal: n, 
            nombreCliente: n.cliente, 
            telefono: n.telefono,
            descripcion: n.descripcion,
            direccion: n.direccion,
            actualizarModal: true });




    };

    handleModalClose = () => {
        this.setState({ modalOpen: false });


    };

    handleModalCloseSave = () => {

        this.setState({ modalOpen: false });
        let d = new Date();
        let t = d.getTime();
        if (this.state.nombreCliente != '' && this.state.telefono != '' && this.state.direccion != '' && this.state.descripcion != '') {
            this.props.handleSaveTableJson(createDataJson(t.toString().substr(8, t.toString().length), this.state.nombreCliente, this.state.telefono, this.state.direccion.toString().substr(0, 10) + '...', this.state.direccion, this.state.descripcion.toString().substr(0, 10) + '...', this.state.descripcion, ""))
       }


    };





    handleModalCloseActualizar = () => {
        this.setState({ modalOpen: false, actualizarModal: false, refreshData: true });
        

        if (this.state.nombreCliente != '' && this.state.telefono != '' && this.state.direccion != '' && this.state.descripcion != '') {


            this.props.handleUpdateTableJson(createDataJson(
                this.state.dataModal.idRastreo, 
                this.state.nombreCliente, 
                this.state.telefono, 
                this.state.direccion.toString().substr(0, 10) + '...', 
                this.state.direccion, 
                this.state.descripcion.toString().substr(0, 10) + '...', 
                this.state.descripcion))

        }

    };

    handleChangeInput = event => {
        this.setState({ [event.target.id]: event.target.value })

    };




    handleSetNombre = (values) => {
        this.setState({ nombreCliente: values })
    }


    isSelected = id => this.state.selected.indexOf(id) !== -1;


    componentDidMount() {
        const { data } = this.props;



    }


    render() {
        const { classes, title, colortable, rows, mostrarDatos, data } = this.props;
        const { order, orderBy, selected, rowsPerPage, page, open, openNotificacion, modalOpen } = this.state;

        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);


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
                                value={this.state.nombreCliente}
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
                                defaultValue={this.state.telefono}

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
                                    onChange: this.handleChangeInput,
                                    multiline: true
                                }}
                                defaultValue={this.state.direccion}
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
                                    onChange: this.handleChangeInput,
                                    multiline: true
                                }}
                                defaultValue={this.state.descripcion}
                                formControlProps={{
                                    fullWidth: true
                                }}
                            />
                        </GridItem>
                    </GridContainer>
                    <GridContainer spacing={8}>
                        {this.state.actualizarModal ? (
                            <GridItem xs={12} sm={12} md={4}>
                                <Button onClick={this.handleModalCloseActualizar}>Actualizar</Button>
                            </GridItem>) :
                            (
                                <GridItem xs={12} sm={12} md={4}>
                                    <Button onClick={this.handleModalCloseSave}>Guardar</Button>
                                </GridItem>
                            )
                        }
                        <GridItem xs={12} sm={12} md={4}>
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
                                rowCount={data.length}
                            />
                            <TableBody>
                                {

                                    data.length > 0 ? (


                                        data.filter(
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
                                                                        <TableCell className={classes.TableRow} key={x.campo} >{n[x.campo]}</TableCell>)
                                                            )

                                                        })}
                                                        <TableCell>
                                                            <IconButton variant="fab" color='primary' aria-label="Add" onClick={event => this.handleModalOpenSee(event, n)} >
                                                                <SeeIcon />
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })

                                    ) :
                                        (
                                            <TableRow>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>

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
                        count={data.length}
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