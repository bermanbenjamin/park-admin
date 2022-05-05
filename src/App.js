import jsonServerProvider from "ra-data-json-server";
import * as React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import { CarCreate, CarEdit, CarList } from "./components/Car";
import { ClientCreate, ClientEdit, ClientList } from "./components/Client";
import { ParkCreate, ParkEdit, ParkList } from "./components/Park";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource
      name="users"
      list={ClientList}
      edit={ClientEdit}
      create={ClientCreate}
    />
    <Resource
      name="posts"
      list={ParkList}
      edit={ParkEdit}
      create={ParkCreate}
    />
    <Resource name="estacionamento" list={ListGuesser} />
    
    <Resource
      name="posts"
      list={CarList}
      edit={CarEdit}
      create={CarCreate}
    />
    <Resource name="veiculo" list={ListGuesser} />
  </Admin>
);

export default App;
