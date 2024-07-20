import React from "react";
import LoginPage from "../pages/login";
import { Routes, Route } from "react-router-dom";

const RoutingConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<div>home page</div>} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default RoutingConfig;
