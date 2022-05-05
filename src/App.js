import jsonServerProvider from 'ra-data-json-server';
import * as React from "react";
import { Admin, ListGuesser, Resource } from 'react-admin';
import { CarPage } from './pages/Car';
import { DriversPage } from "./pages/Drivers";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="cliente" list={ListGuesser} create={DriversPage} />
          <Resource name="estacionamento" list={ListGuesser}/>
          <Resource name="veiculo" list={ListGuesser} />
          <Resource name="users" list={ListGuesser} create={CarPage}/>
      </Admin>
  );
  

export default App;