import "./Filter.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiServer from "../../utils/apiServer";
import FilterButton from "../FilterButton/FilterButton";

function Filter({ isAll, applyFilter }) {
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
    applyFilter(chosenTags);
  }, [chosenTags]);

  // формирует массив параметров для запроса на сервер
  function handleServerFilter(e, id) {
    // если тега нет в списке добавляем, если есть - удаляем
    if (!chosenTags.find((tag) => tag === id)) {
      setChosenTags([...chosenTags, id]);
    } else {
      setChosenTags(chosenTags.filter((tag) => tag !== id));
    }
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
          <FilterButton name="8-10 лет" id="8-10" />
          <FilterButton name="11-13 лет" id="11-13" />
          <FilterButton name="14-18 лет" id="14-18" />
          <FilterButton name="18+ лет" id="18+" />
        </ul>
      )}
    </section>
  );
}

export default Filter;
