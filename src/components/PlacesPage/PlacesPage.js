import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";
import "./PlacesPage.css";
import Place from "../Place/Place";
import BigPlace from "../BigPlace/BigPlace";
import apiServer from "../../utils/apiServer";
import Filter from "../Filter/Filter";
import PaginationByPage from "../PaginationByPage/PaginationByPage";

function PlacesPage({
  toggleCityPopup,
  toggleAddPlacePopup,
  isCityPopupOpen,
  isLoggedIn,
  currentCity,
}) {
  const { pathname } = useLocation();
  const userData = React.useContext(CurrentUserContext);
  const [city, setCity] = React.useState(0);
  const [isLoad, setIsLoad] = React.useState(false);
  const [places, setPlaces] = React.useState([]);
  const [bigPlace, setBigPlace] = React.useState(null);

  // пагинация
  const [pageCount, setPageCount] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [nextPage, setNextPage] = React.useState("");
  const [previousPage, setPreviousPage] = React.useState("");

  useEffect(() => {
    if (!isLoggedIn) {
      toggleCityPopup();
    } else {
      setCity(userData.city.id);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      toggleCityPopup();
    } else {
      setCity(userData.city.id);
    }
  }, [pathname]);

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
          setPageCount(Math.ceil((res.count - 3) / 6) + 1);
          setCurrentPage(1);
          setNextPage(res.next);
          setIsLoad(true);
        })
        .catch((err) => {
          console.log(err);
          setIsLoad(false);
        });
    }
  }, [city]);

  function applyFilter(filterList) {
    if (city !== 0)
      apiServer.getPlacesWithParams(city, filterList).then((res) => {
        setPlaces(res.results);
        setPageCount(Math.ceil((res.count - 3) / 6) + 1);
        setCurrentPage(1);
        setNextPage(res.next);
      });
  }

  function paginateNextPlaces() {
    apiServer.getPagination(nextPage).then((res) => {
      setPlaces(res.results);
      setNextPage(res.next);
      setPreviousPage(res.previous);
      setCurrentPage(currentPage + 1);
    });
  }

  function paginatePreviousPlaces() {
    apiServer.getPagination(previousPage).then((res) => {
      setPlaces(res.results);
      setNextPage(res.next);
      setPreviousPage(res.previous);
      setCurrentPage(currentPage - 1);
    });
  }

  return (
    <section className="content__places">
      <h1 className="title">Куда пойти</h1>
      <Filter isLoad={isLoad} applyFilter={applyFilter} />

      {/* сообщение для наставника с кнопкой для открытия формы */}
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
      {/* конец сообщения для наставника с кнопкой для открытия формы */}

      {city !== 0 && !isCityPopupOpen && (
        <section className="places">
          {bigPlace && currentPage === 1 && <BigPlace place={bigPlace} />}
          <ul className="three-columns three-columns_style_place">
            {places.map((place) => (
              <Place key={place.id} place={place} />
            ))}
          </ul>
        </section>
      )}

      {pageCount > 1 && (
        <PaginationByPage
          count={pageCount}
          applyNextPagination={paginateNextPlaces}
          currentPage={currentPage}
          applyPreviousPagination={paginatePreviousPlaces}
        />
      )}
    </section>
  );
}

export default PlacesPage;
