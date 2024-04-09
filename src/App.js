import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Navigation, Main, Copyright} from './components/allComponents';

import './App.css';

const App = () => {
    const helmetContext = {};

    return (
        <HelmetProvider context={helmetContext}>
        <BrowserRouter>
        <Suspense fallback={<div className="loading"></div>}>
        <Navigation />
        <Main id="main" route="main"/>
        <Copyright />
        </Suspense>
        </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
