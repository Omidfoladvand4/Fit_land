// src/main.jsx
import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import TopHeader from "./features/shared/header/components/TopHeader.jsx";
import Footer from "./features/shared/Footer/Footer.jsx";
import AppRoutes from "./app/routes.jsx";
import { ShopProvider } from "./context/ShopContext";
import "keen-slider/keen-slider.min.css";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <ShopProvider>
        <TopHeader />
        <AppRoutes />
        <Footer />
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            style: {
              direction: "rtl",
              textAlign: "right",
              borderRadius: "12px",
              fontFamily: "inherit",
            },
          }}
        />
      </ShopProvider>
    </HashRouter>
  </StrictMode>,
);
