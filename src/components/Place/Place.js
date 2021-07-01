import "./Place.css";

function Place({ place }) {
  return (
    <div className="places-container">
      <article className="place background-green place_size_small place_type_small">
        {place.chosen && <p className="place__tag">выбор наставника</p>}
        <h2 className="place__title place__title_size_small">{place.title}</h2>
        <p className="place__caption">{place.address}</p>
        <a href={place.link} target="_blank" className="place__category">
          перейти на сайт
        </a>
      </article>
      <article className="block-description background-white">
        <div className="block-description__text-wrapper">
          <p className="block-description__caption">{place.info}</p>
          <p className="block-description__text">{place.description}</p>
        </div>
      </article>
    </div>
  );
}

export default Place;
