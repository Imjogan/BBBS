import "./Question.css";
import React from "react";
import Rubric from "./Rubric";

function Question(props) {
  const [answerVisible, setAnswerVisible] = React.useState(false);
  const handleAnswerButtonClick = () => {
    setAnswerVisible(!answerVisible);
  };

  return (
    <article className="question background-white">
      <h2 className="question__title">
        {props.questionData.question}
        <button
          type="button"
          className={`question__button ${
            answerVisible ? "question__button_active" : ""
          }`}
          onClick={handleAnswerButtonClick}
        />
      </h2>
      <ul className="question__category-field">
        {props.questionData.tags.map((tag) => (
          <Rubric name={tag.name} key={tag.id} />
        ))}
      </ul>
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
