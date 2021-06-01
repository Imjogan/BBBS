import React from "react";

function EnrollPopup(props) {

  const { enroll, event, dateAndTime } = props;
  const { id } = event;

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
          <p className="list__caption">Волонтёры</p>
          <p className="list__date">{`${dateAndTime.monthName} / ${dateAndTime.dayName}`}</p>
        </div>
        <div className="list__theme">
          <h2 className="list__title">{event.title}</h2>
          <p className="list__number">05</p>
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
            onClick={ () => enroll.handleEnroll(id) }
          >
            { event.booked ? "Записаться" : "Отменить запись" } 
          </button>
          <p className="list__place-number">{`Осталось ${event.remainSeats} мест`}</p>
        </div>
      </div>
    </div>
  );
}

export default EnrollPopup;
