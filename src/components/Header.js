import {Link} from 'react-router-dom';


function Header (props) {
  return (
    <header className="header page__header">
        <Link to="./main" className="header__logo">наставники.про</Link>
        <nav className="navigation navigation_place_header">
          <ul className="navigation__links navigation__links_place_header">
            <li className="navigation__list">
              <a href="./calendar.html" className="navigation__link navigation__link_place_header">календарь</a>
            </li>
            <li className="navigation__list">
              <a href="./places.html" className="navigation__link navigation__link_place_header">куда пойти</a>
            </li>
            <li className="navigation__list">
              <a href="#" className="navigation__link navigation__link_place_header">вопросы</a>
            </li>
            <li className="navigation__list">
              <a href="#" className="navigation__link navigation__link_place_header">читать и смотреть</a>
            </li>
            <li className="navigation__list">
              <a href="#" className="navigation__link navigation__link_place_header">права детей</a>
            </li>
            <li className="navigation__list">
              <a href="#" className="navigation__link navigation__link_place_header">истории</a>
            </li>
          </ul>
        </nav>
        <form action="#" name="searcg" className="header__form-search display-none" method="POST">
          <label className="header__field">
            <input id="search-input" required name="search" minLength={2} maxLength={40} className="header__input" type="text" />
            <span className="header__input-error" />
          </label>
          <div className="header__answer">
            <p className="header__title">Причины подростковой агрессии</p>
            <p className="header__category">статьи</p>
          </div>
          <div className="header__answer">
            <p className="header__title">Агрессивное поведение детей-сирот</p>
            <p className="header__category">видео</p>
          </div>
          <div className="header__answer">
            <p className="header__title">Что делать если ваш младший агрессивно себя ведет, решил закрыть пару?</p>
            <p className="header__category">книги</p>
          </div>
        </form>
        <button type="button" className="header__search" />
        <div className="header__divisor" />
        <button type="button" onClick={props.onLogoClick} className={props.isLogged? "header__account" : "header__account"} />
        <button type="button" className="header__menu" />
      </header>
  )
}

export default Header;