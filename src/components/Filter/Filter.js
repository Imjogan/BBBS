import "./Filter.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiServer from "../../utils/apiServer";
import FilterButton from "../FilterButton/FilterButton";
import Tag from "../QuestionsPage/Tag";

function Filter({ isAll }) {
  const [tags, setTags] = useState([]);
  const [chosenTags, setChosenTags] = useState([]);
  const { pathname } = useLocation();

  // берет теги для страницы с текущим pathname
  useEffect(() => {
    apiServer.getTags(pathname).then((res) => {
      setTags(res);
    });
  }, [pathname]);

  useEffect(() => {
    console.log(chosenTags);
  }, [chosenTags]);

  // формирует массив параметров
  function handleServerFilter(e, id) {
    setChosenTags([id, ...chosenTags]);
  }

  return (
    <section className="filters">
      <div className="filters__pseudo-block" />
      <ul className="filters__list">
        {/* кнопка Все */}
        <FilterButton
          name="Все"
          onActive={chosenTags.length === 0 ? isAll : false}
        />

        {tags.map((tag) => (
          <FilterButton
            key={tag.id}
            name={tag.name}
            id={tag.slug}
            onClick={handleServerFilter}
          />
        ))}
      </ul>

      {pathname === "/places" && (
        <ul className="filters__list">
          <Tag name="8-10 лет" />
          <Tag name="11-13 лет" />
          <Tag name="14-18 лет" />
          <Tag name="18+ лет" />
        </ul>
      )}
    </section>
  );
}

export default Filter;
