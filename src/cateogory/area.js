import { useState } from "react";
import "./category.css";
// add error in all side triangle and dimension overlap problem
function Area() {
  const [ans, setAns] = useState(0);
  const [output, setOutput] = useState("none");
  const [optionOne, setOptionOne] = useState("none");
  const [optionTwo, setOptionTwo] = useState("none");
  const [optionThree, setOptionThree] = useState("none");
  const [dimension1, setDimension1] = useState("0");
  const [dimension2, setDimension2] = useState("0");
  const [dimension3, setDimension3] = useState("0");

  function caluclateAreaOp1(please) {
    please.preventDefault();
    const area = 0.5 * dimension1 * dimension2;
    setAns(area);
    setOutput("block");
  }

  function caluclateAreaOp2(please) {
    please.preventDefault();
    // if((dimension1+dimension2)>dimension3 && (dimension1+dimension3)>dimension2 && (dimension3+dimension2)>dimension1)
    //{}
    let s = dimension1 + dimension2 + dimension3;
    s = s / 2;
    console.log(s);
    let a = s * (s - dimension1) * (s - dimension2) * (s - dimension3);
    const area = Math.sqrt(a);
    setAns(area.toFixed(3));
    setOutput("block");

    // else{
    //   return(
    //     <div style={{color:"red"}}>Enter valid sides i.e sum of any two sides of a triangle must be greater than third side</div>
    //   );
    // }
  }
  function caluclateAreaOp3(please) {
    please.preventDefault();
    let product = dimension1 * dimension2;
    product = product / 2;
    let a = product * Math.sin((dimension3 * Math.PI) / 180);
    setAns(a.toFixed(3));
    setOutput("block");
  }

  function setDisplay(e) {
    setOutput("none");
    const option = e.target.value;
    console.log(option);
    if (option === "optionOne") {
      setOptionOne("block");
      setOptionTwo("none");
      setOptionThree("none");
    }
    if (option === "optionTwo") {
      setOptionOne("none");
      setOptionTwo("block");
      setOptionThree("none");
    }
    if (option === "optionThree") {
      setOptionOne("none");
      setOptionTwo("none");
      setOptionThree("block");
    }
  }

  return (
    <section>
      <h3>Chooose an Option to continue</h3>
      <form className="formStructure">
        <div>
          <label>
            <input
              required
              className="optionStructure"
              type="radio"
              name="areaOption"
              value="optionOne"
              onClick={setDisplay}
            ></input>
            Given base and corres height
          </label>
        </div>

        <div>
          <label>
            <input
              required
              className="optionStructure"
              type="radio"
              name="areaOption"
              value="optionTwo"
              onClick={setDisplay}
            />
            Given all sides of Triangle
          </label>
        </div>

        <div>
          <label>
            <input
              required
              className="optionStructure"
              type="radio"
              name="areaOption"
              value="optionThree"
              onClick={setDisplay}
            />
            Given two sides and included angle
          </label>
        </div>
      </form>

      <div style={{ display: `${optionOne}` }}>
        <form onSubmit={caluclateAreaOp1}>
          <h3>Enter the details</h3>
          <input
            required
            onChange={(e) => {
              setDimension1(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter base"
          ></input>
          <input
            required
            onChange={(e) => {
              setDimension2(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter height"
          ></input>
          <button type="submit">Calculate</button>
        </form>
      </div>

      <div style={{ display: `${optionTwo}` }}>
        <form onSubmit={caluclateAreaOp2}>
          <h3>Enter the details</h3>
          <input
            required
            onChange={(e) => {
              setDimension1(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter 1st side"
          ></input>
          <input
            required
            onChange={(e) => {
              setDimension2(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter 2nd side"
          ></input>
          <input
            required
            onChange={(e) => {
              setDimension3(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter 3rd side"
          ></input>
          <button type="submit">Calculate</button>
        </form>
      </div>

      <div style={{ display: `${optionThree}` }}>
        <form onSubmit={caluclateAreaOp3}>
          <h3>Enter the details</h3>
          <input
            required
            onChange={(e) => {
              setDimension1(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter 1st side"
          ></input>
          <input
            required
            onChange={(e) => {
              setDimension2(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter 2nd side"
          ></input>
          <input
            required
            onChange={(e) => {
              setDimension3(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter enclosed angle"
          ></input>
          <button type="submit">Calculate</button>
        </form>
      </div>
      <p className="outputDiv" style={{ display: `${output}` }}>
        The area for given dimensions is {ans} square units{" "}
      </p>
    </section>
  );
}

export { Area };
