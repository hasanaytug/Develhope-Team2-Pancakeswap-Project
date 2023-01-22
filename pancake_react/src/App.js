import React from "react";
import SecondChartComponent from "./SecondChartComponent.js";
import Graph from "./Graph.js";

export function App(props) {
  return (
    <div>
      <Graph></Graph>
      <SecondChartComponent></SecondChartComponent>
    </div>
  );
}
