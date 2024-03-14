import React, { useState, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Navigation, Main, Copyright, Fonepay } from './components/allComponents';

import './App.css';

const App = () => {
    const helmetContext = {};

    const [parentState] = useState(false);

    const toggleParentState = () => {
        console.log("Hello, World!");
    };
    return (
        <HelmetProvider context={helmetContext}>
        { parentState && <Fonepay/>}
        <BrowserRouter>
        <Suspense fallback={<div className="loading"></div>}>
        <Navigation />
        <Main id="main" route="main" toggleParentState={toggleParentState}/>
        <Copyright />
        </Suspense>
        </BrowserRouter>
        </HelmetProvider>
    );
}


export default App;
