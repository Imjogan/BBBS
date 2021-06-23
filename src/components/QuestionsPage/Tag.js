import "./Tag.css";
import React from "react";

function Tag(props) {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <li className="filters__item">
      <button
        type="button"
        onClick={() => {
          setIsSelected(!isSelected);
        }}
        className={`filters__button ${
          isSelected ? "filters__button_active" : " "
        }`}
      >
        {props.name}
      </button>
    </li>
  );
}

export default Tag;
