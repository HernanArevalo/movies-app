import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import './styles.css'
import 'animate.css';
import { MoviesRoutes } from './routes/MoviesRoutes';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <MoviesRoutes />
    </BrowserRouter>
  // </React.StrictMode>
)
