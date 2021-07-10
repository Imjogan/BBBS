import "./PaginationButton.css";

function PaginationButton(props) {
  return (
    <li className="select-page__item">
      <button
        type="button"
        className={`select-page__btn ${
          props.isActiv && "select-page__btn_active"
        }`}
      >
        {props.pageNumber}
      </button>
    </li>
  );
}

export default PaginationButton;
