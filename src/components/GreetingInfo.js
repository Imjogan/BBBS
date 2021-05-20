import React from 'react';
import CalendarBlock from './CalendarBlock';
import Article from './Article';


function GreetingInfo(props) {
  const Calnedar = true; // временное hard-значение

  <section className="two-columns two-columns_style_first">
    {Calnedar ? <CalendarBlock /> : <Article />}
      <article className="block-photo">
        <h2 className="block-photo__title">История Марины и Алины</h2>
      </article>
  </section>
}

export default GreetingInfo;