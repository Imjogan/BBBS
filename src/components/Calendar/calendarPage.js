import { useEffect, useState, useContext } from "react";
import FilterButton from "../FilterButton";
import CalendarBlock from "./CalendarBlock";
import CurrentListOfEvents from "../../context/CurrentListOfEvents";
import CurrentUserContext from "../../context/CurrentUserContext";
import { date, month, dayOfTheWeek, time } from "../../utils/formatTime";

let userEvents;
 function Calendar() {
  const events = useContext(CurrentListOfEvents);
  const userData = useContext(CurrentUserContext);
  const [isMonth, setIsMonth] = useState();
  const [eventsMonth, setEventsMonth] = useState([])
  const [buttonActive, setButtonActive] = useState(false)
  const [isId, setIsId] = useState('')
  
  if (events) {
    const arrUserEventsForCity = Array.from(events).filter((item) => item.city === userData.city)
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
  useEffect(async () => {
    const test = await userEvents;
    setEventsMonth(test.filter((item) => item.startAt.month === isMonth));
  }, [isMonth]);

const arrMouths = userEvents.map((i) => i.startAt.month)
const sortArr = arrMouths.filter(
  (it, index) => index === arrMouths.indexOf(it)
);

useEffect(()=>{
  setIsMonth(sortArr[0]);
},[])


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

  function handlerID(e, id){
    setIsMonth(e.target.innerText);
    setIsId(id)
  }

  return (
    <>
      <main className="content page__content">
        <section className="content__header">
          <h1 className="title">Календарь</h1>
          <section className="menu">
            <ul className="menu__list menu__list_center">
              {sortArr.map((item, index) => (
                isId === index? <FilterButton
                  key={index}
                  id={index}
                  nameMonth={item}
                  onActive={true}
                  onClick={handlerID}
                /> : <FilterButton
                  key={index}
                  id={index}
                  nameMonth={item}
                  onActive={false}
                  onClick={handlerID}
                />
                ))}
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