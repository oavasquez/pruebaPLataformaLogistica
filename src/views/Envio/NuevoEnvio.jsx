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
function createData(          idRastreo, cliente,telefono, direccion, descripcion){
        counter += 1;
        return { id: counter, idRastreo, cliente,telefono, direccion, descripcion};
}

const data= [
  createData('12312', 'Elmer Padilla','9898-9898','ciudad 1, colonia 1 casa 1','es un paquete de prueba',""),
]

const mostrarDatos=[   
  {campo : "idRastreo",enlace:false, pathname:""},
  {campo : "cliente",enlace:false, pathname:" "},
  {campo : "telefono",enlace:false, pathname:" "},
  {campo : "direccionShort",enlace:false, pathname:" "},
  {campo : "descripcionShort",enlace:false, pathname:" "} 
  
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


class NuevoEnvio extends React.Component {

  state = {
    valor: {},
    actualizar: false
  }

  handleActualizar = () => {
    this.setState(state => ({
      actualizar: !state.actualizar
    }));

  }


  render() {
      
    

    const { classes } = this.props;

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
                      id="usuario"
                     
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: this.state.actualizar
                      }}

                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Estado"
                      id="username"
                      inputProps={{
                        disabled: this.state.actualizar
                      }}
                     
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="fecha"
                      id="email"
                      inputProps={{
                        disabled: this.state.actualizar
                      }}
                     
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
                   data={data}
                   rows={rows}
                   mostrarDatos={mostrarDatos}
                  />
                    
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                {this.state.actualizar ?
                  <Button onClick={this.handleActualizar} color="success">Actualizar informacion</Button>
                  : <Button onClick={this.handleActualizar} color="primary">Solicitar Entrega</Button>}
              </CardFooter>
            </Card>
          </GridItem>
          
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(NuevoEnvio);
