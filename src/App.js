import React, { useState } from "react";
import "./styles.css";
import { Quiz } from "./cateogory/quiz";
import { Hypotenuse } from "./cateogory/hypotenuse";

export default function App() {
  const [display, setDisplay] = useState("Select a category to begin...");
  function onClickQuiz() {
    setDisplay(<Quiz />);
  }
  function onClickHypotenuse() {
    setDisplay(<Hypotenuse />);
  }
  return (
    <div className="App">
      <div className="head">
        <h1>Trianglempics</h1>

        <button onClick={onClickHypotenuse}>Calculate Hypotenuse</button>
        <button>Calculate Area of Triangle</button>
        <button>Check if Triangle ?</button>
        <button>
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
