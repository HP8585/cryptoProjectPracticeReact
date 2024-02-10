import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index.jsx'
import CoinPage from './pages/coin.jsx';
import './assets/index.css';
import { Provider } from 'react-redux';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import store from './store.js';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Index/>,
    },
    {
      path: "/coin/:id",
      element: <CoinPage/>
    }
  ]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)
