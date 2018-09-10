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


class Paquete extends React.Component {

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
    const { valor } = this.props.location.state
    const { classes } = this.props;

    return (
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={rappiAvatar} alt="..." />
                </a>
              </CardAvatar>

              <CardBody profile>
                <h6 className={classes.cardCategory}>{valor.tipoCliente}</h6>
                <h4 className={classes.cardTitle}>{valor.nombre}</h4>
                <p className={classes.description}>
                  Hitorial de mensajes con el cliente
                  </p>

                <Button color="info" round>
                  Contactar Encargado
                </Button>
                <Button color="info" round>
                  Ver Perfil
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={3}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>

              <CardBody profile>
                <h6 className={classes.cardCategory}>{valor.tipoCliente}</h6>
                <h4 className={classes.cardTitle}>{valor.nombre}</h4>
                <p className={classes.description}>
                  Historial de mensajes con el encargado
                  </p>
                <Button color="success" round>
                  Contactar cliente
                </Button>
                <Button color="success" round>
                  Ver Perfil
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              {this.state.actualizar ?
                <CardHeader color="success">
                  <h4 className={classes.cardTitleWhite}>Editando informacion del paquete</h4>
                 
                </CardHeader>
                :
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Informacion del Paquete</h4>
                 
                </CardHeader>
              }
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                      labelText="Nombre del paquete"
                      id="usuario"
                      value={valor.entrega}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        disabled: !this.state.actualizar
                      }}

                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                    <CustomInput
                      labelText="Nombre de usuario"
                      id="username"
                      inputProps={{
                        disabled: !this.state.actualizar
                      }}
                      value={valor.nombre}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Correo electronico"
                      id="email"
                      inputProps={{
                        disabled: !this.state.actualizar
                      }}
                      value={valor.correo}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      value={valor.pais}
                      labelText="Pais"
                      id="city"
                      inputProps={{
                        disabled: !this.state.actualizar
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      value={valor.nombre}
                      labelText="Ciudad"
                      value={valor.ciudad}
                      id="country"
                      inputProps={{
                        disabled: !this.state.actualizar
                      }}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Numero de contacto"
                      id="telefono"
                      inputProps={{
                        disabled: !this.state.actualizar
                      }}
                      value={valor.telefono}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter>
                {this.state.actualizar ?
                  <Button onClick={this.handleActualizar} color="success">Aplicar Cambios</Button>
                  : <Button onClick={this.handleActualizar} color="primary">Actualizar informacion</Button>}
              </CardFooter>
            </Card>
          </GridItem>
          
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(Paquete);
