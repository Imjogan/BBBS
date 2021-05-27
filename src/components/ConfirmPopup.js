import React from "react";

function ConfirmPopup(props) {
  return (
    <div class="popup popup-calendar popup-calendar_type_confirm">
      <div class="popup-calendar__content">
        <button type="button" aria-label="close popup" class="popup__close popup__close_type_calendar"></button>
        <p class="list__confirm">
          Подтвердить запись на мероприятие
          «Субботний meet up: учимся проходить интервью»
          5 декабря с 12:00–14:00
        </p>
        <div class="list__buttons">
          <button type="submit" class="list__submit list__submit_confirm">Подтвердить запись</button>
          <button type="submit" class="list__submit list__submit_cancel">Отменить</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPopup;
