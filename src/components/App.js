import "../index.css";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import CurrentListOfEvents from "../context/CurrentListOfEvents";
import Main from "./Main/Main";
import Footer from "./Footer";
import Header from "./Header";
import AuthPopup from "./AuthPopup";
import AboutUs from "./AboutUs/AboutUs";
import api from "../utils/api";
import Account from "./Account/Account";
import ProtectedRoute from "./ProtectedRoute";
import CurrentUserContext from "../context/CurrentUserContext";
import Calendar from "./Calendar/calendarPage";

function App() {
  const [isLogPopupOpen, setIsLogPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [curentUser, setCurrentUser] = useState({});
  const [listEvents, setListEvents] = useState();
  useEffect(() => {
    api.getEvents().then((res) => {
      setListEvents(res.data);
    });
  }, []);

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      api.getUserProfile().then((res) => {
        setCurrentUser(res.data);
        setIsLoggedIn(true);
      });
    }
  }, [history]);

  /* api.getUserProfile()

api.getCitiesList()

  api.getEvents()

  api.takePartInEvent({ 'event': 1 })
    
 */

  function handleLogPopupOpen() {
    setIsLogPopupOpen(true);
  }

  function handlePopupClose() {
    setIsLogPopupOpen(false);
  }

  /*  пока что jwt всегда тру, даже если не сохранен в localstorage, поэтому всегда открывается страница с акакунтом */
  function handleProfileLogoClick() {
    if (isLoggedIn) {
      history.push("/account");
    } else {
      handleLogPopupOpen();
    }
  }

  function handleLoginSubmit(data) {
    const { username, password } = data;
    api
      .auth(username, password)
      .then((res) => {
        if (res.access) {
          localStorage.setItem("jwt", res.refresh);
          setIsLoggedIn(true);
          history.push("/account");
        }
      })
      .catch((err) => console.log(err));
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  }

  return (
    <>
      <Helmet>
        <title>BBBS</title>
        <link rel="canonical" /* href="https://www.tacobell.com/" */ />
      </Helmet>
      <CurrentUserContext.Provider value={curentUser}>
        <CurrentListOfEvents.Provider value={listEvents}>
          <div className="body">
            <div className="page">
              <Header
                isLogged={isLoggedIn}
                onLogoClick={handleProfileLogoClick}
              />
              <main class="content page__content">
                <Switch>
                  <Route path="/main">
                    <Main isLoggedIn={isLoggedIn} />
                  </Route>
                  <Route path="/about">
                    <AboutUs />
                  </Route>
                  <Route path="/calendar">
                    <Calendar />
                  </Route>
                  <ProtectedRoute
                    component={Account}
                    path="/account"
                    isLoggedIn={isLoggedIn}
                    signOut={handleSignOut}
                  />
                </Switch>
              </main>
              <Footer />
              <AuthPopup
                isOpen={isLogPopupOpen}
                onClose={handlePopupClose}
                onSubmit={handleLoginSubmit}
              />
            </div>
          </div>
        </CurrentListOfEvents.Provider>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
