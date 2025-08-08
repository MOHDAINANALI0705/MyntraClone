import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import App from './routes/App.jsx'
import Bag from './routes/bag.jsx'
import Home from './routes/Home.jsx';
import MyntraStore from '../store/index.js';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [{
      path: "/", element: <Home />,
    }, {
      path: "/bag", element: <Bag />
    }]
  }]
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={MyntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
