import { useEffect, useState } from "react";
import FilterButton from "../FilterButton";
import CalendarBlock from "./CalendarBlock";

export default function Calendar({ arrEvents }) {
  const [DataFilter, SetDataFilter] = useState();
  const [isMonth, setIsMonth] = useState(false);
  // useEffect(()=>{
  //     setIsMonth(true)
  // }, [DataFilter])

  function handlerData(arr) {
    Array.from(arr.forEach((item) => console.log(item)));
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
              onCaption={""}
              onData={""}
              ontitle={""}
              onNumber={""}
              onContactTime={""}
              onPlace={""}
              onContactPerson={""}
              onPlaceNumber={""}
            />
          </ul>
        </section>
      </main>
    </>
  );
}
