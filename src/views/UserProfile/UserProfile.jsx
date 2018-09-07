import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
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
import { rename } from "fs";

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


class UserProfile extends React.Component {

  state = {
    user: {},
    actualizar: false
  }


  handleActualizar = () => {
    this.setState(state => ({
      actualizar: !state.actualizar
    }));

  }

  render() {

    const { classes } = this.props;

    const { user } = this.props.location.state
    console.log(user) // "bar"

    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              {this.state.actualizar ?
                <CardHeader color="success">
                  <h4 className={classes.cardTitleWhite}>Editando perfil del usuario</h4>
                  <p className={classes.cardCategoryWhite}>Perfil del usuario</p>
                </CardHeader> 
                :
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Informacion del Perfil</h4>
                  <p className={classes.cardCategoryWhite}>Perfil del usuario</p>
                </CardHeader>
              }
              <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <CustomInput
                      labelText="Usuario"
                      id="usuario"
                      value={user.nombreUsuario}
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
                      value={user.nombre}
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
                      value={user.correo}
                      formControlProps={{
                        fullWidth: true
                      }}
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={4}>
                    <CustomInput
                      value={user.pais}
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
                      value={user.nombre}
                      labelText="Ciudad"
                      value={user.ciudad}
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
                      value={user.telefono}
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
                  : <Button onClick={this.handleActualizar} color="primary">Actualizar perfil</Button>}
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>

              <CardBody profile>
                <h6 className={classes.cardCategory}>{user.tipoCliente}</h6>
                <h4 className={classes.cardTitle}>{user.nombre}</h4>
                <p className={classes.description}>
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.
              </p>
                <Button color="primary" round>
                  Bloquear
              </Button>
                <Button color="danger" round>
                  Eliminar
              </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(UserProfile);
