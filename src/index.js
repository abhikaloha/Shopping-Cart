import React, { useState, useEffect, useReducer, useContext, useRef, useMemo, useCallback } from 'react';
import ReactDom from 'react-dom';
import "./index.css";   //for css purpose only
import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom";
import Home from "./app.js";
import { Context } from "./context.js";

ReactDom.render(
  <Context>
    <Home />
  </Context>
  , document.getElementById('root'))

