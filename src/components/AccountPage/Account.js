import React from "react";
import Event from "./Event";
import CurrentUserContext from '../../context/CurrentUserContext';
import CurrentListOfEvents from '../../context/CurrentListOfEvents';
import api from "../../utils/api";

function Account(props) {
  const userData = React.useContext(CurrentUserContext);
  const [events, setEvents] = React.useState([]);
  const [city, setCity] = React.useState([]);

  React.useEffect(() => {
    api.getEvents().then((res) => {
      setEvents(res.data);
    });
  }, [])



  React.useEffect(() => {
    api.getCitiesList()
      .then((res) => res.data.map((el)=> (
        el.id === userData.city && setCity(el.name)
      )))
  }, []);

  return (
    <>
      <section className="account">
        <div className="account__buttons">
          <button type="button" className="account__button">{city}. Изменить ваш город</button>
          <button type="button" onClick={props.signOut} className="account__button">Выйти</button>
        </div>      
        <p className="account__events-text">{events.length!== 0 ? "Вы записаны на мероприятия:" : "У вас нет записи на мероприятие"}
        </p>
        <div className="account__events">
          <div className="account__scroll">
            { events.length!== 0 
              && events.map((event) => (
                event.booked &&
                <Event 
                  key={event.id} 
                  event={event}
                  enroll={props.enroll}
                />
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Account;