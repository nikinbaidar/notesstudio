// Dependencies
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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

    router = createBrowserRouter([
        {
            path: "/",
            element: <Semesters/>
        },
        {
            path: "/quiz",
            element: <Quiz/>
        },
    ])

    render() {
        return (
            <>
            <Navigation/>
            <section>
                <Sidebar/>
                <div id="main"> 
                    <RouterProvider router={this.router} />
                </div>
                <Advertisements/>
            </section>
            <Copyright/>
            </>
        )
    }; 
}

export default App;
