import '../index.css';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
<<<<<<< HEAD
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import AuthPopup from './AuthPopup';

function App() {
  return (
    <div className='body'>
      <div className='page'>
        <Header />
        <Main />
        <Footer />
        <AuthPopup />
      </div>
    </div>
  );
}

export default App;
=======

function App() {

    return (
        <div>
            <Helmet>
                <title>Проект БББС</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
        <h1>Заготовка проекта!</h1>
        </div>
    )
}

export default App;
>>>>>>> marina
