import React, { useEffect } from "react";
import CurrentUserContext from "../../context/CurrentUserContext";
import Place from "../Place/Place";
import api from "../../utils/api";
import "./PlacesPage.css";

function PlacesPage({
  toggleCityPopup,
  isCityPopupOpen,
  isLoggedIn,
  currentCity,
}) {
  const userData = React.useContext(CurrentUserContext);
  const [cityId, setCityId] = React.useState(null);
  const [places, setPlaces] = React.useState([]);

  useEffect(() => {
    if (!isLoggedIn) {
      toggleCityPopup();
    } else {
      setCityId(userData.city.id);
    }
  }, []);

  useEffect(() => {
    setCityId(currentCity);
  }, [isCityPopupOpen]);

  useEffect(() => {
    api.getPlaces().then((res) => {
      setPlaces(res.data.results);
    });
  }, [cityId]);

  return (
    <>
      <section className="content__header">
        <h1 className="title">Куда пойти</h1>
        <section className="three-columns three-columns_style_place">
          {places.map((place) => (
            <Place key={place.id} place={place} />
          ))}
        </section>
      </section>
    </>
  );
}

export default PlacesPage;
