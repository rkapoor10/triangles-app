import React, { useState } from "react";
import "./styles.css";
import { Quiz } from "./cateogory/quiz";
import { Hypotenuse } from "./cateogory/hypotenuse";
import { Area } from "./cateogory/area";
import { FindAngle } from "./cateogory/findAngle";

export default function App() {
  const [display, setDisplay] = useState("Select a category to begin...");
  function onClickQuiz() {
    setDisplay(<Quiz />);
  }
  function onClickHypotenuse() {
    setDisplay(<Hypotenuse />);
  }
  function onClickArea() {
    setDisplay(<Area />);
  }
  function onClickAngle() {
    setDisplay(<FindAngle />);
  }
  return (
    <div className="App">
      <div className="head">
        <h1>Trianglempics</h1>

        <button onClick={onClickHypotenuse}>Calculate Hypotenuse</button>
        <button onClick={onClickArea}>Calculate Area of Triangle</button>
        <button>Check if Triangle ?</button>
        <button onClick={onClickAngle}>
          Find 3<sup>rd</sup>Angle
        </button>
        <button onClick={onClickQuiz}>Play Quiz</button>
      </div>
      <div className="container">
        <div>{display}</div>
      </div>
    </div>
  );
}
