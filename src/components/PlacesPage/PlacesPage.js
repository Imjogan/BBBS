import React, { useEffect } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import "./PlacesPage.css";
import Place from "../Place/Place";
import BigPlace from "../BigPlace/BigPlace";
import apiServer from "../../utils/apiServer";

function PlacesPage({
  toggleCityPopup,
  toggleAddPlacePopup,
  isCityPopupOpen,
  isLoggedIn,
  currentCity,
}) {
  const userData = React.useContext(CurrentUserContext);
  const [city, setCity] = React.useState(0);
  const [places, setPlaces] = React.useState([]);
  const [bigPlace, setBigPlace] = React.useState({});

  useEffect(() => {
    if (!isLoggedIn) {
      toggleCityPopup();
    } else {
      setCity(userData.city.id);
    }
  }, []);

  useEffect(() => {
    setCity(currentCity);
  }, [isCityPopupOpen]);

  useEffect(() => {
    if (city !== 0) {
      apiServer
        .getPlace(city)
        .then((res) => {
          setBigPlace(res);
        })
        .catch((err) => console.log(err));

      apiServer
        .getPlaces(city)
        .then((res) => {
          setPlaces(res.results);
        })
        .catch((err) => console.log(err));
    }
  }, [city]);

  return (
    <>
      <section className="content__places">
        <h1 className="title">Куда пойти</h1>

        {isLoggedIn && (
          <section className="message">
            <article className="block-message background-white block-message_style_places">
              <p className="block-message__text">
                Если вы были в интересном месте и хотите порекомендовать его
                другим наставникам –
                <button
                  onClick={toggleAddPlacePopup}
                  type="button"
                  className="block-message__button"
                >
                  заполните форму
                </button>
                , и мы добавим вашу рекомендацию.
              </p>
            </article>
          </section>
        )}

        {city ? (
          <section className="places">
            <BigPlace place={bigPlace} />
            <ul className="three-columns three-columns_style_place">
              {places.map((place) => (
                <Place key={place.id} place={place} />
              ))}
            </ul>
          </section>
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default PlacesPage;
