import jsonServerProvider from 'ra-data-json-server';
import * as React from "react";
import { Admin, ListGuesser, Resource } from 'react-admin';
import { DriversPage } from "./pages/Drivers";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
      <Admin dataProvider={dataProvider}>
          <Resource name="posts" list={ListGuesser} create={DriversPage} />
          <Resource name="users" list={ListGuesser}/>
      </Admin>
  );
  

export default App;