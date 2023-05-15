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

    hideLeftSideBar = () => {
        const leftsidebar = document.getElementById('leftsidebar');
        const overlay = document.querySelector('section > div.overlay');
        leftsidebar.classList.toggle('active');
        leftsidebar.classList.toggle('inactive');
        overlay.classList.toggle('active');
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
                        title="NEC License Exam 2079"
                        heading="Nepal Engineering Council License Exam 2079 Chaitra"/>} />
                    <Route path="/disclaimer" element={<Main.Disclaimer title="Disclaimer"/>} />
                    <Route path="/faq" element={<Main.Faq title="FAQ"/>} />
                </Routes>
                </div>
                </BrowserRouter>
            <Advertisements/>
            <div className="overlay" onClick={this.hideLeftSideBar}></div>
            </section>
            <Copyright/>
            </HelmetProvider>
        )
    }; 
}

export default App;
