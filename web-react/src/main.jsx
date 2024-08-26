import { StrictMode } from 'react'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <BrowserRouter> <App /> </BrowserRouter>
  </StrictMode>,
)
