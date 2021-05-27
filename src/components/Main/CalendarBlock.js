import React from 'react';
import { date, month, time, dayOfTheWeek } from '../../utils/formatTime'





function CalendarBlock(props) {

  const mainEvent = props.pageContent.event;
  const participants = mainEvent.tags.map((obj) => (
   obj.name
  ))
  
  

  return (
    <li className="list__element">
      <div className="list__header">
        <p className="list__caption">{participants.map((obj) => {
          if (participants.length > 1) {
            if (participants.indexOf(obj) !== participants.length - 1) {
              return `${obj} + `
            }  return obj
          } return obj
        })}
        </p>
        <p className="list__date">{`${month(mainEvent.startAt)} / ${dayOfTheWeek(mainEvent.startAt)}`}</p>
      </div>
      <div className="list__theme">   
        <h2 className="list__title">{mainEvent.title}</h2>
        <p className="list__number">{date(mainEvent.startAt)}</p>
      </div>
      <div className="list__contacts">
        <p className="list__contact">{`${time(mainEvent.startAt)}-${time(mainEvent.endAt)}`}</p>
        <p className="list__contact list__contact_center">{mainEvent.address}
        </p>
        <p className="list__contact">{mainEvent.contact}</p>
      </div>
      <div className="list__footer">
        <button type="submit" className="list__submit list__submit_type_register">Записаться</button>
        <p className="list__place-number">{`Осталось ${mainEvent.remainSeats} мест`}</p>
        <button type="button" className="list__button-view"></button>
      </div>
    </li> 
  )
}

export default CalendarBlock;