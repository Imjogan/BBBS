import '../index.css';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Main from './Main/Main';
import Footer from './Footer';
import Header from './Header';
import AuthPopup from './AuthPopup';

function App() {
  return (
    <div className='body'>
      <div className='page'>
        <Header />
        <main class='content page__content'>
          <Main />
          <Footer />
          <AuthPopup />
        </main>
      </div>
    </div>
  );
}

export default App;



