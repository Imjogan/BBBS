import { useEffect, useState, useContext } from "react";
import FilterButton from "../FilterButton";
import CalendarBlock from "./CalendarBlock";
import CurrentListOfEvents from "../../context/CurrentListOfEvents";
import CurrentUserContext from "../../context/CurrentUserContext";
import {months, day} from "../../utils/constants"
import {} from ""
export default function Calendar() {
  const events = useContext(CurrentListOfEvents);
  const userData = useContext(CurrentUserContext);
  const [DataFilter, SetDataFilter] = useState();
  const [isMonth, setIsMonth] = useState(false);
  let arrUserEvents;

  console.log(formatTime("2021-08-10T21:22:00Z"));

  if (events) {
    arrUserEvents = Array.from(events).filter((item) => item.city === 1)
  }

  console.log(arrUserEvents);

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
              <FilterButton nameMonth={"Декабрь"} />
            </ul>
          </section>
        </section>
        <section className="calendar">
          <ul className="list">
            <CalendarBlock
              onCaption={"Events.tags"}
              onData={""}
              ontitle={"Events.title"}
              onNumber={""}
              onContactTime={""}
              onPlace={"Events.address"}
              onContactPerson={"Events.contact"}
              onPlaceNumber={`Осталось ${"Events.remainSeats"} ${chackNum(1)}`}
            />
          </ul>
        </section>
      </main>
    </>
  );
}
