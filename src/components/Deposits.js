import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Title from "./Title";

export default function Deposits() {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };
  const dateToday = new Date().toLocaleString("pt-BR", options);
  return (
    <React.Fragment>
      <Title>Receita Diária</Title>
      <Typography component="p" variant="h4">
        R$666,00
      </Typography>
      <Box
        sx={{
          height: 100,
        }}
      />
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {dateToday.toLocaleUpperCase()}
      </Typography>
    </React.Fragment>
  );
}
