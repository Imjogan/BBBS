import { useEffect, useState, useContext} from "react";
import FilterButton from "../FilterButton/FilterButton";
import CalendarBlock from "../CalendarBlock/CalendarBlock";
import CurrentUserContext from "../../context/CurrentUserContext";
import api from '../../utils/api';
import Loader from '../Loader/Loader';
import './CalendarPage.css';
import {
  date,
  month,
  dayOfTheWeek,
  time,
  sortingArrayOrderByDate,
} from "../../utils/formatTime";

let userEvents;
let arrMouths;
let sortArr;
function Calendar(props) {
  const [events, setEvents] = useState([]);
  const userData = useContext(CurrentUserContext);
  const [isMonth, setIsMonth] = useState();
  const [eventsMonth, setEventsMonth] = useState([]);
  const [isContentReady, setIsContentReady] = useState(false);
  const [isId, setIsId] = useState(""); // кнопка
  const [firstMonth, setFirstMonth] = useState("")
  useEffect(()=>{
      const arrUserEventsForCity = Array.from(events).filter(
        (item) => item.city === userData.city
      );

      userEvents = sortingArrayOrderByDate(arrUserEventsForCity).map(
        (item) => ({
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
        })
      );
    arrMouths = userEvents.map((i) => i.startAt.month);
    sortArr = arrMouths.filter(
      (it, index) => index === arrMouths.indexOf(it)
    );
    setFirstMonth(sortArr[0]);
  })
  
  useEffect(() => {
    setIsMonth(sortArr[0]);
    setIsId(0);
  }, [firstMonth]);

  useEffect(() => {
    setEventsMonth(userEvents.filter((item) => item.startAt.month === isMonth));
  }, [isMonth]);

  function handlerID(e, id) {
    setIsMonth(e.target.innerText);
    setIsId(id);
  }

  useEffect(() => {
    api.getEvents().then((res) => {
      setEvents(res.data);
      setIsContentReady(true);
    });
  }, []);

  if (isContentReady) {
    return (
      <>
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
                  event={elem}
                  enroll={props.enroll}
                  history={props.history}
                />
              ))}
          </ul>
        </section>
      </>
    );
  }
  return <Loader />;
}

export default Calendar;
