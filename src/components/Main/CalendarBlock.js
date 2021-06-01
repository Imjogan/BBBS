import React from 'react';
import { date, month, time, dayOfTheWeek } from '../../utils/formatTime'
import EnrollPopup from "../EnrollPopup";
import ConfirmPopup from "../ConfirmPopup";
import SuccessPopup from "../SuccessPopup";
import addPlus from '../../utils/commonFunctions'


function CalendarBlock(props) {

  const mainEvent = props.pageContent.event;
  const participants = mainEvent.tags.map((obj) => (
   obj.name
  ));
  const monthName = month(mainEvent.startAt);
  const dayName = dayOfTheWeek(mainEvent.startAt);
  const dayNumber = date(mainEvent.startAt);
  const startsAt = time(mainEvent.startAt);
  const endsAt = time(mainEvent.endAt);

  const dateAndTime = {
    monthName,
    dayName,
    dayNumber,
    startsAt,
    endsAt
  }
  
  // запись на мероприятие
  const { enroll } = props;
  
  function handleRegisterBtn() {
      enroll.toggleConfirmPopup();
  }
  

  return (
    <>
        <li className="list__element">
        <div className="list__header">
          <p className="list__caption">{participants.map((obj) => (
            addPlus(participants, obj)
          ))}
          </p>
          <p className="list__date">{`${monthName} / ${dayName}`}</p>
        </div>
        <div className="list__theme">   
          <h2 className="list__title">{mainEvent.title}</h2>
          <p className="list__number">{dayNumber}</p>
        </div>
        <div className="list__contacts">
          <p className="list__contact">{`${startsAt}-${endsAt}`}</p>
          <p className="list__contact list__contact_center">{mainEvent.address}
          </p>
          <p className="list__contact">{mainEvent.contact}</p>
        </div>
        <div className="list__footer">
          <button 
            type="submit" 
            className="list__submit list__submit_type_register"
            onClick={ () => handleRegisterBtn() }
          >
            { mainEvent.booked ? "Записаться" : "Отменить запись" }
          </button>
          <p className="list__place-number">{`Осталось ${mainEvent.remainSeats} мест`}</p>
          <button 
            type="button" className="list__button-view"
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