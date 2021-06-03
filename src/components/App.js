import "../index.css";
import { useEffect, useState, useCallback, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Route, Switch, useHistory, Redirect, useLocation } from "react-router-dom";
import Main from "./Main/Main";
import Footer from "./Footer";
import Header from "./Header";
import AuthPopup from "./AuthPopup";
import AboutUs from "./AboutUs/AboutUs";
import api from "../utils/api";
import Account from './Account/Account';
import ProtectedRoute from './ProtectedRoute';
import CurrentUserContext from '../context/CurrentUserContext';
import CurrentListOfEvents from '../context/CurrentListOfEvents';
import Calendar from "./Calendar/calendarPage";
import NotFoundPage from "./NotFoundPage";
import Loader from './Loader';


function App() {
  const [isLogPopupOpen, setIsLogPopupOpen] = useState(false);
  const [isHeaderMobileOpen, setHeaderMobileOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [mainPageContent, setMainPageContent] = useState({});
  const [listEvents, setListEvents] = useState();
  const [isContentReady, setIsContentReady] = useState(false);
  const [path, setPath] = useState('');

  const history = useHistory();

  useEffect(() => {
    api.getEvents().then((res) => {
      setListEvents(res.data);
    });
  }, [])



  useEffect(() => {
    api.getMainPage().then(res => {
      setMainPageContent(res.data)
      setIsContentReady(true)
    })

  }, [])


  const loc = useLocation();
  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      api.getUserProfile().then(res => {
        setCurrentUser(res.data)
        setIsLoggedIn(true)
        history.push(loc.pathname)
      })

    }
  }, [])

  // при обратном скролле показываем header с display: fixed. При возврщании к началу страницы скрываем класс с фиксом
  const [fixed, setFixed] = useState(false);

  const offsetRef = useRef();
  offsetRef.current = 0;
  const offset = 50;

  const checkScroll = useCallback(() => {
    if (window.pageYOffset < offsetRef.current && window.pageYOffset > offset && !isLogPopupOpen) {
      setFixed(true);
    } else {
      setFixed(false);
    }
    offsetRef.current = window.pageYOffset;
  }, [isLogPopupOpen]);

  useEffect(() => {
    window.onscroll = () => {
      checkScroll();
    }
  }, [checkScroll]);

  function handleHeaderMobileClick() {
    setHeaderMobileOpen(!isHeaderMobileOpen);
    setFixed(false);
  }

  function handlePopupClose() {
    setIsLogPopupOpen(false);
  }

  function handleLogPopupOpen(data) {
    setIsLogPopupOpen(true);
    setPath(data)
  }

  function handleHeaderCalendarClick() {
    if (isLoggedIn) {
      history.push("/calendar");
    } else {
      handleLogPopupOpen("/calendar");
    }
  }

  function handleProfileLogoClick() {
    if (isLoggedIn) {
      history.push("/account");
    } else {
      handleLogPopupOpen("/account");
    }
  }

  function handleLoginSubmit(data) {
    const { password, username } = data;
    api.auth(username, password)
      .then(res => {
        if (res.data.access) {
          localStorage.setItem('jwt', res.data.refresh);
          setIsLoggedIn(true);
          handlePopupClose();
          history.push(path)
        }
      })
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  }

  // попапы календаря и запись
  const [isEnrollPopupOpen, setIsEnrollPopupOpen] = useState(false);
  const [wasEnrollPopupOpened, setWasEnrollPopupOpened] = useState(false);
  const [isConfirmPopupOpen, setIsConfirmPopupOpen] = useState(false);
  const [isSuccessPopupOpen, setIsSuccessPopupOpen] = useState(false);
  const [isErrorPopupOpen, setIsErrorPopupOpen] = useState(false);

  useEffect(() => {
    setIsErrorPopupOpen(false);
  }, [history]);

  function rememberEnrollPopupOpen(remember) {
    if (remember === false) {
      setWasEnrollPopupOpened(false);
    } else {
      setWasEnrollPopupOpened(true);
    }
  }

  function toggleEnrollPopup() {
    setIsEnrollPopupOpen(!isEnrollPopupOpen);
  }

  function toggleConfirmPopup() {
    setIsConfirmPopupOpen(!isConfirmPopupOpen);
  }

  function toggleSuccessPopup() {
    setIsSuccessPopupOpen(!isSuccessPopupOpen);
  }

  function toggleErrorPopup() {
    setIsErrorPopupOpen(!isErrorPopupOpen);
  }

  function handleEnroll(id) {
    api.takePartInEvent({ 'event': id })
      .then((res) => {
        console.log(res);
        toggleSuccessPopup();
        setWasEnrollPopupOpened(false);
      })
      .catch((e) => {
        console.log(e);
        toggleErrorPopup();
      })
      .finally(() => {
        setIsEnrollPopupOpen(false);
        setIsConfirmPopupOpen(false);
      })
  }

  function handleCancell(id) {
    // тут будет апи запрос для отмены записи
    console.log(`отменить мероприятие ${id}`);
    setIsEnrollPopupOpen(false);
  }

  const enrollMechanism = {
    handleEnroll, 
    handleCancell,
    toggleEnrollPopup, 
    isEnrollPopupOpen,
    rememberEnrollPopupOpen,
    wasEnrollPopupOpened,
    isErrorPopupOpen,
    toggleErrorPopup,
    toggleConfirmPopup,
    isConfirmPopupOpen,
    toggleSuccessPopup,
    isSuccessPopupOpen
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
                fixed={fixed}
                onMobileHeaderClick={handleHeaderMobileClick}
                isHeaderMobileOpen={isHeaderMobileOpen}
              />
              <main className="content page__content">
                <Switch>
                  <Route path="/main">
                    {isContentReady ?
                      <Main 
                        isLoggedIn={isLoggedIn} 
                        pageContent={mainPageContent} 
                        enroll={enrollMechanism}
                        history={history}
                      />
                    : <Loader />}
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
                    enroll={enrollMechanism}
                  />
                  <Route exact path="/">
                    <Redirect to="/main" />
                  </Route>
                  <Route path="*">
                    <NotFoundPage />
                  </Route>
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
