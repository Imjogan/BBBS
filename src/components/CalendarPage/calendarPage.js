import { useEffect, useState, useContext } from "react";
import FilterButton from "../FilterButton/FilterButton";
import CalendarBlock from "./CalendarBlock";
import CurrentListOfEvents from "../../context/CurrentListOfEvents";
import CurrentUserContext from "../../context/CurrentUserContext";
import {
  date,
  month,
  dayOfTheWeek,
  time,
  dateUnixFormat,
} from "../../utils/formatTime";

let userEvents;

function Calendar(props) {
  const events = useContext(CurrentListOfEvents);
  const userData = useContext(CurrentUserContext);
  const [isMonth, setIsMonth] = useState();
  const [eventsMonth, setEventsMonth] = useState([]);
  const [isId, setIsId] = useState("");

  function formatTimeArr(arr) {
    return arr.sort(
      (first, last) =>
        dateUnixFormat(first.startAt) - dateUnixFormat(last.startAt)
    );
  }

  if (events) {
    const arrUserEventsForCity = Array.from(events).filter(
      async (item) => item.city === userData.city
    );

    userEvents = formatTimeArr(arrUserEventsForCity).map((item) => ({
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

  const arrMouths = userEvents.map((i) => i.startAt.month);
  const sortArr = arrMouths.filter(
    (it, index) => index === arrMouths.indexOf(it)
  );

  useEffect(() => {
    setIsMonth(sortArr[0]);
    setIsId(0);
  }, []);

  useEffect(() => {
    setEventsMonth(userEvents.filter((item) => item.startAt.month === isMonth));
  }, [isMonth]);

  function checkNum(num) {
    switch (true) {
      case num === 1:
        return "место";
      case num >= 5:
        return "мест";
      default:
        return "места";
    }
  }

  function handlerID(e, id) {
    setIsMonth(e.target.innerText);
    setIsId(id);
  }

  return (
    <>
      <main className="content page__content">
        <section className="content__header">
          <h1 className="title">Календарь</h1>
          <section className="menu">
            <ul className="menu__list menu__list_center">
              {sortArr.map((item, index) =>
                isId === index ? (
                  <FilterButton
                    key={index}
                    id={index}
                    nameMonth={item}
                    onActive={true}
                    onClick={handlerID}
                  />
                ) : (
                  <FilterButton
                    key={index}
                    id={index}
                    nameMonth={item}
                    onActive={false}
                    onClick={handlerID}
                  />
                )
              )}
            </ul>
          </section>
        </section>
        <section className="calendar">
          <ul className="list">
            {eventsMonth &&
              eventsMonth.map((elem) => (
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
                  onPlaceNumber={
                    elem.seats
                      ? `Осталось ${elem.seats} ${checkNum(elem.seats)}`
                      : "Запись закрыта"
                  }
                  event={elem}
                  enroll={props.enroll}
                  history={props.history}
                />
              ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Calendar;
