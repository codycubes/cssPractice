import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DroneXP } from './Components/DroneXP/DroneXP.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DroneXP />
    <App />
  </React.StrictMode>,
)
