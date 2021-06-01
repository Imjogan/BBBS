import React from "react";
import addPlus from '../utils/commonFunctions'


function EnrollPopup(props) {

  const { enroll, event, dateAndTime } = props;
  const { id } = event;
  const participants = (event.tags && event.tags.map((obj) => (obj.name))) || [];

  return (
    <div className={ enroll.isEnrollPopupOpen ? "visible-block popup popup-calendar popup-calendar_type_event" : "popup popup-calendar popup-calendar_type_event" }>
      <div className="popup-calendar__content">
        <button 
          type="button" 
          aria-label="close popup" 
          className="popup__close popup__close_type_calendar" 
          onClick={() => enroll.toggleEnrollPopup()}
        />
        <div className="list__header">
          <p className="list__caption">
            {participants.map((obj) => (
              addPlus(participants, obj)
            ))}
          </p>
          <p className="list__date">{`${dateAndTime.monthName} / ${dateAndTime.dayName}`}</p>
        </div>
        <div className="list__theme">
          <h2 className="list__title">{event.title}</h2>
          <p className="list__number">{dateAndTime.dayNumber}</p>
        </div>
        <div className="list__contacts">
          <p className="list__contact">{`${dateAndTime.startsAt}-${dateAndTime.endsAt}`}</p>
          <p className="list__contact list__contact_center">{event.address}
          </p>
          <p className="list__contact">{event.contact}</p>
        </div>
        <p className="list__event">{event.description}</p>
        <div className="list__footer">
          <button 
            type="submit" 
            className="list__submit list__submit_type_register-popup"
            onClick={ !event.booked ? () => enroll.handleEnroll(id) : () => console.log('добавить функцию для отмены записи') }
            // добавить функцию для отмены записи
          >
            { !event.booked ? "Записаться" : "Отменить запись" } 
          </button>
          <p className="list__place-number">{`Осталось ${event.remainSeats || (event.seats - event.takenSeats)} мест`}</p>
        </div>
      </div>
    </div>
  );
}

export default EnrollPopup;
