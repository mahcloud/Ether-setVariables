import { setVariables, Ellipsis } from "@alchemyalcove/ether";
import "../node_modules/@alchemyalcove/ether/dist/ether.css";
import React from "react";
import ReactDOM from "react-dom";

setVariables({
  colors: {
    grayedOut: "#7f8C8D",
    red: "#FF0000",
    green: "#00FF00"
  }
});

function App() {
  return (
    <div>
      <Ellipsis>Ellipsis component pulls grey from CSS4 variables</Ellipsis>
      <div style={{ color: "var(--colors-red)" }}>Red</div>
      <div style={{ color: "var(--colors-green)" }}>Green</div>
      <div style={{ color: "var(--colors-blue)" }}>Blue (not set)</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
