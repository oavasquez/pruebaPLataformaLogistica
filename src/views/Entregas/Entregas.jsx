import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";

import TableUser from "../../components/TableUser/TableUser";
import AlertDialog from "../../components/Alert/Alert";

let counter = 0;
function createData(entrega,cliente,tipoCliente, tiempo, estado,){
        counter += 1;
        return { id: counter, entrega, cliente,tipoCliente, tiempo, estado,};
}

const data= [
  createData('Arroz chino', 'jimenez ramirez', 'Cliente Frecuente','2 horas','Pendiente'),
  createData('Pasteles', 'Ana Pineda', 'Cliente Mayorista','2 horas','En espera'),
  createData('Ropa', 'Jose Gonzales', 'Cliente Preferencial','3 horas','En progreso'),
  createData('Calzado americano', 'Pedro Mejia', 'Cliente Antiguo','5 horas','Entregado'),
  createData('comida la buena', 'Juan Salgado', 'Cliente Normal','3 horas','Entregado'),
  createData('maquilaje', 'Allan Lopez', 'Cliente Normal','4 horas','Entregado'),
  
]

const mostrarDatos=[  
  {campo : "entrega",enlace:true, pathname:"/paquete"},
  {campo : "cliente",enlace:false, pathname:" "},
  {campo : "tipoCliente",enlace:false, pathname:" "},
  {campo : "tiempo",enlace:false, pathname:" "},
  {campo : "estado",enlace:false, pathname:" "} 
  
]

const rows = [
  { id: 'id', numeric: false, disablePadding: true, label: 'Id' },
  { id: 'entrega', numeric: false, disablePadding: false, label: 'Nombre de la entrega' },
  { id: 'cliente', numeric: false, disablePadding: false, label: 'Nombre Cliente' },
  { id: 'tipoCliente', numeric: false, disablePadding: false, label: 'Tipo de Cliente' },
  { id: 'tiempo', numeric: false, disablePadding: false, label: 'Tiempo de entrega' },
  { id: 'estado', numeric: false, disablePadding: false, label: 'Estado' },
];

const styles = {

};

class Entrega extends React.Component {
  
  render(){
  const { classes } = this.props;

  
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <TableUser
        title={"Lista de Entregas"}
        colortable={"warning"}
        data={data}
        rows={rows}
        mostrarDatos={mostrarDatos}
        />
      </GridItem>
    </GridContainer>
  );
}
}

export default withStyles(styles)(Entrega);
