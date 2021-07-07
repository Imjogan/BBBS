import React from "react";
import "./ContentMenuCardGuide.css";
import { Link } from "react-router-dom";

export default function ContentMenuCardGuide({ title, link, form }) {
  return (
    <div className="content-section__card">
      <figure class="block-guide block-guide_style_content-menu">
        <Link to="./guide_article.html" class={` block-guide__link form-${form}`}>
          <img src={link} alt="{title}" class="block-guide__photo" />
        </Link>
        <figcaption class="block-guide__caption block-guide__caption_style_content-menu">
          {title}
        </figcaption>
      </figure>
    </div>
  );
}
