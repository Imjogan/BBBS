import React from 'react';
import {Link} from 'react-router-dom';


function Header (props) {

  return (
    <header className={props.fixed ? "header page__header header_type_position-fixed" : "header page__header"}>
        <Link to="/main" className="header__logo">наставники.про</Link>
        <nav className="navigation navigation_place_header">
          <ul className="navigation__links navigation__links_place_header">
            <li className="navigation__list">
              <Link to="/calendar" className="navigation__link navigation__link_place_header">календарь</Link>
            </li>
            <li className="navigation__list">
              <Link to="#" className="navigation__link navigation__link_place_header">куда пойти</Link>
            </li>
            <li className="navigation__list">
              <Link to="#" className="navigation__link navigation__link_place_header">вопросы</Link>
            </li>
            <li className="navigation__list">
              <Link to="#" className="navigation__link navigation__link_place_header">читать и смотреть</Link>
            </li>
            <li className="navigation__list">
              <Link to="#" className="navigation__link navigation__link_place_header">права детей</Link>
            </li>
            <li className="navigation__list">
              <Link to="#" className="navigation__link navigation__link_place_header">истории</Link>
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