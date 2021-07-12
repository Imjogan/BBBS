import React from "react";
import "./Rubric.css";

function Rubric(props) {
  return (
    <p
      className={`question__category ${
        props.answerVisible ? "question__category_style_on-answer" : ""
      }`}
    >
      {props.name}
    </p>
  );
}

export default Rubric;
