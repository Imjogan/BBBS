import React from "react";
import "./ContentMenuCardVideo.css";
import { Link } from "react-router-dom";

export default function ContentMenuCardVideo({ title, caption, link }) {
  return (
    <div className="content-section__card">
      <article className="block-video">
        <div
          style={{ backgroundImage: `url(${link})` }}
          className="block-video__iframe"
        ></div>
        <h3 className="block-video__title">{title}</h3>
        <p className="block-video__caption">{caption}</p>
        <Link to="./video.html" className="block-video__category">
          смотреть видео
        </Link>
      </article>
    </div>
  );
}
