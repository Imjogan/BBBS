import React from "react";
import "./Rubric.css";

function Rubric(props) {
  return <p className="question__category">{props.name}</p>;
}

export default Rubric;
