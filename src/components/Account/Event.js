import React from "react";
import { getDateAndTime } from '../../utils/formatTime'


function Event (props) {

  const { event, enroll, onData } = props;

  const dateAndTime = getDateAndTime(event);

  const eventData = {
    dateAndTime,
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
          <p className="event__day">{dateAndTime.dayNumber}</p>
          <p className="event__month">{dateAndTime.monthName}</p>
        </div>
        <p className="event__about">{event.title}</p>
      </div>
    </>
  )
}

export default Event;