import "./Question.css";
import React from "react";

function Question(props) {
  const tagNames = [];
  props.questionData.tags.forEach((tag) => {
    tagNames.push(tag.name);
  });

  const [answerVisible, setAnswerVisible] = React.useState(false);

  return (
    <article className="question background-white">
      <h2 className="question__title">
        {props.questionData.title}
        <button
          type="button"
          aria-label="toggle-answer"
          className="question__button"
          onClick={() => {
            setAnswerVisible(!answerVisible);
          }}
        />
      </h2>
      <div className="question__tags-area">
        <span className="question__category">{tagNames[0]}</span>
        <span className="question__category">{tagNames[1]}</span>
      </div>
      <p
        className={`question__answer ${
          answerVisible ? "question__answer_visible" : ""
        }`}
      >
        {props.questionData.answer}
      </p>
    </article>
  );
}

export default Question;
