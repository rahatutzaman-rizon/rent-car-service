import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RouterProvider } from 'react-router-dom'
import Router from './router/Router.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={Router}>
  
   </RouterProvider>
  </React.StrictMode>,
)
