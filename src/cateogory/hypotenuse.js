import React, { useState } from "react";
import "./category.css";

function Hypotenuse() {
  const [height, setHeight] = useState(0);
  const [base, setBase] = useState(0);
  const [hypotenuseLength, setHypotenuseLength] = useState(0);

  function calculate(e) {
    e.preventDefault();

    const b = base;
    const h = height;
    console.log(b);
    console.log(h);
    const hypo = Math.sqrt(Math.pow(b, 2) + Math.pow(h, 2));
    setHypotenuseLength(hypo.toFixed(3));
  }
  return (
    <section>
      <h3 className="head">
        Formula: (height)<sup>2</sup> + (base)<sup>2</sup> = (Hypotenuse)
        <sup>2</sup>{" "}
      </h3>
      <form onSubmit={calculate}>
        <div>Enter height and base to calculate hypotenuse</div>
        <input
          className="inputDiv"
          type="number"
          min="1"
          placeholder="Enter height"
          onChange={(e) => {
            setHeight(e.target.value);
          }}
        ></input>
        <input
          className="inputDiv"
          min="1"
          type="number"
          placeholder="Enter base"
          onChange={(e) => {
            setBase(e.target.value);
          }}
        ></input>
        <button type="submit" className="inputBtn">
          Calculate
        </button>
      </form>
      <div className="outputDiv">hypotenuse = {hypotenuseLength}</div>
    </section>
  );
}

export { Hypotenuse };
