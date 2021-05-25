import "../index.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import CurrentListOfEvents from "../context/CurrentListOfEvents";
import Main from "./Main/Main";
import Footer from "./Footer";
import Header from "./Header";
import AuthPopup from "./AuthPopup";
import AboutUs from "./AboutUs/AboutUs";
import api from "../utils/api";
import Calendar from "./Calendar/calendarPage"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [listEvents, setListEvents] = useState();
  useEffect(() => {
    api.getEvents().then((res) => {
      console.log(res.data);
      setListEvents(res.data);
    });
  }, []);

  /* api.getUserProfile()


  api.getMainPage()


  api.getEvents()


  api.takePartInEvent({ 'event': 1 })
    

  api.auth({ username: 'admin', password: 'admin2' })
    .then(res => {
      if (res.access) {
        localStorage.setItem('jwt', res.access);
        console.log('Токен:', res.access)
      }
    })
    .catch(err => console.log(err)) */

  return (
    <CurrentListOfEvents.Provider value={listEvents}>
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
    </CurrentListOfEvents.Provider>
  );
}

export default App;
