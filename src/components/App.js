import '../index.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Main from './Main/Main';
import Footer from './Footer';
import Header from './Header';
import AuthPopup from './AuthPopup';

function App() {
const [isLoggedIn, setIsLoggedIn] = React.useState(true)

  return (
    <div className='body'>
      <div className='page'>
        <Header />
        <main class='content page__content'>
          <Main isLoggedIn={isLoggedIn}/>
        </main>
          <Footer />
          <AuthPopup />
      </div>
    </div>
  );
}

export default App;



