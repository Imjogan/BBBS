import React from 'react';
import { getDateAndTime } from '../../utils/formatTime'
import EnrollPopup from "../EnrollPopup";
import ConfirmPopup from "../ConfirmPopup";
import SuccessPopup from "../SuccessPopup";
import addPlus from '../../utils/commonFunctions'


function CalendarBlock(props) {

  const mainEvent = props.pageContent.event;
  const participants = mainEvent.tags.map((obj) => (
   obj.name
  ));

  const dateAndTime = getDateAndTime(mainEvent);
  
  // запись на мероприятие
  const { enroll } = props;
  
  function handleRegisterBtn() {
    if (!mainEvent.booked) {
      enroll.toggleConfirmPopup();
    } else {
      enroll.handleCancell(mainEvent.id);
    }
  }

  return (
    <>
        <li className={ mainEvent.booked ? "list__element_is-registered list__element" : "list__element" }>
        <div className="list__header">
          <p className="list__caption">{participants.map((obj) => (
            addPlus(participants, obj)
          ))}
          </p>
          <p className="list__date">{`${dateAndTime.monthName} / ${dateAndTime.dayName}`}</p>
        </div>
        <div className="list__theme">   
          <h2 className="list__title">{mainEvent.title}</h2>
          <p className="list__number">{dateAndTime.dayNumber}</p>
        </div>
        <div className="list__contacts">
          <p className="list__contact">{`${dateAndTime.startsAt}-${dateAndTime.endsAt}`}</p>
          <p className="list__contact list__contact_center">{mainEvent.address}
          </p>
          <p className="list__contact">{mainEvent.contact}</p>
        </div>
        <div className="list__footer">
          <button 
            type="submit" 
            className={ mainEvent.booked ? "list__submit_is-registered list__submit list__submit_type_register" : "list__submit list__submit_type_register" }
            onClick={ () => handleRegisterBtn() }
          >
            { !mainEvent.booked ? "Записаться" : "Отменить запись" }
          </button>
          <p className="list__place-number">{`Осталось ${mainEvent.remainSeats} мест`}</p>
          <button 
            type="button" className={ mainEvent.booked ? "list__button-view_is-registered list__button-view" : "list__button-view"}
            onClick={ () => enroll.toggleEnrollPopup() }
          />
        </div>
      </li> 
      <EnrollPopup 
        enroll={enroll}
        event={mainEvent}
        dateAndTime={ dateAndTime }
        participants={participants}
      /> 
      <ConfirmPopup 
        enroll={enroll}
        event={mainEvent}
      />
      <SuccessPopup 
        enroll={enroll}
        event={mainEvent}
        history={props.history}
      />
    </>
  )
}

export default CalendarBlock;