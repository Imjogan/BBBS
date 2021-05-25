
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
import ProtectedRoute from './ProtectedRoute'

function App() {
  const [isLogPopupOpen, setIsLogPopupOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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



  /* api.getUserProfile()

api.getCitiesList()

api.getMainPage()

  api.getMainPage()


  api.getEvents()


  api.takePartInEvent({ 'event': 1 })
    
 */


    function handleLogPopupOpen() {
      setIsLogPopupOpen(true)
    }

    /*  пока что jwt всегда тру, даже если не сохранен в localstorage, поэтому всегда открывается страница с акакунтом */
    const history = useHistory();
    function handleProfileLogoClick() {
    
     if(localStorage.getItem('jwt')) {
      setIsLoggedIn(true) /* временно добавил что бы открывался протектед роут */ 
      history.push('/account')
     } else {
      handleLogPopupOpen()
     }
    }

    function handleLoginSubmit (data) {
     const [username, password] = data;
     api.auth(username, password)
     .then(res => {
       if (res.access) {
         localStorage.setItem('jwt', res.refresh);
       }
     })
     .catch(err => console.log(err))
    }

  return (
    <>
      <Helmet>
        <title>BBBS</title>
        <link rel="canonical" /* href="https://www.tacobell.com/" */ />
      </Helmet>
      <CurrentListOfEvents.Provider value={listEvents}>
        <div className="body">
          <div className="page">
            <Header isLogged={isLoggedIn} onLogoClick={handleProfileLogoClick}/>
            <main class="content page__content">
              <Route path="/main">
                <Main isLoggedIn={isLoggedIn} />
              </Route>
              <Route path="/about">
                <AboutUs />
              </Route>
              <ProtectedRoute 
              component={Account} 
              path="/account" isLoggedIn={isLoggedIn}/>
            </main>
            <Footer />
            <AuthPopup isOpen={isLogPopupOpen} onSubmit={handleLoginSubmit}/>
          </div>

        </div>
      </CurrentListOfEvents.Provider>
      </>
  );
  
}

export default App;
