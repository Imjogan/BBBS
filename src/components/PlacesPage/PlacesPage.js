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
    }
  }, []);

  useEffect(() => {
    if (currentCity !== 0) {
      api.getPlaces().then((res) => {
        console.log(res.data);
        setPlaces(res.data.results);
      });
    }
  }, [isCityPopupOpen]);

  return (
    <>
      <section className="content__header">
        <h1 className="title">Куда пойти</h1>
        <Place />
      </section>
    </>
  );
}

export default PlacesPage;
