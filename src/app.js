import React, { useState, useEffect, useReducer, useContext, useRef, Children } from 'react';
import ReactDom from 'react-dom';
import "./index.css";
import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom";
import { Home1 } from "./home.js";
import Navbar from "./navbar.js";
import { Cart } from "./cart.js";
let Home = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home1 />} />
                    <Route path="/cart" element={< Cart />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Home;