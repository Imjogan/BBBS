import React from 'react';
import './City.css';

const City= React.memo((props) => {
  const [id, city] = props;

  return (
    <li className="cities-list__item">
      <input className="cities-list__input" type="radio" value={{city, id}} name="city" />{city}
    </li>
  )}
)

export default City;