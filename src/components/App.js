import '../index.css';
import { Helmet } from 'react-helmet';
import { useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

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