import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components

import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";

import avatar from "../../assets/img/faces/marc.jpg";
import rappiAvatar from "../../assets/img/faces/rappi.png";
import TableDynamic from "../../components/Table/TableDynamic";

import { db } from '../../config/constants.jsx';
import { Redirect } from 'react-router-dom';


const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

let counter = 0;
function createData(idRastreo, cliente, telefono, direccion, descripcion) {
  counter += 1;
  return { idRastreo, cliente, telefono, direccion, descripcion };
}

function createDataEnvios(idRastreo, cliente, telefono, direccion, direccionShort, descripcion, descripcionShort, idEnvios) {
  return { idRastreo, cliente, telefono, direccion, direccionShort, descripcion, descripcionShort, idEnvios };
}

const data = [
  createData('12312', 'Elmer Padilla', '9898-9898', 'ciudad 1, colonia 1 casa 1', 'es un paquete de prueba', ""),
]

const mostrarDatos = [
  { campo: "idRastreo", enlace: false, pathname: "" },
  { campo: "cliente", enlace: false, pathname: " " },
  { campo: "telefono", enlace: false, pathname: " " },
  { campo: "direccionShort", enlace: false, pathname: " " },
  { campo: "descripcionShort", enlace: false, pathname: " " }

]

const rows = [
  { id: 'idRegistro', numeric: false, disablePadding: true, label: 'Id' },
  { id: 'idRastreo', numeric: false, disablePadding: false, label: 'Codigo Rastreo' },
  { id: 'cliente', numeric: false, disablePadding: false, label: 'Cliente' },
  { id: 'telefono', numeric: false, disablePadding: false, label: 'Telefono' },
  { id: 'direccionShort', numeric: false, disablePadding: false, label: 'Direccion' },
  { id: 'descripcionShort', numeric: false, disablePadding: false, label: 'Descripcion' },
  { id: 'opcion', numeric: false, disablePadding: false, label: 'Opciones' },
];

function createDataManifest(codigoEnvio, fechaCreacion, estado, move) {

  return { codigoEnvio, fechaCreacion, estado, move };
}

class NuevoEnvio extends React.Component {

  state = {
    valor: {},
    actualizar: false,
    data: [],
    fechaCreacion: '',
    codigoEnvio: '',
    estado: '',
    toEnvios:false

  }

  componentDidMount() {
    const { valor } = this.props.location.state
    console.log(valor)
    if (valor != 'NA') {

      this.setState(state => ({
        actualizar: !state.actualizar
      }));


      var docRef = db.collection("move")

      valor.move.map(function (x) {


        docRef.doc(x).get().then(function (doc) {
          if (doc.exists) {
            this.setState({ data: [...this.state.data, createDataEnvios(doc.data().id, doc.data().idRastreo, doc.data().cliente, doc.data().telefono, doc.data().direccion, String(doc.data().direccion).substr(0, 10), doc.data().descripcion, String(doc.data().descripcion).substr(0, 10), doc.id)] })

          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }.bind(this)).catch(function (error) {
          console.log("Error getting document:", error);
        });


      }.bind(this))

    }

  }

  handleActualizar = () => {


  }

  handleSaveDataJson = (value) => {
    console.log(value)
    this.setState({ data: value })

  };

  handleSaveDataJsonDB = () => {

    

    console.log(this.state.data)
    const newMoves = db.collection("move");
    const newManifest = db.collection("manifest").doc();


    let moves = []
    this.state.data.map(function (x) {
      console.log(x)

      newMoves.add(x).then(function (docRef) {

        moves.push(docRef.id)

        newManifest.set(createDataManifest(this.state.codigoEnvio, this.state.fechaCreacion, this.state.estado, moves)).then(function (docRef) {

        }.bind(this))
          .catch(function (error) {
            console.error("Error adding document: ", error);
          })

      }.bind(this))
        .catch(function (error) {
          console.error("Error adding document: ", error);
        })
    }.bind(this))

    this.setState(() => ({
      toEnvios: true
    }))

  };


  handleChangeInput = event => {
    this.setState({ [event.target.id]: event.target.value })
  };



  render() {
    const { valor } = this.props.location.state


    const { classes } = this.props;


    if (this.state.toEnvios === true) {
      return <Redirect to='/envios' />
    }

    return (
      <div>
        <GridContainer>

          <GridItem xs={12} sm={12} md={12}>
            <Card>
              {this.state.actualizar ?
                <CardHeader color="success">
                  <h4 className={classes.cardTitleWhite}>Editando informacion del paquete</h4>

                </CardHeader>
                :
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Registro de un nuevo envio</h4>

                </CardHeader>
              }
              <CardBody>
                <GridContainer>

                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Codigo de Envio"
                      id="codigoEnvio"

                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: this.state.actualizar,
                        onChange: this.handleChangeInput
                      }}
                      defaultValue={valor.id}

                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Estado"
                      id="estado"
                      inputProps={{
                        disabled: this.state.actualizar,
                        onChange: this.handleChangeInput
                      }}
                      defaultValue={valor.estadoEnvio}

                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Fecha Creacion"
                      id="fechaCreacion"
                      inputProps={{
                        disabled: this.state.actualizar,
                        onChange: this.handleChangeInput
                      }}

                      defaultValue={valor.fechaElaboracion}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <TableDynamic
                      title={"Lista de Usuarios"}
                      colortable={"success"}
                      data={this.state.data}
                      rows={rows}
                      mostrarDatos={mostrarDatos}
                      handleSaveTableJson={this.handleSaveDataJson.bind(this)}
                    />

                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                {this.state.actualizar ?
                  <Button onClick={this.handleActualizar} color="success">Actualizar informacion</Button>
                  : <Button onClick={this.handleSaveDataJsonDB} color="primary">Solicitar Entrega</Button>}
              </CardFooter>
            </Card>
          </GridItem>

        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(NuevoEnvio);
