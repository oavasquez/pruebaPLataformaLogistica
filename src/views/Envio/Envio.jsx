import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";

import TableUser from "../../components/TableUser/TableUser";
import AlertDialog from "../../components/Alert/Alert";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';


import { NavLink } from "react-router-dom";

let counter = 0;
function createData(id, fechaElaboracion, estadoEnvio, idRastreo, nombreCliente, estado, numeroContacto, direccionContacto) {
    return { id, fechaElaboracion, estadoEnvio, idRastreo, nombreCliente, estado, numeroContacto, direccionContacto };
}

const data = [
    createData('12123345', '12/09/2018', 'Nuevo', '12331', 'jimenez ramirez', '9997-9798', 'Fco. Morazán, Tegucigalpa MDC, Blvd. Suyapa Contiguo Hospital Escuela.'),
    createData('12324346', '01/09/2018', 'Solicitado', '12345', 'Ana Pineda', '9997-9798', 'Fco. Morazán, Tegucigalpa MDC, Blvd. Suyapa Contiguo Hospital Escuela.'),
    createData('12323467', '10/09/2018', 'Aceptado', '14353', 'Jose Gonzales', '9997-9798', 'Fco. Morazán, Tegucigalpa MDC, Blvd. Suyapa Contiguo Hospital Escuela.'),
    createData('12312325', '11/09/2018', 'Aceptado', '12343', 'Pedro Mejia', '9997-9798', 'Fco. Morazán, Tegucigalpa MDC, Blvd. Suyapa Contiguo Hospital Escuela.'),
    createData('12123423', '15/09/2018', 'A recoger', '45435', 'Juan Salgado', '9997-9798', 'Fco. Morazán, Tegucigalpa MDC, Blvd. Suyapa Contiguo Hospital Escuela.'),
    createData('12313223', '13/09/2018', 'Recibido', '45674', 'Allan Lopez', '9997-9798', 'Fco. Morazán, Tegucigalpa MDC, Blvd. Suyapa Contiguo Hospital Escuela.'),

]

const mostrarDatos = [
    { campo: "fechaElaboracion", enlace: true, pathname: " " },
    { campo: "estadoEnvio", enlace: false, pathname: " " },
    { campo: "idRastreo", enlace: false, pathname: " " },
    { campo: "nombreCliente", enlace: false, pathname: " " }

]

const rows = [
    { id: 'id', numeric: false, disablePadding: false, label: 'Codigo de Envio' },
    { id: 'fechaElaboracion', numeric: false, disablePadding: false, label: 'Fecha Elaboracion' },
    { id: 'estadoEnvio', numeric: false, disablePadding: false, label: 'Estado del envio' },
    { id: 'idRastreo', numeric: false, disablePadding: false, label: 'Codigo de Rastreo' },
    { id: 'nombreCliente', numeric: false, disablePadding: false, label: 'Nombre Cliente' },
];

const styles = theme => ({
    button: {
        margin: '0px',
        top: 'auto',
        right: '20px',
        bottom: '20px',
        left: 'auto',
        position: 'fixed',

    },
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 'auto',
        position: 'relative',
        minHeight: 200
    }

});

class Envio extends React.Component {

    render() {
        const { classes } = this.props;


        return (
            <div className={classes.root}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <TableUser
                            title={"Registro de envios"}
                            colortable={"info"}
                            data={data}
                            rows={rows}
                            mostrarDatos={mostrarDatos}
                        />
                    </GridItem>
                </GridContainer>
                < NavLink to={"/nuevoEnvio"}
                >
                    <Button variant="fab" className={classes.button} color='primary'>
                        <AddIcon />
                    </Button>
                </NavLink>
            </div>
        );
    }
}

export default withStyles(styles)(Envio);