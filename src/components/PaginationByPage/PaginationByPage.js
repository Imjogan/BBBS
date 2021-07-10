import React, { useEffect } from "react";
import "./PaginationByPage.css";
import PaginationButton from "../PaginationButton/PaginationButton";

function PaginationByPage({ count }) {
  const [listBtn, setListBtn] = React.useState([]);

  function renderPagesBtn(a) {
    const list = [];
    for (let i = 1; i <= a; i + 1) {
      list.push(<PaginationButton key={i} pageNumber={i} />);
    }
    setListBtn(list);
    console.log(list);
  }

  useEffect(() => {
    renderPagesBtn(count);
  }, []);

  useEffect(() => {
    renderPagesBtn(count);
  }, [count]);

  return (
    <section className="select-page">
      <ul className="select-page__items">
        {listBtn}
        {/* <PaginationButton pageNumber="1" isActiv={true} /> */}
        {/* <PaginationButton pageNumber="2" isActiv={false} /> */}
      </ul>
      <button type="button" aria-label="next-page" className="button-next" />
    </section>
  );
}

export default PaginationByPage;
