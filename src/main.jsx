import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css"; // Make sure this is imported
import App from "./pages/layout/App.jsx";
import Home from "./pages/homepage/Home.jsx";
import Trucks from "./pages/trucks/Trucks.jsx";
import Drivers from "./pages/drivers/Drivers.jsx";
import RegisterDrivers from "./pages/register-driver/RegisterDrivers.jsx";
import TruckDetail from "./pages/truckdetail/TruckDetail.jsx";
import DriverDetail from "./pages/driverdetail/DriverDetail.jsx";

// Initialize theme on page load
const initTheme = () => {
  const theme = localStorage.getItem("theme") || "light";
  document.body.className = theme;
};

initTheme();

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="trucks" element={<Trucks />} />
        <Route path="truck/:truckId" element={<TruckDetail />} />
        <Route path="drivers" element={<Drivers />} />
        <Route path="registerdrivers" element={<RegisterDrivers />} />
        <Route path="driver/:driverId" element={<DriverDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
