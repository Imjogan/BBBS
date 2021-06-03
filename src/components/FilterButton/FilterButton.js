
import './FilterButton.css';

function FilterButton({ nameMonth, id, onActive, onClick }) {
  

  return (
    <li className="menu__item">
      <button
        type="button"
        className={`menu__button ${onActive ? `menu__button_active` : ''}`}
        onClick={(e) => {
          onClick(e, id)
        }}
      >
        {nameMonth}
      </button>
    </li>
  );
}

export default FilterButton;