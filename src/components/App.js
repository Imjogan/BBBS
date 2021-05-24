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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [listEvents, setListEvents] = useState({
    address: "",
    contact: "",
    description: "",
    endAt: "",
    startAt: "",
    title: "",
    tags: "",
    remainSeats:"",
  });
  useEffect(() => {
    Promise.all([api.getMainPage()])
      .then((res) => {
        setListEvents({
          address: res[0].data.event.address,
          contact: res[0].data.event.contact,
          description: res[0].data.event.description,
          endAt: res[0].data.event.endAt,
          startAt: res[0].data.event.startAt,
          title: res[0].data.event.title,
          tags: `${res[0].data.event.tags[0].name} + ${res[0].data.event.tags[1].name}`,
          remainSeats: res[0].data.event.remainSeats,
        });
        console.log(res[0].data.event);
      })
      .then(() => console.log(listEvents));
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
          </main>
          <Footer />
          <AuthPopup />
        </div>
      </div>
    </CurrentListOfEvents.Provider>
  );
}

export default App;
