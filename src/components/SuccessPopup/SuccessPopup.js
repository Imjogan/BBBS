import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SuccessPopup.css";
// eslint-disable-next-line import/extensions,import/no-unresolved
import Animation from "../Animation/Animation";
import successCalendar from "../../lotties/success_calendar.json";
import successPlaces from "../../lotties/success_places.json";

function SuccessPopup(props) {
  const { enroll, history, event } = props;

  const [animation, setAnimation] = useState(successPlaces);

  const { pathname } = useLocation();
  function placesPage() {
    return pathname.includes("places");
  }

  useEffect(() => {
    if (placesPage()) {
      setAnimation(successPlaces);
    } else {
      setAnimation(successCalendar);
    }
  }, [pathname]);

  function goToPage() {
    if (!placesPage()) history.push("/calendar");
    enroll.toggleSuccessPopup();
  }

  return (
    <div
      className={
        enroll.isSuccessPopupOpen
          ? "visible-block popup popup-calendar popup-calendar_type_done"
          : "popup popup-calendar popup-calendar_type_done"
      }
    >
      {event && (
        <div className="popup-calendar__content">
          <button
            type="button"
            aria-label="close popup"
            className="popup__close popup__close_type_calendar"
            onClick={() => enroll.toggleSuccessPopup()}
          />
          <Animation
            animationData={animation}
            containerClassname="popup-calendar__img"
          />
          {!placesPage() && (
            <p className="list__done">
              Вы записаны на мероприятие
              <br />
              {event.title}
            </p>
          )}
          <p className="list__done">
            {placesPage()
              ? "Спасибо, мы проверим информацию, и скоро все пользователи смогут увидеть вашу" +
                " рекомендацию"
              : "Если у вас не получится прийти — отмените, пожалуйста, запись."}
          </p>
          <div className="list__buttons">
            <button
              type="submit"
              className="list__submit list__submit_return"
              onClick={() => goToPage()}
            >
              {placesPage()
                ? "Вернуться к рекомендациям"
                : "Вернуться к календарю"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SuccessPopup;
