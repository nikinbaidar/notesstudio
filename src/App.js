import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Navigation from './Components/NavigationBar';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import Advertisements  from './Components/Ads';
import Copyright from './Components/Copyright';

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
                <Route path="/" element={<Main.Quiz name="2079pastQuestions"
                    title="Nepal Engineering Council License Exam 2079 Chaitra"/>} />
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
