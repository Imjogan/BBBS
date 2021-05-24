import React from "react";
import Event from "./Event";
import './Account.css';

function Account(props) {
  const events = [
    {date: '16', month: 'декабрь', about: 'блаблаблабла'}, {date: '16', month: 'декабрь', about: 'блаблаблабла'}, {date: '16', month: 'декабрь', about: 'блаблаблабла'},
    {date: '16', month: 'декабрь', about: 'блаблаблабла'}, {date: '16', month: 'декабрь', about: 'блаблаблабла'}, {date: '16', month: 'декабрь', about: 'блаблаблабла'},
  ];

  const city = "Москва"; // будем получать с сервера из контекста пользователя

  return (
    <section className="account">
      <div className="account__buttons">
        <button type="button" className="account__button">{city}. Изменить ваш город</button>
        <button type="button" className="account__button">Выйти</button>
      </div>      
      <p className="account__events-text">{events.length!== 0 ? "Вы записаны на мероприятия:" : "У вас нет записи на мероприятие"}
      </p>
      <div className="account__events">
        <div className="account__scroll">
          { events.length!== 0 
              && events.map((event) => (
                <Event date={event.date} month={event.month} about={event.about} />
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default Account;