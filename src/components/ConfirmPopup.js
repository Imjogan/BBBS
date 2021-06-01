import React from "react";

function ConfirmPopup(props) {

  const { enroll, event } = props;
  const { id } = event;

  return (
    <div className={ enroll.isConfirmPopupOpen ? "visible-block popup popup-calendar popup-calendar_type_confirm" : "popup popup-calendar popup-calendar_type_confirm" }>
      <div className="popup-calendar__content">
        <button 
          type="button" 
          aria-label="close popup" 
          className="popup__close popup__close_type_calendar" 
          onClick={ () => enroll.toggleConfirmPopup() }
        />
        <p className="list__confirm">
          Подтвердить запись на мероприятие <br />
          { event.title }
        </p>
        <div className="list__buttons">
          <button 
            type="submit" 
            className="list__submit list__submit_confirm"
            onClick={ () => enroll.handleEnroll(id) }
          >Подтвердить запись</button>
          <button 
            type="submit" 
            className="list__submit list__submit_cancel"
            onClick={ () => enroll.toggleConfirmPopup() }
          >Отменить</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPopup;
