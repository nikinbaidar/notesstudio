// Dependencies
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import './Queries.css';

class App extends React.Component {

    render() {
        return (
            <>
            <Navigation/>
            <section>
            <BrowserRouter>
            <Sidebar/>
            <div id="main">
            <Routes>
                <Route path="/" element={<Semesters/>} />
                <Route path="/quiz" element={<Quiz/>} />
            </Routes>
            </div>
            </BrowserRouter>
            <Advertisements/>
            </section>
            <Copyright/>
            </>
        )
    }; 
}

export default App;
