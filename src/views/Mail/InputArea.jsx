import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Form, Field } from "react-final-form";

const InputArea = ({  }) => (
  <Form
    
    validate={values => {
      return !values.text ? "text missing" : undefined;
    }}
    render={({ handleSubmit, pristine, invalid, form: { reset } }) => {
      return (
        <Grid container style={{ marginTop: 10 }}>
          
              <TextField
                label="Escribe tu mensaje"
                style={{ flexGrow: 1 }}
                onKeyDown={event => {
                  if (event.key === "Enter") {
                   
                  }
                }}
               
              />
         
          <Button
            variant="raised"
            color="primary"
            style={{ margin: 12 }}
            onClick={() => {
              
            }}
          >
            Enviar
          </Button>
        </Grid>
      );
    }}
  />
);

export default InputArea;