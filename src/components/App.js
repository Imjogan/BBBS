import "../index.css";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Route, Switch, useHistory } from "react-router-dom";
import Main from "./Main/Main";
import Footer from "./Footer";
import Header from "./Header";
import AuthPopup from "./AuthPopup";
import AboutUs from "./AboutUs/AboutUs";
import api from "../utils/api";
import Account from './Account/Account';
import ProtectedRoute from './ProtectedRoute';
import  CurrentUserContext  from '../context/CurrentUserContext';
import CurrentListOfEvents from '../context/CurrentListOfEvents';
import Calendar from "./Calendar/calendarPage";




function App() {
  const [isLogPopupOpen, setIsLogPopupOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [mainPageContent, setMainPageContent] = useState({});
  const [listEvents, setListEvents] = useState();
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    api.getEvents().then((res) => {
      console.log(res.data)
      setListEvents(res.data);
    });
}, [])



  useEffect(() => {
    api.getMainPage().then(res=> {
      setMainPageContent(res.data)
      setIsContentReady(true)
    })

}, [])



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
    setIsLogPopupOpen(true);
  }

  function handlePopupClose() {
    setIsLogPopupOpen(false);
  }
   

  function handleHeaderCalendarClick() {
    if (isLoggedIn) {
      history.push("/calendar");
    } else {
      handleLogPopupOpen();
    }
  }

  function handleProfileLogoClick() {
    if (isLoggedIn) {
      history.push("/account");
    } else {
      handleLogPopupOpen();
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
      <CurrentUserContext.Provider value={currentUser}>
        <CurrentListOfEvents.Provider value={listEvents}>
          <div className="body">
            <div className="page">
              <Header
                isLogged={isLoggedIn}
                onLogoClick={handleProfileLogoClick}
                onCalendarClick={handleHeaderCalendarClick}
              />
              <main class="content page__content">
                <Switch>
                  <Route path="/main">
                    {isContentReady ?
                  <Main isLoggedIn={isLoggedIn} pageContent={mainPageContent}/> : console.log('погодите')}
                  </Route>
                  <Route path="/about">
                    <AboutUs />
                  </Route>
                  <ProtectedRoute
                    component={Calendar}
                    path="/calendar"
                    isLoggedIn={isLoggedIn} 
                    />
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
