import "./QuestionsPage.css";
import React from "react";
import api from "../../utils/api";
import Question from "./Question";
import Tag from "./Tag";

function QuestionsPage() {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    api
      .getQuestions()
      .then((data) => {
        setQuestions(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredQuestions = questions.map((question) => {
    return <Question questionData={question} key={question.id} />;
  });

  return (
    <>
      <section className="filterTags">
        <h1 className="title">Ответы на вопросы</h1>
        <section className="menu">
          <div className="menu__pseudo-block" />
          <ul className="menu__list">
            <Tag name="Все" />
            <Tag name="Первая встреча" />
            <Tag name="Вопросы детей" />
            <Tag name="Воспитатели / опекуны" />
            <Tag name="Сомнения" />
            <Tag name="Сложности" />
            <Tag name="Подарки" />
            <Tag name="Влияние на ребенка" />
            <Tag name="Времяпровождение" />
            <Tag name="Ответственность" />
            <Tag name="Завершение отношений" />
            <Tag name="Первая встреча" />
            <Tag name="Вопросы детей" />
            <Tag name="Первая встреча" />
            <Tag name="Вопросы детей" />
            <Tag name="Воспитатели / опекуны" />
            <Tag name="Сомнения" />
            <Tag name="Сложности" />
          </ul>
        </section>
      </section>
      <section className="block-questions">{filteredQuestions}</section>
      <section className="questions-form">
        <div className="questions-form__wrapper">
          <h2 className="questions-form__title">
            Если вы не нашли ответ на свой вопрос — напишите нам, и мы включим
            его в список
          </h2>
          <form
            action="#"
            name="questions"
            className="questions-form__form"
            method="POST"
          >
            <label className="questions-form__field">
              <input
                id="questions-input"
                required
                name="question"
                minLength={2}
                maxLength={100}
                placeholder="Введите вопрос"
                className="questions-form__input"
                type="text"
              />
              <span className="questions-form__input-error" />
            </label>
            <button
              aria-label="submit form"
              className="questions-form__button-submit"
              type="submit"
            >
              Отправить
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default QuestionsPage;
