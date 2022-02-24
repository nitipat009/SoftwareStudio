import "./Vote.css";
import React, { useState } from "react";

function Vote() {
  const [result, setResult] = useState("MIN");
  const clickHandler = (event) => {
    // min = 0 , max = 10
    if (event) {
      if (result === "MIN") {
        setResult(1);
      } else if (result === "MAX") {
        alert("Cannot Vote more");
      } else if (result === 9) {
        setResult("MAX");
      } else {
        setResult(result + 1);
      }
    } else {
      if (result === 1) {
        setResult("MIN");
      } else if (result === "MIN") {
        alert("Cannot unvote");
      } else if (result === "MAX") {
        setResult(9);
      } else {
        setResult(result - 1);
      }
    }
  };

  return (
    <div className="container">
      <button onClick={() => clickHandler(true)}>Click to Vote</button>
      <div className="result-card">{result}</div>
      <button onClick={() => clickHandler(false)}>Click to Unvote</button>
    </div>
  );
}
export default Vote;
