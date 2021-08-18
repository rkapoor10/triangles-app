import React, { useState } from "react";
import "./styles.css";
import { Quiz } from "./cateogory/quiz";
import { Hypotenuse } from "./cateogory/hypotenuse";
import { Area } from "./cateogory/area";
import { FindAngle } from "./cateogory/findAngle";
import { Check } from "./cateogory/checkTriangle";

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
  function onClickCheck() {
    setDisplay(<Check />);
  }
  return (
    <div className="App">
      <section className="container">
        <div className="head">
          <h1>Trianglempics</h1>

          <button onClick={onClickHypotenuse}>Calculate Hypotenuse</button>
          <button onClick={onClickArea}>Calculate Area of Triangle</button>
          <button onClick={onClickCheck}>Check if Triangle ?</button>
          <button onClick={onClickAngle}>
            Find 3<sup>rd</sup>Angle
          </button>
          <button onClick={onClickQuiz}>Play Quiz</button>
        </div>
        <div className="containerIn">
          <div>{display}</div>
        </div>
      </section>
      <footer className="container">
        <ul>
          <li>
            <a
              target="_blank"
              href="https://github.com/rkapoor10/triangles-app"
            >
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/github.png"
                alt=""
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ritik-kapoor-493469196/"
              target="blank"
            >
              <img
                src="https://img.icons8.com/ios-filled/30/000000/linkedin.png"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ritikkapoor.10/" target="blank">
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/instagram-circle.png"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://ritikportfolio.netlify.app/" target="blank">
              <img
                src="https://img.icons8.com/ios-filled/30/000000/resume-website.png"
                alt=""
              />
            </a>
          </li>
        </ul>
        <p>About: Theme and Title dedicated to Neeraj Chopra 🇮🇳</p>
      </footer>
    </div>
  );
}
