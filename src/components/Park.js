import * as React from "react";
import {
    Create, Datagrid, Edit, List, NumberField,
    NumberInput, SimpleForm,
    TextInput
} from "react-admin";

export const ParkList = (props) => (
    <List>
      <Datagrid rowClick="edit">
        <NumberField source="id" />
        <NumberField source="lotacao" />
        <NumberField source="precos" />
        <NumberField source="vagas" />
        <NumberField source="clientes" />
        <NumberField source="horistas" />
      </Datagrid>
    </List>
  );
  
  export const ParkEdit = (props) => (

    <>
    <h1>Editar Estacionamento</h1>
    <Edit>
      <SimpleForm>
        <NumberInput source="lotacao" />
        <NumberInput source="precos" />
        <NumberInput source="vagas" />
        <NumberInput source="clientes" />
        <NumberInput source="horistas" />
      </SimpleForm>
    </Edit>
    </>
  );
  
  export const ParkCreate = (props) => (
    <>
    <h1>Criar Estacionamento</h1>
    
    <Create {...props}>
      <SimpleForm>
        <NumberInput source="id" />
        <NumberInput source="lotacao" />
        <NumberInput source="precos" />
        <NumberInput source="vagas" />
        <NumberInput source="clientes" />
        <NumberInput source="horistas" />
      </SimpleForm>
    </Create>
    </>
  );
  