import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import  { MathJaxContext } from 'better-react-mathjax';

import { Navigation, Main, Copyright} from './components/allComponents';

import './App.css';

const App = () => {
    const helmetContext = {};

    return (
        <HelmetProvider context={helmetContext}>
        <BrowserRouter>
        <Suspense fallback={<div className="loading"></div>}>
        <Navigation />
        <MathJaxContext>
            <Main id="main" route="main"/>
        </MathJaxContext>
        <Copyright />
        </Suspense>
        </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
