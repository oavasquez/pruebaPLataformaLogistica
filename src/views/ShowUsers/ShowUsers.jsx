import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";

import TableUser from "../../components/TableUser/TableUser";


let counter = 0;
function createData(nombreUsuario, nombre, tipoUsuario, correo, telefono,pais,ciudad, fechaCreacion){
        counter += 1;
        return { id: counter, nombreUsuario, nombre, tipoUsuario, correo, telefono,pais, ciudad, fechaCreacion };
}

const data= [
  createData('ramires123', 'jimenez ramirez', 'Cliente','asd@asd.com','123456789','Honduras','Tegucigalpa', '2017-04-03'),
  createData('2vasquezo', 'aOscar Andres Vasquez', 'Cliente','asd@asd.com','123456789','Honduras','Tegucigalpa', '2017-05-03'),
  createData('2vasquezo', 'aOscar Andres Vasquez', 'Cliente','asd@asd.com','123456789','Honduras','Tegucigalpa', '2017-06-03'),
  createData('2vasquezo', 'aOscar Andres Vasquez', 'Cliente','asd@asd.com','123456789','Honduras','Tegucigalpa', '2017-07-03'),
  createData('2vasquezo', 'aOscar Andres Vasquez', 'Cliente','asd@asd.com','123456789','Honduras','Tegucigalpa', '2017-08-03'),
  createData('2vasquezo', 'aOscar Andres Vasquez', 'Cliente','asd@asd.com','123456789','Honduras','Tegucigalpa', '2017-09-03'),
  
]

const mostrarDatos=[  
  {campo : "nombreUsuario",enlace:true, pathname:"/userProfile"},
  {campo : "nombre",enlace:false, pathname:" "},
  {campo : "tipoUsuario",enlace:false, pathname:" "},
  {campo : "fechaCreacion",enlace:false, pathname:" "} 
]

const rows = [
  { id: 'id', numeric: false, disablePadding: true, label: 'Id' },
  { id: 'nombreUsuario', numeric: false, disablePadding: false, label: 'Nombre Usuario' },
  { id: 'nombre', numeric: false, disablePadding: false, label: 'Nombre' },
  { id: 'tipoUsuario', numeric: false, disablePadding: false, label: 'Tipo Usuario' },
  { id: 'fechaCreacion', numeric: false, disablePadding: false, label: 'Fecha Creacion' },
];


const styles = {

};

class TableList extends React.Component {

  render(){
  const { classes } = this.props;
  return (
    <GridContainer> 
      <GridItem xs={12} sm={12} md={12}>
        <TableUser
         title={"Lista de Usuarios"}
         colortable={"success"}
         data={data}
         rows={rows}
         mostrarDatos={mostrarDatos}
        />
      </GridItem>
    </GridContainer>
  );
}
}

export default withStyles(styles)(TableList);
