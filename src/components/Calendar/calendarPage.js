import { useEffect, useState, useContext } from "react";
import FilterButton from "../FilterButton";
import CalendarBlock from "./CalendarBlock";
import CurrentListOfEvents from "../../context/CurrentListOfEvents";



export default function Calendar() {
  const Events = useContext(CurrentListOfEvents);
  const [DataFilter, SetDataFilter] = useState();
  const [isMonth, setIsMonth] = useState(false);

  console.log(Events);


function chackNum(num) {
  let text
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
              onCaption={'Events.tags'}
              onData={""}
              ontitle={'Events.title'}
              onNumber={""}
              onContactTime={""}
              onPlace={'Events.address'}
              onContactPerson={'Events.contact'}
              onPlaceNumber={`Осталось ${'Events.remainSeats'} ${chackNum(
                1
              )}`}
            />
          </ul>
        </section>
      </main>
    </>
  );
}
