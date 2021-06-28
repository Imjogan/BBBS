import "./Place.css";

function Place() {
  return (
    <div className="places-container">
      <article className="block-place background-green block-place_size_small block-place_type_small">
        <p className="block-place__tag">выбор наставника</p>
        <h2 className="block-place__title block-place__title_size_small">
          Название места несколько слов
        </h2>
        <p className="block-place__caption">Адрес места в одну строку</p>
        <a href="#" className="block-place__category">
          перейти на сайт
        </a>
      </article>
      <article className="block-description background-white">
        <div className="block-description__text-wrapper">
          <p className="block-description__caption">
            Девочка, 10 лет. Познавательный отдых
          </p>
          <p className="block-description__text">
            Аннотация статьи в несколько абзацев. В тот момент, как ребёнок
            научился говорить, и не одно слово, а задавать бесконечное
            количество вопросов, жизнь меняется. Вы будете не по Аннотация
            статьи в несколько абзацев. В тот момент, как ребёнок научился
            говорить, и не одно слово, а задавать бесконечное количество
            вопросов, жизнь меняется.
          </p>
        </div>
      </article>
    </div>
  );
}

export default Place;
