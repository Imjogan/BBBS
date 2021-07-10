import React, { useEffect } from "react";
import "./PaginationByPage.css";
import PaginationButton from "../PaginationButton/PaginationButton";

function PaginationByPage({ count }) {
  const [listBtn, setListBtn] = React.useState([]);

  useEffect(() => {
    setListBtn([...Array(count).keys()].slice(1));
  }, [count]);

  return (
    <section className="select-page">
      <ul className="select-page__items">
        {listBtn.map((element, i) => (
          <PaginationButton key={i} pageNumber={element} />
        ))}
        {/* <PaginationButton pageNumber="1" isActiv={true} /> */}
        {/* <PaginationButton pageNumber="2" isActiv={false} /> */}
      </ul>
      <button type="button" aria-label="next-page" className="button-next" />
    </section>
  );
}

export default PaginationByPage;
