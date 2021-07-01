import "./BigPlace.css";
import React from "react";

function BigPlace({ place }) {
  return (
    <section className="two-columns two-columns_style_place ">
      <article className="block-place background-yellow">
        <p className="block-place__tag">выбор наставника</p>
        <h2 className="block-place__title">{place.title}</h2>
        <p className="block-place__caption">{place.name}</p>
        <img className="block-place__image" src={place.imageUrl} />
        <a href={place.link} className="block-place__category">
          перейти на сайт
        </a>
      </article>
      <article className="block-place_type_description background-white">
        <p className="block-place__caption">{place.info}</p>
        <p className="block-place__text">{place.description}</p>
      </article>
    </section>
  );
}

export default BigPlace;
