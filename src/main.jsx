
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import './styles.css'
import 'animate.css';
import { MoviesRoutes } from './routes/MoviesRoutes';
import { store } from './store/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={ store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MoviesRoutes />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>
)
