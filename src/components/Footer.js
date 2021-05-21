function Footer() {
  return (
    <footer className='footer page__footer'>
      <div className='footer__three-columns'>
        <a href='/#' className='footer__logo'></a>
        <button type='button' className='footer__donation'>
          Помочь деньгами
        </button>
        <div className='footer__info'>
          <p className='footer__copyright'>&copy; Старшие Братья Старшие Сестры</p>
          <p className='footer__about'>
            Разработка – студенты{' '}
            <a href='/#' className='footer__link'>
              Яндекс.Практикум
            </a>
          </p>
          <p className='footer__about'>
            Концепция и дизайн –{' '}
            <a href='/#' className='footer__link'>
              krkr.design
            </a>
          </p>
        </div>

        <nav className='navigation navigation_place_footer'>
          <ul className='navigation__links navigation__links_place_footer'>
            <li className='navigation__list navigation__list_place_footer'>
              <a href='./about.html' className='navigation__link navigation__link_place_footer'>
                о проекте
              </a>
            </li>
            <li className='navigation__list navigation__list_place_footer'>
              <a href='./calendar.html' className='navigation__link navigation__link_place_footer'>
                календарь
              </a>
            </li>
            <li className='navigation__list navigation__list_place_footer'>
              <a href='./places.html' className='navigation__link navigation__link_place_footer'>
                куда пойти
              </a>
            </li>
            <li className='navigation__list navigation__list_place_footer'>
              <a href='/#' className='navigation__link navigation__link_place_footer'>
                вопросы
              </a>
            </li>
            <li className='navigation__list navigation__list_place_footer'>
              <a href='/#' className='navigation__link navigation__link_place_footer'>
                читать и смотреть
              </a>
            </li>
            <li className='navigation__list navigation__list_place_footer'>
              <a href='/#' className='navigation__link navigation__link_place_footer'>
                права детей
              </a>
            </li>
            <li className='navigation__list navigation__list_place_footer'>
              <a href='/#' className='navigation__link navigation__link_place_footer'>
                истории
              </a>
            </li>
          </ul>
        </nav>
        <nav className='navigation navigation_place_footer'>
          <ul className='navigation__links navigation__links_place_footer'>
            <li className='navigation__list navigation__list_place_footer'>
              <a
                href='http://facebook.com'
                target='_blank'
                className='navigation__link navigation__link_place_footer'
                rel="noreferrer"
              >
                facebook
              </a>
            </li>
            <li className='navigation__list navigation__list_place_footer'>
              <a
                href='http://vk.com'
                target='_blank'
                className='navigation__link navigation__link_place_footer'
                rel="noreferrer"
              >
                vkontakte
              </a>
            </li>
            <li className='navigation__list navigation__list_place_footer'>
              <a
                href='http://instagram.com'
                target='_blank'
                className='navigation__link navigation__link_place_footer'
                rel="noreferrer"
              >
                instagram
              </a>
            </li>
            <li className='navigation__list navigation__list_place_footer'>
              <a
                href='http://youtube.com'
                target='_blank'
                className='navigation__link navigation__link_place_footer'
                rel="noreferrer"
              >
                youtube
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
