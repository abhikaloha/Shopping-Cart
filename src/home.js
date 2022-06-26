import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';
import ReactDom from 'react-dom';
import { icons } from 'react-icons';
import { useCustomhook } from './context';
import { ITEMS } from './data';
import { FaAirbnb, FaShoppingCart } from "react-icons/fa";
export let Home1 = () => {
  console.log("inside home1 component")
  let { state, dispatch } = useCustomhook()
  return (
    <>
      <div className='grid-main' style={{ border: "1px solid green", width: "75%", margin: "auto", padding: "10px", display: "grid", gridTemplateColumns: "220px 220px 220px", justifyContent: "space-between", rowGap: "25px", marginTop: "50px", marginBottom: "50px" }}>
        {state.items.map((unit) => {
          let { title, price, src, amount, id, delivery } = unit
          return (
            <div key={unit.id} style={{
              border: "1px  solid red"
              , boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.3)"
            }}>
              <img src={src} style={{ height: "210px", width: "220px" }}></img>
              <div style={{ border: "1px solid red", padding: "5px 5px 5px 9px" ,fontSize:"17px"}}>{title}</div>
              <div style={{ border: "1px solid green", padding: "5px 5px 5px 9px", color: "chartreuse" }}>${price}</div>
              <div style={{ border: "1px solid green", padding: "5px 5px 5px 9px", fontSize: "14px" }}>{delivery}</div>
              <div className="btn-wrapper" style={{ textAlign: "center", padding: "6px" }}> {!(state.cart.some((item) => item.id == id)) ? <button className="addbtn" style={{ backgroundColor: "green", border: "none", padding: "6px 12px", width: "140px", borderRadius: "2px", fontSize: "15px", fontWeight: "520", color: "white" }} onClick={() => dispatch({ type: "add to cart", payload: id })}>Add To Cart</button> :
                <button className='removebtn' style={{ backgroundColor: "red", border: "none", padding: "6px 12px", width: "160px", borderRadius: "2px", fontSize: "15px", fontWeight: "500", color: "white" }} onClick={() => dispatch({ type: "remove from cart", payload: id })}>Remove from cart</button>}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}