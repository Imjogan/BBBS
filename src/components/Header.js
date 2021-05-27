import React from 'react';
import { Link } from 'react-router-dom';


function Header (props) {

  return (
    <>
      <header className={props.fixed ? "header page__header header_type_position-fixed" : "header page__header"}>
        <Link to="/main" className="header__logo">наставники.про</Link>
        <nav className="navigation navigation_place_header">
          <ul className="navigation__links navigation__links_place_header">
            <li className="navigation__list">
              <a href="#" onClick={props.onCalendarClick} className="navigation__link navigation__link_place_header">календарь</a>
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
        <button 
          type="button" className="header__menu" 
          onClick={props.onMobileHeaderClick} 
        />
      </header>

      {<div class={props.isHeaderMobileOpen ? "popup-menu visible-block" : "popup-menu"}>
        <div class="popup-menu__header">
          <button type="button" class="popup-menu__search" />
          <button type="button" onClick={props.onLogoClick} class="popup-menu__account" />
          <Link class="popup-menu__logo">наставники.про</Link>
          <button 
            type="button" 
            aria-label="close popup"
            class="popup-menu__close" 
            onClick={props.onMobileHeaderClick}
          />
        </div>
        <nav class="popup-menu__navigation">
          <ul class="popup-menu__links">
            <li class="popup-menu__list">
              <Link to="/about" class="popup-menu__link">о проекте</Link>
            </li>
            <li class="popup-menu__list">
              <Link to="/calendar" class="popup-menu__link" onClick={props.onCalendarClick}>календарь</Link>
            </li>
            <li class="popup-menu__list">
              <Link to="#" class="popup-menu__link">куда пойти</Link>
            </li>
            <li class="popup-menu__list">
              <Link to="#" class="popup-menu__link">вопросы</Link>
            </li>
            <li class="popup-menu__list">
              <Link to="#" class="popup-menu__link">читать и смотреть</Link>
            </li>
            <li class="popup-menu__list">
              <Link to="#" class="popup-menu__link">права детей</Link>
            </li>
            <li class="popup-menu__list">
              <Link to="#" class="popup-menu__link">истории</Link>
            </li>
          </ul>
          <ul class="popup-menu__links">
            <li class="popup-menu__list">
              <a href="http://facebook.com" class="popup-menu__link">facebook</a>
            </li>
            <li class="popup-menu__list">
              <a href="http://vk.com" class="popup-menu__link">vkontakte</a>
            </li>
            <li class="popup-menu__list">
              <a href="http://instagram.com" class="popup-menu__link">instagram</a>
            </li>
            <li class="popup-menu__list">
              <a href="http://youtube.com" class="popup-menu__link">youtube</a>
            </li>
          </ul>
        </nav>
        <div class="popup-menu__footer">
          <p class="popup_menu__city">Москва.</p>
          <button type="button" class="popup-menu__change-city">Изменить город</button>
          <button type="button" class="popup-menu__exit">Выйти</button>
        </div>
      </div>}
    </>
  )
}

export default Header;