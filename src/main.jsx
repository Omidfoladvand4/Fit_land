import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import AppRoutes from "./app/routes.jsx";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HashRouter>
      <App />
      <AppRoutes />
    </HashRouter>
  </StrictMode>,
)
