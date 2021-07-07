import React from "react";
import "./ContentMenuSection.css";

export default function ContentMenuSection({ title, children }) {
  return (
    <section className="content-section">
      <h2 className="content-section__title">
        <a href="./guide.html" className="content-section__link">
          {title}
        </a>
      </h2>
      <div className="content-section__buttons">
        <button
          type="button"
          aria-label="previous-slide"
          className="button-previous"
        ></button>
        <button
          type="button"
          aria-label="next-slide"
          className="button-next button-next_style_content-page button-next_active"
        ></button>
      </div>
      <div className="content-section__container">{children}</div>
    </section>
  );
}
