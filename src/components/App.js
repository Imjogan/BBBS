
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
import Account from './Account/Account';
import ProtectedRoute from './ProtectedRoute';
import CurrentUserContext from '../context/CurrentUserContext';



function App() {
  const [isLogPopupOpen, setIsLogPopupOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [curentUser, setCurrentUser] = useState({})
  const [listEvents, setListEvents] = useState({
    address: "",
    contact: "",
    description: "",
    endAt: "",
    startAt: "",
    title: "",
    tags: "",
    remainSeats: "",
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
      })
  }, []);

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      api.getUserProfile().then(res => {
        setCurrentUser(res.data)
        setIsLoggedIn(true)
      })
       
    } 
  }, [])

  

  /* api.getUserProfile()

api.getCitiesList()

  api.getEvents()

  api.takePartInEvent({ 'event': 1 })
    
 */


  
  function handleLogPopupOpen() {
    setIsLogPopupOpen(true)
  }

  function handlePopupClose () {
    setIsLogPopupOpen(false)
  }

  
  function handleProfileLogoClick() {

    if (isLoggedIn) {
      history.push('/account')
    } else {
      handleLogPopupOpen()
    }
  }

  function handleLoginSubmit(data) {
    const {password, username} = data;
    api.auth(username, password)
      .then(res => {
        if (res.data.access) {
          localStorage.setItem('jwt', res.data.refresh);
          setIsLoggedIn(true);
          handlePopupClose ();
          history.push('/account')
        }
      })
      .catch(err => console.log(err))
  }

  function handleSignOut () {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false)
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
            <Header isLogged={isLoggedIn} onLogoClick={handleProfileLogoClick} />
            <main class="content page__content">
              <Switch>
                <Route path="/main">
                  <Main isLoggedIn={isLoggedIn} />
                </Route>
                <Route path="/about">
                  <AboutUs />
                </Route>
                <ProtectedRoute
                  component={Account}
                  path="/account" isLoggedIn={isLoggedIn} 
                  signOut={handleSignOut} />
              </Switch>
            </main>
            <Footer />
            <AuthPopup isOpen={isLogPopupOpen} onClose={handlePopupClose} onSubmit={handleLoginSubmit} />
          </div>

        </div>
      </CurrentListOfEvents.Provider>
      </CurrentUserContext.Provider>
    </>
  );

}

export default App;
