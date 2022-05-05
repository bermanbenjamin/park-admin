import * as React from "react";
import {
    Create, Datagrid, Edit, List, NumberField,
    NumberInput, SimpleForm,
    TextField,
    TextInput
} from "react-admin";

// + Id: Long
// + placa: String
// + cor: String
// + modelo: String
// + dono: Cliente

export const CarList = (props) => (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <TextField source="placa" />
        <TextField source="cor" />
        <TextField source="modelo" />
        <TextField source="dono" />
      </Datagrid>
    </List>
  );
  
  export const CarEdit = (props) => (
    <>
    <h1>Editar Carro</h1>
    <Edit>
      <SimpleForm>
        <NumberInput source="id" />
        <TextInput source="placa" />
        <TextInput source="cor" />
        <TextInput source="modelo" />
        <TextInput source="dono" />
      </SimpleForm>
    </Edit>
    </>
  );
  
  export const CarCreate = (props) => (

    <>
    <h1>Criar Carro</h1>
    <Create {...props}>
      <SimpleForm>
      <NumberInput source="id" />
        <TextInput source="placa" />
        <TextInput source="cor" />
        <TextInput source="modelo" />
        <TextInput source="dono" />
      </SimpleForm>
    </Create>
    </>
  );
  