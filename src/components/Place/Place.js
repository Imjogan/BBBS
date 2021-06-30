import "./Place.css";

function Place({ place }) {
  return (
    <div className="places-container">
      <article className="block-place background-green block-place_size_small block-place_type_small">
        {place.chosen && <p className="block-place__tag">выбор наставника</p>}
        <h2 className="block-place__title block-place__title_size_small">
          {place.title}
        </h2>
        <p className="block-place__caption">{place.address}</p>
        <a href={place.link} target="_blank" className="block-place__category">
          перейти на сайт
        </a>
      </article>
      <article className="block-description background-white">
        <div className="block-description__text-wrapper">
          <p className="block-description__caption">
            Девочка, 10 лет. Познавательный отдых
          </p>
          <p className="block-description__text">{place.description}</p>
        </div>
      </article>
    </div>
  );
}

export default Place;
