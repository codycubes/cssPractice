import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DroneXP } from './Components/DroneXP/DroneXP.jsx'
import { ScrollControls } from '@react-three/drei'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
  
      <DroneXP />

   
    </Suspense>
   
    <App />
  </React.StrictMode>,
)
