import "./Tag.css";
import React from "react";

function Tag(props) {
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <li className="menu__item">
      <button
        type="button"
        onClick={() => {
          setIsSelected(!isSelected);
        }}
        className={`menu__button ${isSelected ? "menu__button_active" : " "}`}
      >
        {props.name}
      </button>
    </li>
  );
}

export default Tag;
