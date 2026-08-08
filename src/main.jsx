import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from "react-router-dom";
import TopHeader from './features/shared/header/components/TopHeader.jsx';
import Footer from './features/shared/Footer/Footer.jsx';
import AppRoutes from "./app/routes.jsx";
import "keen-slider/keen-slider.min.css";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <HashRouter>
    <TopHeader />
      <App />
      <AppRoutes />
      <Footer />
    </HashRouter>
  </StrictMode>,
)
