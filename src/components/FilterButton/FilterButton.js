import "./FilterButton.css";
import React from "react";

function FilterButton({ name, id, onActive, onClick }) {
  const [isSelected, setIsSelected] = React.useState(false);

  const handleTagClick = () => {
    setIsSelected(!isSelected);
  };

  function setIssue() {
    if (onActive === undefined) return isSelected;
    return onActive;
  }

  return (
    <li className="filters__item">
      <button
        type="button"
        className={`filters__button ${
          setIssue() ? `filters__button_active` : ""
        }`}
        onClick={(e) => {
          handleTagClick();
          onClick(e, id);
        }}
      >
        {name}
      </button>
    </li>
  );
}

export default FilterButton;
