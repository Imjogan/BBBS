import React from 'react';
import { Link } from 'react-router-dom';


function CalendarBlock(props) {
  <>
    <section className="two-columns two-columns_style_place ">
      <article className="block-place background-yellow">
        <p className="block-place__tag">выбор наставника</p>
        <h2 className="block-place__title">Сплав на байдарках в две строки</h2>
        <p className="block-place__caption">усадьба Архангельское в две строки</p>
        <div className="block-place__image"></div>
        <Link to="#" className="block-place__category">перейти на сайт</Link>
      </article>
      <article className="block-place_type_description background-white">
        <p className="block-place__caption">Девочка, 10 лет. Активный отдых</p>
        <p className="block-place__text">Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился
          говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не понимать
          друг друга, потом понимать чуть лучше и, Аннотация статьи в несколько абзацев. В тот момент, как ребёнок
          научился говорить, и не одно слово, а задавать бесконечное количество вопросов, жизнь меняется. Вы будете
          не понимать друг друга, потом понимать чуть лучше и,
          Аннотация статьи в несколько абзацев. В тот момент, как ребёнок научился говорить, и не одно слово,
          а задавать бесконечное количество вопросов, жизнь меняется. Вы будете не по Аннотация статьи в несколько
          абзацев. В тот момент, как ребёнок научился говорить, и не одно слово, а задавать бесконечное количество
          вопросов, жизнь меняется.</p>
      </article>
    </section>
  </>
}

export default CalendarBlock;