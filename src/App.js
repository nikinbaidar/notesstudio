// Dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Local Imports
import Navigation from './Components/NavigationBar';
import Sidebar from './Components/Sidebar';
import Advertisements  from './Components/Ads';
import Copyright from './Components/Copyright.js';

import Main from './Components/Main';

// CSS Imports
import './App.css';

class App extends React.Component {

    constructor() {
        super();
        this.helmetContext = {};
    }

    render() {
        return (
            <HelmetProvider context={this.helmetContext}>
            <Navigation/>
            <section>
            <BrowserRouter>
            <Sidebar/>
            <div id="main">
            <Routes>
                <Route path="/" element={<Main.Semesters/>} />
                <Route path="/quiz" element={<Main.Quiz name="questions"/>} />
            </Routes>
            </div>
            </BrowserRouter>
            <Advertisements/>
            </section>
            <Copyright/>
            </HelmetProvider>
        )
    }; 
}

export default App;
