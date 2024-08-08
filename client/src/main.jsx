import React from 'react'
import ReactDOM from 'react-dom/client'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import App from '#app';


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />

    <ToastContainer position='bottom-left' autoClose={2000} />
  </>
)
