import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Clientes from "../pages/Clientes";
import Dashboard from "../pages/Dashboard";
import Estacionamento from "../pages/Estacionamento";
import Veiculos from "../pages/Veiculos";

export function Routes() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/veiculos" exact component={Veiculos} />
      <Route path="/clientes" exact component={Clientes} />
      <Route path="/estacionamento" exact component={Estacionamento} />
      </Switch>
    </Router>
  );
}
