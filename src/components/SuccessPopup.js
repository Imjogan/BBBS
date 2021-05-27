import React from "react";

function SuccessPopup(props) {
  return (
    <div className="popup popup-calendar popup-calendar_type_done">
      <div className="popup-calendar__content">
        <button type="button" aria-label="close popup" className="popup__close popup__close_type_calendar" />
        <div className="popup-calendar__logo">
        </div>
        <p className="list__done">
          Вы записаны на мероприятие
          «Субботний meet up: учимся проходить интервью»
          5 декабря с 12:00–14:00.
        </p>
        <p className="list__done">
          Если у вас не получится прийти — отмените, пожалуйста, запись.
        </p>
        <div className="list__buttons">
          <button type="submit" className="list__submit list__submit_return">Вернуться к календарю </button>
        </div>
      </div>
    </div>
  );
}

export default SuccessPopup;
