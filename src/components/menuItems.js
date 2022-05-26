import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ParkIcon from "@mui/icons-material/LocalParking";
import CarIcon from "@mui/icons-material/CarCrash";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const menuItems = (
  <React.Fragment>
    <Link
      to="/"
      style={{
        textDecoration: "none",
        color: "#5b5d6b",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Link
      to="/veiculos"
      style={{
        textDecoration: "none",
        color: "#5b5d6b",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <CarIcon />
        </ListItemIcon>
        <ListItemText primary="Veiculos" />
      </ListItemButton>
    </Link>
    <Link
      to="/clientes"
      style={{
        textDecoration: "none",
        color: "#5b5d6b",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Clientes" />
      </ListItemButton>
    </Link>
    <Link
      to="/estacionamento"
      style={{
        textDecoration: "none",
        color: "#5b5d6b",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ListItemButton>
        <ListItemIcon>
          <ParkIcon />
        </ListItemIcon>
        <ListItemText primary="Estacionamento" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);
