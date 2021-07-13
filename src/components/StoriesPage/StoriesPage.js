import "./StoriesPage.css";
import React from "react";
import Filter from "../Filter/Filter";
import apiServer from "../../utils/apiServer";
import Story from "./Story";

function StoriesPage() {
  return (
    <main className="content page__content block-stories">
      <section className="content__header_style_stories">
        <h1 className="title">Истории дружбы</h1>
        <blockquote className="block-stories__subtitle block-stories__subtitle_pos_header">
          Результат нашей работы сложно показать цифрами. Как измерить и
          взвесить дружбу? Как оценить успехи абсолютно разных детей? У каждой
          пары — свой результат и свои достижения. Именно об этом мы
          рассказываем в историях.
        </blockquote>
        {/* Здесь будут теги */}
        {/* <Filter isLoad={isLoad} applyFilter={applyStoryFilter} /> */}
      </section>
      <Story />
    </main>
  );
}

export default StoriesPage;
