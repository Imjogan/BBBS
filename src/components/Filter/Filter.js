import "./Filter.css";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiServer from "../../utils/apiServer";
import FilterButton from "../FilterButton/FilterButton";

function Filter({ isLoad, applyFilter }) {
  const [tags, setTags] = useState([]);
  const [isAll, setIsAll] = useState(false);
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [chosenTags, setChosenTags] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (isLoad) setIsAll(true);
  }, [isLoad]);

  // берет теги для страницы с текущим pathname
  useEffect(() => {
    apiServer.getTags(pathname).then((res) => {
      setTags(res);
    });
  }, [pathname]);

  useEffect(() => {
    if (chosenTags.length === 0 && isLoad) setIsAll(true);
    console.log(isAll);
    console.log(chosenTags);
    applyFilter(chosenTags);
  }, [chosenTags]);

  // формирует массив параметров для запроса на сервер
  function handleServerFilter(e, id) {
    // если тега нет в списке добавляем, если есть - удаляем
    if (!chosenTags.find((tag) => tag === id)) {
      setChosenTags([...chosenTags, id]);
      setIsAll(false);
    } else {
      setChosenTags(chosenTags.filter((tag) => tag !== id));
    }
  }

  // формирует массив параметров для запроса на сервер
  function handleResetFilter() {
    setChosenTags([]);
    setIsAll(true);
  }

  function checkActiveButtons() {
    if (isAll) {
      setIsActiveFilter(false);
    } else {
      setIsActiveFilter(undefined);
    }
  }

  useEffect(() => {
    checkActiveButtons();
  }, [isAll]);

  return (
    <section className="filters">
      <div className="filters__pseudo-block" />
      <ul className="filters__list">
        {/* кнопка Все */}
        <FilterButton name="Все" onActive={isAll} onClick={handleResetFilter} />

        {tags.map((tag) => (
          <FilterButton
            key={tag.id}
            name={tag.name}
            id={tag.slug}
            onActive={isActiveFilter}
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
