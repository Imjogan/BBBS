import React from "react";
import "./ContentMenuCardArticle.css";
import { Link } from "react-router-dom";

export default function ContentMenuCardArticle({
  title,
  caption,
  text1,
  text2,
}) {
  return (
    <div className="content-section__card">
      <article className="block-place background-green block-place_style_article">
        <h3 className="block-place__title block-place__title_style_content-menu">
          {title}
        </h3>
        <p className="block-place__caption">{caption}</p>
        <Link to="./articles.html" className="block-place__category">
          читать на сайте
        </Link>
      </article>
      <article className="block-description background-white">
        <div className="block-description__text-wrapper">
          <p className="block-description__text">{text1}</p>
          <p className="block-description__text">{text2}</p>
        </div>
      </article>
    </div>
  );
}
