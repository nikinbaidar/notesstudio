// Dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Local Imports
import Navigation from './Components/NavigationBar';
import Sidebar from './Components/Sidebar';
import Advertisements  from './Components/Ads';
import Copyright from './Components/Copyright.js';

import {
    Semesters,
    Quiz,
} from './Components/Main';

// CSS Imports
import './App.css';

class App extends React.Component {

    helmetContext = {};

    render() {
        return (
            <HelmetProvider context={this.helmetContext}>
            <Navigation/>
            <section>
            <BrowserRouter>
            <Sidebar/>
            <div id="main">
            <Routes>
                <Route path="/" element={<Semesters/>} />
                <Route path="/quiz" element={<Quiz name="questions"/>} />
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
