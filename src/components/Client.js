import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  TextInput,
  NumberField,
  NumberInput,
} from "react-admin";

export const ClientList = (props) => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="nome" />
      <TextField source="perfil" />
      <TextField source="cpf" />
      <NumberField source="telefone" />
      <NumberField source=" veiculos" />
      <NumberField source="assinaturas" />
      <NumberField source="ocorrencias" />
    </Datagrid>
  </List>
);

export const ClientEdit = (props) => (
  <Edit>
    <SimpleForm>
      <TextInput source="nome" />
      <TextInput source="perfil" />
      <NumberInput source="telefone" />
      <NumberInput source="veiculos" />
    </SimpleForm>
  </Edit>
);

export const ClientCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="nome" />
      <TextInput source="perfil" />
      <TextInput source="cpf" />
      <NumberInput source="telefone" />
      <NumberInput source="assinaturas" />
      <NumberInput source="veiculos" />
    </SimpleForm>
  </Create>
);
