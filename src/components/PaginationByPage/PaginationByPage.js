import React, { useEffect } from "react";
import "./PaginationByPage.css";
import PaginationButton from "../PaginationButton/PaginationButton";

function PaginationByPage({
  count,
  applyNextPagination,
  currentPage,
  applyPreviousPagination,
}) {
  const [listBtn, setListBtn] = React.useState([]);

  useEffect(() => {
    setListBtn([...Array(count + 1).keys()].slice(1));
  }, [count]);

  return (
    <section className="select-page">
      {currentPage !== 1 && (
        <button
          onClick={applyPreviousPagination}
          type="button"
          aria-label="next-page"
          className="button-previous"
        />
      )}
      <ul className="select-page__items">
        {listBtn.map((i) => (
          <PaginationButton
            key={i}
            pageNumber={i}
            isActive={i === currentPage}
          />
        ))}
        {/* <PaginationButton pageNumber="..." /> */}
        {/* <PaginationButton pageNumber={listBtn.length - 1} /> */}
      </ul>
      {currentPage !== count && (
        <button
          onClick={applyNextPagination}
          type="button"
          aria-label="next-page"
          className="button-next"
        />
      )}
    </section>
  );
}

export default PaginationByPage;
