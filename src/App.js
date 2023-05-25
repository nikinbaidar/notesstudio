import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation, Main, Copyright } from './Components/MyComponents';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.helmetContext = {};
    }

    render() {
        return (
            <HelmetProvider context={this.helmetContext}>
            <BrowserRouter>
                <Navigation />
                <Main />
                <Copyright />
            </BrowserRouter>
            </HelmetProvider>
        );
    }; 
}

export default App;
