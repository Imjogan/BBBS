import "./QuestionsPage.css";
import React, { useEffect } from "react";
import Question from "./Question";
import QuestionsForm from "./QuestionsForm";
import Filter from "../Filter/Filter";
import apiServer from "../../utils/apiServer";

function QuestionsPage() {
  const [questions, setQuestions] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(false);

  useEffect(() => {
    apiServer.getQuestions().then((allQuestions) => {
      setQuestions(allQuestions);
    });
  }, []);

  function applyQuestionsFilter(filterList) {
    apiServer.getQuestionsWithParams(filterList).then((filteredQuestions) => {
      setQuestions(filteredQuestions);
      setIsLoad(true);
    });
  }

  return (
    <section className="questions-page">
      <h1 className="title">Ответы на вопросы</h1>
      <Filter isLoad={isLoad} applyFilter={applyQuestionsFilter} />
      <ul className="block-questions">
        {questions.map((question) => (
          <Question questionData={question} key={question.id} />
        ))}
      </ul>
      <div className="questions-form">
        <QuestionsForm />
      </div>
    </section>
  );
}

export default QuestionsPage;
