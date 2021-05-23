import "../index.css";
import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Main from "./Main/Main";
import Footer from "./Footer";
import Header from "./Header";
import AuthPopup from "./AuthPopup";
import AboutUs from "./AboutUs/AboutUs";
import api from "../utils/api";
import Calendar from "./Calendar/calendarPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);

  React.useEffect(() => {
    api
      .getCitiesList()
      .then((res) => console.log("Список городов:", res))
      .catch((err) => console.log(err));

    api
      .getUserProfile()
      .then((res) => console.log("Получение профиля:", res))
      .catch((err) => console.log(err));

    api
      .getMainPage()
      .then((res) => console.log("Главная страница:", res))
      .catch((err) => console.log(err));

    api
      .getEvents()
      .then((res) => console.log("Список событий:", res))
      .catch((err) => console.log(err));

    api
      .takePartInEvent({ event: 1 })
      .then((res) => console.log("Записаться на событие:", res))
      .catch((err) => console.log(err));

    api
      .auth({ username: "admin", password: "admin2" })
      .then((res) => {
        if (res.access) {
          localStorage.setItem("jwt", res.access);
          console.log("Токен:", res.access);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="body">
      <div className="page">
        <Header isLogged={isLoggedIn} />
        <main class="content page__content">
          <Route path="/main">
            <Main isLoggedIn={isLoggedIn} />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/calendar">
            <Calendar />
          </Route>
        </main>
        <Footer />
        <AuthPopup />
      </div>
    </div>
  );
}

export default App;
