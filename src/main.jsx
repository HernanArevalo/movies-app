import React from 'react'
import ReactDOM from 'react-dom/client'
import { MovieComponent } from './movies/components/MovieComponent'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MovieComponent />
  // </React.StrictMode>
)
