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
                </div>

            <Routes>
                <Route path="/" element={<Semesters/>} />
                <Route path="/quiz" element={<Quiz/>} />
            </Routes>

            </BrowserRouter>
                <Advertisements/>
            </section>
            <Copyright/>
            </>
        )
    }; 
}

export default App;



// import React from "react";
// import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
//
// import './App.css'
//
// function App() {
//
//     return (
//         <>
//         <BrowserRouter>
//
//             <ul>
//
//                 <li>
//                     <NavLink to="/" style={({ isActive }) => ({
//                         color: isActive ? 'red' : 'black' })}>
//                     Home
//                     </NavLink>
//                 </li>
//
//                 <li>
//                     <NavLink to="/about" style={({ isActive }) => ({
//                         color: isActive ? 'red' : 'black' })}>
//                     About
//                     </NavLink>
//                 </li>
//
//                 <li>
//                     <NavLink to="/contact" style={({ isActive }) => ({
//                         color: isActive ? 'red' : 'black' })}>
//                     Contact
//                     </NavLink>
//                 </li>
//             </ul>
//
//             <Routes>
//                 <Route path="/" element={<h1>Home</h1>} />
//                 <Route path="/about" element={<h1>About</h1>} />
//                 <Route path="/contact" element={<h1>Contact</h1>} />
//             </Routes>
//         </BrowserRouter>
//         </>
//     );
// }
//
// export default App;
