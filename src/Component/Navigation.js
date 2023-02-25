import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import States from "./States";

function Navigation() {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/states">States</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/states" element={<States />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;