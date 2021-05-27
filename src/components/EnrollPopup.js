import React from "react";

function EnrollPopup(props) {
  return (
    <div className="popup popup-calendar popup-calendar_type_event">
      <div className="popup-calendar__content">
        <button type="button" aria-label="close popup" className="popup__close popup__close_type_calendar" />
        <div className="list__header">
          <p className="list__caption">Волонтёры</p>
          <p className="list__date">декабрь / суббота</p>
        </div>
        <div className="list__theme">
          <h2 className="list__title">Субботний meet up: учимся проходить интервью</h2>
          <p className="list__number">05</p>
        </div>
        <div className="list__contacts">
          <p className="list__contact">12:00–14:00</p>
          <p className="list__contact list__contact_center">Садовническая наб., д. 77 стр. 1 (офис компании Ernst&amp;Young)
          </p>
          <p className="list__contact">Александра, +7 926 356-78-90</p>
        </div>
        <p className="list__event">Наконец-то наступила весна и мы пережили эту долгую зиму!
          И возможно, что внутренних сил и ресурса сейчас не так много, а до окончания учебного года
          ещё целых несколько месяцев. Поэтому приглашаем вас на встречу нашего ресурсного клуба
          "Наставник PRO", которую мы хотим посвятить теме поиска моральных сил,
          смыслов и внутреннего ресурса для общения и взаимодействия с нашими подопечными. </p>
        <div className="list__footer">
          <button type="submit" className="list__submit list__submit_type_register-popup">Записаться</button>
          <p className="list__place-number">Осталось 5 мест</p>
        </div>
      </div>
    </div>
  );
}

export default EnrollPopup;
