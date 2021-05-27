import { useEffect, useState, useContext } from "react";
import FilterButton from "../FilterButton";
import CalendarBlock from "./CalendarBlock";
import CurrentListOfEvents from "../../context/CurrentListOfEvents";
import CurrentUserContext from "../../context/CurrentUserContext";
import { date, month, dayOfTheWeek, time } from "../../utils/formatTime";

 function Calendar() {
  const events = useContext(CurrentListOfEvents);
  const userData = useContext(CurrentUserContext);
  const [isMonth, setIsMonth] = useState(false);
  const [eventsMonth, setEventsMonth] = useState([])


  let userEvents;
  if (events) {
    const arrUserEventsForCity = Array.from(events).filter((item) => item.city === 1)
    userEvents = arrUserEventsForCity.map((item) => ({
      ...item,
      startAt: {
        month: month(item.startAt),
        data: date(item.startAt),
        day: dayOfTheWeek(item.startAt),
        time: time(item.startAt),
      },
      endAt: {
        month: month(item.endAt),
        data: date(item.endAt),
        day: dayOfTheWeek(item.endAt),
        time: time(item.endAt),
      },
    }));

  }

  


 /* if (userEvents) {
     userEvents.map((item) => {
     setEventsMonth(item.startAt.month)
     })
  } 
  

const sortArr = arr.filter((it, index) => index === arr.indexOf(it)); эта функция работает, я проверял

*/

  
  

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

  return (
    <>
      <main className="content page__content">
        <section className="content__header">
          <h1 className="title">Календарь</h1>
          <section className="menu">
            <ul className="menu__list menu__list_center">
              {
                userEvents.map((item) => (
                  <FilterButton nameMonth={item.startAt.month} />
                ))
              }
              
            </ul>
          </section>
        </section>
        <section className="calendar">
          <ul className="list">
            {userEvents &&
              userEvents.map((elem) => (
                <CalendarBlock
                  key={elem.id}
                  onCaption={
                    elem.tags.length >= 2
                      ? `${elem.tags[0].name} + ${elem.tags[1].name}`
                      : elem.tags[0].name
                  }
                  onData={`${elem.startAt.month} / ${elem.startAt.day}`}
                  ontitle={elem.title}
                  onNumber={elem.startAt.data}
                  onContactTime={`${elem.startAt.time}-${elem.endAt.time}`}
                  onPlace={elem.address}
                  onContactPerson={elem.contact}
                  onPlaceNumber={`Осталось ${elem.seats} ${chackNum(
                    elem.seats
                  )}`}
                />
              ))}
          </ul>
        </section>
      </main>
    </>
  );
}


export default Calendar;