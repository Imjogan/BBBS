import "./QuestionsPage.css";
import React from "react";
import api from "../../utils/api";
import Question from "./Question";
import QuestionsForm from "./QuestionsForm";
import Filter from "../Filter/Filter";
import apiServer from "../../utils/apiServer";

function QuestionsPage() {
  const [questions, setQuestions] = React.useState([]);
  const [isLoad, setIsLoad] = React.useState(false);

  React.useEffect(() => {
    api
      .getQuestions()
      .then((data) => {
        setQuestions(data.data);
        setIsLoad(true);
      })
      .catch((err) => {
        console.log(err);
        setIsLoad(false);
      });
  }, []);

  function applyQuestionsFilter(filterList) {
    apiServer.getQuestionsWithParams(filterList).then((res) => {
      // setQuestions(res.results);
    });
  }

  return (
    <>
      <section className="questions-page">
        <h1 className="title">Ответы на вопросы</h1>
        <Filter isLoad={isLoad} applyFilter={applyQuestionsFilter} />
      </section>
      <ul className="block-questions">
        {questions.map((question) => (
          <Question questionData={question} key={question.id} />
        ))}
      </ul>
      <section className="questions-form">
        <QuestionsForm />
      </section>
    </>
  );
}

export default QuestionsPage;
