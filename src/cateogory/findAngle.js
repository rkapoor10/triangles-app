import React, { useState } from "react";
import "./category.css";

function FindAngle() {
  const [angleOne, setAngleOne] = useState(0);
  const [angleTwo, setAngleTwo] = useState(0);
  const [ans, setAns] = useState(0);
  const [output, setOutput] = useState("none");

  function onClickCalculate(please) {
    please.preventDefault();
    let a = 180 - (angleOne + angleTwo);
    setAns(a);
    setOutput("block");
  }
  return (
    <section>
      <h3 className="head">
        Enter the angles to find the 3<sup>rd</sup> angle
      </h3>
      <form onSubmit={onClickCalculate}>
        <label>
          <input
            onChange={(e) => {
              setAngleOne(Number(e.target.value));
            }}
            className="inputDiv"
            type="number"
            placeholder="Enter 1st Angle"
            required
          />
        </label>
        <label>
          <input
            onChange={(e) => {
              setAngleTwo(Number(e.target.value));
            }}
            className="inputDiv"
            type="number"
            placeholder="Enter 2nd Angle"
            required
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      <p className="outputDiv" style={{ display: `${output}` }}>
        3<sup>rd</sup> Angle = {ans}°
      </p>
    </section>
  );
}

export { FindAngle };
