import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import './App.css'

function App() {

    return (
        <>
        <BrowserRouter>

            <ul>

                <li>
                    <NavLink to="/" style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black' })}>
                    Home
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/about" style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black' })}>
                    About
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/contact" style={({ isActive }) => ({
                        color: isActive ? 'red' : 'black' })}>
                    Contact
                    </NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
