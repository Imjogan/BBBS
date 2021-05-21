function FilterButton(props) {
  return (
    <li className="menu__item">
      <button type="button" className="menu__button">{props.name}</button>
    </li>
  )
}

export default FilterButton;