import React from "react";

function CalendarBlock(props) {
  return (
    <li className="list__element">
      <div className="list__header">
        <p className="list__caption">{props.onCaption}</p>
        <p className="list__date">{props.onData}</p>
      </div>
      <div className="list__theme">
        <h2 className="list__title">{props.ontitle}</h2>
        <p className="list__number">{props.onNumber}</p>
      </div>
      <div className="list__contacts">
        <p className="list__contact">{props.onContactTime}</p>
        <p className="list__contact list__contact_center">{props.onPlace}</p>
        <p className="list__contact">{props.onContactPerson}</p>
      </div>
      <div className="list__footer">
        <button
          type="submit"
          className="list__submit list__submit_type_register"
        >
          Записаться
        </button>
        <p className="list__place-number">{props.onPlaceNumber}</p>
        <button type="button" className="list__button-view"></button>
      </div>
    </li>
  );
}

export default CalendarBlock;
