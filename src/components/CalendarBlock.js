import React from 'react';
import { getDateAndTime } from '../utils/formatTime'
import EnrollPopup from "./EnrollPopup/EnrollPopup";
import ConfirmPopup from "./ConfirmPopup/ConfirmPopup";
import SuccessPopup from "./SuccessPopup/SuccessPopup";
import ErrorPopup from "./ErrorPopup/ErrorPopup";
import addPlus from '../utils/commonFunctions'


function CalendarBlock(props) {

  const { event, enroll } = props;
  const participants = event.tags.map((obj) => (
   obj.name
  ));

  const dateAndTime = 
    props.mainPage 
      ? getDateAndTime(event) 
      : {
        monthName: event.startAt.month,
        dayName: event.startAt.day,
        dayNumber: event.startAt.data,
        startsAt: event.startAt.time,
        endsAt: event.endAt.time,
      };

  function chackNum(num) {
    let text;
    if (num === 1) {
      text = "место";
    } else if (num >= 10 || num % 2 !== 0) {
      text = "мест";
    } else {
      text = "места";
    }
    return text;
  }

  function seats() {
    if (event.remainSeats) {
      return `${event.remainSeats} ${chackNum(event.remainSeats)}`;
    }
    const remainSeats = event.seats - event.takenSeats;
    return `${remainSeats} ${chackNum(remainSeats)}`;
  }
  
  
  // запись на мероприятие  
  function handleRegisterBtn() {
    enroll.rememberEnrollPopupOpen(false);
    if (!event.booked) {
      enroll.toggleConfirmPopup();
    } else {
      enroll.handleCancell(event.id);
    }
  }

  function handleMoreInfoBtn() {
    enroll.toggleEnrollPopup();
    enroll.rememberEnrollPopupOpen();
  }

  // управление шириной элемента
  const mainPage = props.mainPage ? "list__element_main-page" : '';

  return (
    <>
        <li className={ event.booked ?  `list__element_is-registered list__element ${mainPage}` : "list__element list__element_main-page" }>
        <div className="list__header">
          <p className="list__caption">{participants.map((obj) => (
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
        <div className="list__footer">
          <button 
            type="submit" 
            className={ event.booked ? "list__submit_is-registered list__submit list__submit_type_register" : "list__submit list__submit_type_register" }
            onClick={ () => handleRegisterBtn() }
          >
            { !event.booked ? "Записаться" : "Отменить запись" }
          </button>
          <p className="list__place-number">{`Осталось ${seats()}`}</p>
          <button 
            type="button" className={ event.booked ? "list__button-view_is-registered list__button-view" : "list__button-view"}
            onClick={ () =>  handleMoreInfoBtn() }
          />
        </div>
      </li> 
      <EnrollPopup 
        enroll={enroll}
        event={event}
        dateAndTime={ dateAndTime }
        participants={participants}
      /> 
      <ConfirmPopup 
        enroll={enroll}
        event={event}
      />
      <SuccessPopup 
        enroll={enroll}
        event={event}
        history={props.history}
      />
      <ErrorPopup 
        enroll={enroll}
      />
    </>
  )
}

export default CalendarBlock;