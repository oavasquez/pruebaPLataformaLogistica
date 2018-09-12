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

import { db } from '../../config/constants.jsx';


function createDataEnvio(idEnvio ,id, fechaElaboracion, estadoEnvio, move) {
    return { idEnvio,id, fechaElaboracion, estadoEnvio, move};
}


const mostrarDatos = [
    { campo: "id", enlace: true, pathname: "/nuevoEnvio" },
    { campo: "fechaElaboracion", enlace: false, pathname: " " },
    { campo: "estadoEnvio", enlace: false, pathname: " " },
   

]

const rows = [
   
    { id: 'id', numeric: false, disablePadding: false, label: 'Codigo de Envio' },
    { id: 'fechaElaboracion', numeric: false, disablePadding: false, label: 'Fecha Elaboracion' },
    { id: 'estadoEnvio', numeric: false, disablePadding: false, label: 'Estado del envio' },
 
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

    constructor(props) {
        super(props);

        this.mostrarDatosBD = this.mostrarDatosBD.bind(this);
    }

    state={
        data:[]
    }

    componentDidMount() {
        this.mostrarDatosBD()
    }


    mostrarDatosBD = () => {
        db.collection("manifest")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    // doc.data() is never undefined for query doc snapshots
                   
                    this.setState({ data: [...this.state.data, createDataEnvio(doc.id, doc.data().codigoEnvio,doc.data().fechaCreacion,doc.data().estado,doc.data().move)] });
                }.bind(this));
            }.bind(this))
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            });


    }

    render() {
        const { classes } = this.props;


        return (
            <div className={classes.root}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                        <TableUser
                            title={"Registro de envios"}
                            colortable={"info"}
                            data={this.state.data}
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