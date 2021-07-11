import "./PaginationButton.css";

function PaginationButton({ isActive, pageNumber }) {
  return (
    <li className="select-page__item">
      <button
        type="button"
        className={`select-page__btn ${isActive && "select-page__btn_active"}`}
      >
        {pageNumber}
      </button>
    </li>
  );
}

export default PaginationButton;
