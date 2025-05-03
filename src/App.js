import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Layout from "./Layout";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Buyer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUs />} />

          <Route path="/contact-us" element={<ContactUs />} />


          {/* Catch-all route to redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
