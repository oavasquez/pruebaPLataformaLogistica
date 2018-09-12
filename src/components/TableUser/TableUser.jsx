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

import GridItem from "../Grid/GridItem.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import AlertDialog from '../Alert/Alert';
import EnhancedTableToolbar from '../TableToolbar/EnhancedTableToolbar';
import EnhancedTableHead from '../TableHead/EnhancedTableHead';
import Notifications from '../Notifications/Notifications';
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
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    TableRow: {
        textAlign: 'center'
    }

});

class TableUser extends React.Component {

    state = {
        open: false,
        openNotificacion:false,
        order: 'asc',
        orderBy: 'id',
        selected: [],
        columnaNombre: '',
        valorBuscar: 0,
        filtrar: false,
        data: [{}],
        page: 0,
        rowsPerPage: 10,
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
            openNotificacion:!values,
        });
    }



    filtrarTabla(values) {

        this.setState({
            columnaNombre: values.columnaNombre,
            valorBuscar: values.valorBuscar,
            filtrar: values.filtrar
        });
    }




    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render() {
        const { classes, title, colortable, data, rows, mostrarDatos } = this.props;
        const { order, orderBy, selected, rowsPerPage, page, open, openNotificacion } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return (


            <GridContainer>
                <Notifications
                mensaje="esto es una prueba "
                open={true}
                />
                <AlertDialog
                    open={open}
                    cantidad={selected.length}
                    cerrarModal={this.cambioEstadoModal.bind(this)}
                />
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color={colortable}>
                            <h3 className={styles.cardTitleWhite}>{title}</h3>
                        </CardHeader>
                        <CardBody>
                            <Paper className={classes.root}>
                                <EnhancedTableToolbar
                                    rows={rows}
                                    numSelected={selected.length}
                                    selected={selected}
                                    handleOpenModal={this.cambioEstadoModal.bind(this)}
                                    searchValues={this.filtrarTabla.bind(this)}
                                />
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
                                                data
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
                                                                onClick={event => this.handleClick(event, n.id)}
                                                                role="checkbox"
                                                                aria-checked={isSelected}
                                                                tabIndex={-1}
                                                                key={n.id}
                                                                selected={isSelected}
                                                            >
                                                                <TableCell className={classes.TableRow} padding="checkbox">
                                                                    <Checkbox checked={isSelected} />
                                                                </TableCell>
                                                               

                                                                {mostrarDatos.map(x => {
                                                                    return (
                                                                        x.enlace ? (
                                                                            <TableCell className={classes.TableRow} component="th" scope="row" padding="none">
                                                                                <Link to={{ pathname: x.pathname, state: { valor: n } }} key={n[x.campo]}>{n[x.campo]}</Link>
                                                                            </TableCell>
                                                                        )
                                                                            : (
                                                                                <TableCell className={classes.TableRow} >{n[x.campo]}</TableCell>)
                                                                    )

                                                                })}
                                                            </TableRow>
                                                        );
                                                    })
                                            }
                                            {emptyRows > 0 && (
                                                <TableRow style={{ height: 49 * emptyRows }}>
                                                    <TableCell colSpan={6} />
                                                </TableRow>
                                            )}
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
                            </Paper>
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>



        );
    }
}

TableUser.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableUser);