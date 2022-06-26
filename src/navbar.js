import React, { useState, useEffect, useReducer, useContext, useRef, Children } from 'react';
import ReactDom from 'react-dom';
import { useCustomhook } from './context';
import { FaAirbnb, FaShoppingCart } from "react-icons/fa";
import "./index.css";
import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom";
let Navbar = () => {
  let { state, dispatch } = useCustomhook()
  let history = useNavigate()
  return (
    <>
      <div className="navbar" style={{ border: "1px solid black", backgroundColor: "dodgerblue" }}>
        <div style={{ border: "1px solid yellow", width: "75%", height: "50px", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="heading" style={{ cursor: "pointer", border: "1px solid green", fontSize: "20px", fontWeight: "550", color: "white", letterSpacing: "1px" }} onClick={() => history(`/`)}>Shopping Cart</div>
          <div className='cart' style={{ border: "1px solid red" }}>
            <button onClick={() => history("/cart")} style={{ border: "none", outline: "none", backgroundColor: "dodgerblue" }}> <FaShoppingCart style={{ fontSize: "38px", color: "white" }} />
              <span style={{ border: "1px solid black", position: "relative", top: "-18px", left: "-20px", color: "", fontWeight: "700" }}>{state.cart.length}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar;