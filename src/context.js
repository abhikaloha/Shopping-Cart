
import React, { useState, useEffect, useReducer, useContext, useRef, Children } from 'react';
import ReactDom from 'react-dom';
import { createContext } from 'react/cjs/react.production.min';
import { reducer, initialState } from './reducer';

const url = `https://course-api.com/react-useReducer-cart-project`;
let context1 = createContext()
export let Context = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, initialState)
 /* let run = async () => {
    let response = await fetch(url)
    let response1 = await response.json()
    dispatch({ type: "show items", payload: response1 })
  }
  useEffect(() => {
    run()
  }, [])*/
  useEffect(() => {
    let { total } = state.cart.reduce((acc, item) => {
      acc.total += item.price * item.amount
      return acc
    }, { total: 0 })
    dispatch({ type: "updating total", payload: total })
  },[state.cart])
  return (
    <>
      <context1.Provider value={{ state, dispatch }}>
        {children}
      </context1.Provider>
    </>
  );
}

export let useCustomhook = () => {
  return useContext(context1)
}