import '../index.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Main from './Main/Main';
import Footer from './Footer';
import Header from './Header';
import AuthPopup from './AuthPopup';
import AboutUs from './AboutUs/AboutUs';
import api from '../utils/api'

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true)



 /*  api.getCitiesList()



  api.getUserProfile()


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
    .catch(err => console.log(err))
 */

  return (
    <div className='body'>
      <div className='page'>
        <Header isLogged={isLoggedIn} />
        <main class='content page__content'>
          <Route path='/main'>
            <Main isLoggedIn={isLoggedIn} />
          </Route>
          <Route path='/about'>
            <AboutUs />
          </Route>
        </main>
        <Footer />
        <AuthPopup />
      </div>
    </div>
  );
}

export default App;



