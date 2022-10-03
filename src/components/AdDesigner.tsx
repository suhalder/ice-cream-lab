import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [number, setNumber] = useState(0); //Variable

  function countUp() {
    setNumber((prev) => prev + 1);
  }

  function countDown() {
    setNumber((prev) => prev - 1);
  }

  return (
    <div className="AdDesigner">
      <h1>Ad Designer</h1>
      <p>Vote For</p>
      <p>
        <b>What to support</b>
      </p>
      <button>Chocolate</button>
      &nbsp;&nbsp;&nbsp;
      <button>Vanilla</button>
      &nbsp;&nbsp;&nbsp;
      <button>Strawberry</button>
      <p>
        <b>Color Theme</b>
      </p>
      <button>Light</button>
      &nbsp;&nbsp;&nbsp;
      <button>Dark</button>
      <p>
        <b>Font Size</b>
      </p>
      <button onClick={() => countDown()}>Down</button>
      &nbsp;&nbsp;&nbsp;{number}&nbsp;&nbsp;&nbsp;
      <button onClick={() => countUp()}>Up</button>
    </div>
  );
};

export default AdDesigner;
