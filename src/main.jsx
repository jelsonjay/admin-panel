import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/main.scss'
import { DarkModeContextProvider } from "./context/darkModeContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <DarkModeContextProvider>
  <App />
  </DarkModeContextProvider>
  </React.StrictMode>,
)
