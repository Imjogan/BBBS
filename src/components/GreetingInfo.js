import React from 'react';
import { Link } from 'react-router-dom';
import CalendarBlock from './CalendarBlock';
import Article from './Article';


function GreetingInfo(props) {
  
  const Calnedar = true; // временное hard-значение
  <section className="two-columns two-columns_style_first">
    {Calnedar ? <CalendarBlock /> : <Article />}
    <Link to="#">
      <article className="block-photo">
        <h2 className="block-photo__title">История Марины и Алины</h2>
      </article>
    </Link>
  </section>
}

export default GreetingInfo;