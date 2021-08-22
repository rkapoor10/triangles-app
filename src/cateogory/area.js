import { useState } from "react";
import "./category.css";
// add error in all side triangle and dimension overlap problem
function Area() {
  const [ans, setAns] = useState(0);
  const [output, setOutput] = useState("none");
  const [optionOne, setOptionOne] = useState("none");
  const [optionTwo, setOptionTwo] = useState("none");
  const [optionThree, setOptionThree] = useState("none");
  const [base, setBase] = useState(null);
  const [height, setHeight] = useState(null);
  const [sideOne, setSideOne] = useState(null);
  const [sideTwo, setSideTwo] = useState(null);
  const [sideThree, setSideThree] = useState(null);
  const [edgeOne, setEdgeOne] = useState(null);
  const [edgeTwo, setEdgeTwo] = useState(null);
  const [angle, setAngle] = useState(null);

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

  function caluclateAreaOp1(please) {
    please.preventDefault();
    const area = 0.5 * base * height;
    setAns(area);
    setOutput("block");
  }

  function caluclateAreaOp2(please) {
    please.preventDefault();
    // if((dimension1+dimension2)>dimension3 && (dimension1+dimension3)>dimension2 && (dimension3+dimension2)>dimension1)
    //{}
    let s = sideOne + sideTwo + sideThree;
    s = s / 2;
    console.log(s);
    let a = s * (s - sideOne) * (s - sideTwo) * (s - sideThree);
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
    let product = edgeOne * edgeTwo;
    product = product / 2;
    let a = product * Math.sin((angle * Math.PI) / 180);
    setAns(a.toFixed(3));

    setOutput("block");
  }

  return (
    <section>
      <h3 className="head">Chooose an Option to continue</h3>
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
              setBase(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter base"
          ></input>
          <input
            required
            onChange={(e) => {
              setHeight(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter height"
          ></input>
          <button type="submit">Calculate</button>
          <button
            type="reset"
            onClick={() => {
              setOutput("none");
            }}
          >
            Reset
          </button>
        </form>
      </div>

      <div style={{ display: `${optionTwo}` }}>
        <form onSubmit={caluclateAreaOp2}>
          <h3>Enter the details</h3>
          <input
            required
            onChange={(e) => {
              setSideOne(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter 1st side"
          ></input>
          <input
            required
            onChange={(e) => {
              setSideTwo(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter 2nd side"
          ></input>
          <input
            required
            onChange={(e) => {
              setSideThree(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter 3rd side"
          ></input>
          <button type="submit">Calculate</button>
          <button
            type="reset"
            onClick={() => {
              setOutput("none");
            }}
          >
            Reset
          </button>
        </form>
      </div>

      <div style={{ display: `${optionThree}` }}>
        <form onSubmit={caluclateAreaOp3}>
          <h3>Enter the details</h3>
          <input
            required
            onChange={(e) => {
              setEdgeOne(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter 1st side"
          ></input>
          <input
            required
            onChange={(e) => {
              setEdgeTwo(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter 2nd side"
          ></input>
          <input
            required
            onChange={(e) => {
              setAngle(Number(e.target.value));
            }}
            className="inputDiv"
            type="Number"
            min="1"
            placeholder="Enter enclosed angle"
          ></input>
          <button type="submit">Calculate</button>
          <button
            type="reset"
            onClick={() => {
              setOutput("none");
            }}
          >
            Reset
          </button>
        </form>
      </div>
      <p className="outputDiv" style={{ display: `${output}` }}>
        The area for given dimensions is {ans} square units{" "}
      </p>
    </section>
  );
}

export { Area };
