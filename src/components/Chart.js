import * as React from "react";
import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData("06:00", 0),
  createData("08:00", 3),
  createData("10:00", 12),
  createData("12:00", 15),
  createData("14:00", 11),
  createData("16:00", 4),
  createData("18:00", 3),
  createData("20:00", 1),
];

export default function Chart() {
  const theme = useTheme();
  var options = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };
  const dateToday = new Date().toLocaleString("pt-BR", options);

  return (
    <React.Fragment>
      <Title>{`Hoje - ${dateToday}`}</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: "middle",
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Carros
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
