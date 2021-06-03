import React from "react";
import './SuccessPopup.css';

function SuccessPopup(props) {

  const { enroll, event, history } = props;

  function goToCalendar() {
    history.push('/calendar');
  }

  return (
    <div className={ enroll.isSuccessPopupOpen ? "visible-block popup popup-calendar popup-calendar_type_done" : "popup popup-calendar popup-calendar_type_done"}>
      <div className="popup-calendar__content">
        <button 
          type="button" 
          aria-label="close popup" 
          className="popup__close popup__close_type_calendar" 
          onClick={ () => enroll.toggleSuccessPopup() }
        />
        <div className="popup-calendar__logo">
        </div>
        <p className="list__done">
          Вы записаны на мероприятие<br />
          {event.title}
        </p>
        <p className="list__done">
          Если у вас не получится прийти — отмените, пожалуйста, запись.
        </p>
        <div className="list__buttons">
          <button 
            type="submit" 
            className="list__submit list__submit_return"
            onClick={ () => goToCalendar() }
          >Вернуться к календарю </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPopup;
