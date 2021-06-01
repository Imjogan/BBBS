import React from "react";
import './Event.css';
import { date, month, time, dayOfTheWeek } from '../../utils/formatTime'


function Event (props) {

  const { event, enroll, onData } = props;

  const monthName = month(event.startAt);
  const dayName = dayOfTheWeek(event.startAt);
  const dayNumber = date(event.startAt);
  const startsAt = time(event.startAt);
  const endsAt = time(event.endAt);

  const eventData = {
    dateAndTime: {
      monthName,
      dayName,
      dayNumber,
      startsAt,
      endsAt
    },
    event
  }

  React.useEffect(() => {
    onData(eventData)
  }, [])

  return (
    <>
      <div className="event"
        onClick={ () => enroll.toggleEnrollPopup() }
      >
        <div className="event__date">
          <p className="event__day">{dayNumber}</p>
          <p className="event__month">{monthName}</p>
        </div>
        <p className="event__about">{event.title}</p>
      </div>
    </>
  )
}

export default Event;