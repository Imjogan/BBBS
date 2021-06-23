import "./QuestionsPage.css";
import React from "react";
import api from "../../utils/api";
import Question from "./Question";

function QuestionsPage() {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    api
      .getQuestions()
      .then((data) => {
        setQuestions(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const filteredQuestions = questions.map((question) => (
    <Question questionData={question} key={question.id} />
  ));

  return (
    <main className="content page__content">
      <section className="content__header content__header_style_questions">
        <h1 className="title">Ответы на вопросы</h1>
        <section className="menu menu_position_center">
          <div className="menu__pseudo-block" />
          <ul className="menu__list">
            <li className="menu__item">
              <button type="button" className="menu__button">
                Все
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_active"
              >
                Первая встреча
              </button>
            </li>
            <li className="menu__item">
              <button type="button" className="menu__button">
                Вопросы детей
              </button>
            </li>
            <li className="menu__item">
              <button type="button" className="menu__button">
                Воспитатели / опекуны
              </button>
            </li>
            <li className="menu__item">
              <button type="button" className="menu__button">
                Сомнения
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_active"
              >
                Сложности
              </button>
            </li>
            <li className="menu__item">
              <button type="button" className="menu__button">
                Подарки
              </button>
            </li>
            <li className="menu__item">
              <button type="button" className="menu__button">
                Влияние на ребенка
              </button>
            </li>
            <li className="menu__item">
              <button type="button" className="menu__button">
                Времяпровождение
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_active"
              >
                Ответственность
              </button>
            </li>
            <li className="menu__item">
              <button type="button" className="menu__button">
                Завершение отношений
              </button>
            </li>
            <li className="menu__item">
              <button type="button" className="menu__button">
                Первая встреча
              </button>
            </li>
            <li className="menu__item">
              <button type="button" className="menu__button">
                Вопросы детей
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_active"
              >
                Первая встреча
              </button>
            </li>
            <li className="menu__item">
              <button type="button" className="menu__button">
                Вопросы детей
              </button>
            </li>
            <li className="menu__item">
              <button type="button" className="menu__button">
                Воспитатели / опекуны
              </button>
            </li>
            <li className="menu__item">
              <button type="button" className="menu__button">
                Сомнения
              </button>
            </li>
            <li className="menu__item">
              <button
                type="button"
                className="menu__button menu__button_active"
              >
                Сложности
              </button>
            </li>
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
    </main>
  );
}

export default QuestionsPage;
