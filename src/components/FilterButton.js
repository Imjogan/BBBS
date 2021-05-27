function FilterButton({nameMonth}) {
  return (
    <li className="menu__item">
      <button type="button" className="menu__button">{nameMonth}</button>
    </li>
  )
}

export default FilterButton;