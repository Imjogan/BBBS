import React from "react";
import './Event.css';

function Event (props) {

  // необходимо добавить нормальный скролл на десктопе

  return (
    <div className="event">
      <div className="event__date">
        <p className="event__day">{props.date}</p>
        <p className="event__month">{props.month}</p>
      </div>
      <p className="event__about">{props.about}</p>
    </div>
  )
}

export default Event;