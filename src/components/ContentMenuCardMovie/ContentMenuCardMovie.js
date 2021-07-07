import React from "react";
import "./ContentMenuCardMovie.css";
import { Link } from "react-router-dom";

export default function ContentMenuCardMovie({ title, caption, link }) {
  return (
    <div className="content-section__card">
      <article className="block-video">
        <div
          style={{ backgroundImage: `url(${link})` }}
          className="block-video__iframe"
        ></div>
        <h3 className="block-video__title">{title}</h3>
        <p className="block-video__caption">{caption}</p>
        <Link to="./movie.html" className="block-video__category">
          смотреть трейлер
        </Link>
        <div className="block-video__caption block-video__caption_type_overflow">
          <span className="block-video__category block-video__category_type_overflow-video">
            рубрика
          </span>
          <span className="block-video__category block-video__category_type_overflow-video">
            рубрика
          </span>
        </div>
      </article>
    </div>
  );
}
