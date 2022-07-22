import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";   //for css purpose only
import Home from "./app.js";
import { Context } from "./context.js";

ReactDom.render(
  <Context>
    <Home />
  </Context>
  , document.getElementById('root'))

