import React, { useState } from "react";
import "./category.css";

function Check() {
  const [angleOne, setAngleOne] = useState(0);
  const [angleTwo, setAngleTwo] = useState(0);
  const [angleThree, setAngleThree] = useState(0);
  const [ans, setAns] = useState("");
  const [output, setOutput] = useState("none");

  function checkTriangle(please) {
    please.preventDefault();
    let sum = angleOne + angleTwo + angleThree;
    if (sum === 180) {
      setAns("Yes, it forms a Triangle!");
    } else {
      setAns("No, it doesn't form a Triangle.");
    }

    setOutput("block");
  }
  return (
    <section>
      <h3>Enter three sides</h3>
      <form onSubmit={checkTriangle}>
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
        <label>
          <input
            onChange={(e) => {
              setAngleThree(Number(e.target.value));
            }}
            className="inputDiv"
            type="number"
            placeholder="Enter 3rd Angle"
            required
          />
        </label>
        <button type="submit">Calculate</button>
      </form>
      <p className="outputDiv" style={{ display: `${output}` }}>
        {ans}
      </p>
    </section>
  );
}

export { Check };
