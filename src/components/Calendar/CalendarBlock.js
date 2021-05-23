import React from 'react';


function CalendarBlock({onCaption, onData, ontitle, onNumber, onContactTime, onPlace, onContactPerson, onPlaceNumber}) {
  return (
    <li className="list__element">
      <div className="list__header">
        <p className="list__caption">{onCaption}</p>
        <p className="list__date">{onData}</p>
      </div>
      <div className="list__theme">   
        <h2 className="list__title">{ontitle}</h2>
        <p className="list__number">{onNumber}</p>
      </div>
      <div className="list__contacts">
        <p className="list__contact">{onContactTime}</p>
        <p className="list__contact list__contact_center">{onPlace}
        </p>
        <p className="list__contact">{onContactPerson}</p>
      </div>
      <div className="list__footer">
        <button type="submit" className="list__submit list__submit_type_register">Записаться</button>
        <p className="list__place-number">{onPlaceNumber}</p>
        <button type="button" className="list__button-view"></button>
      </div>
    </li> 
  )
}

export default CalendarBlock;