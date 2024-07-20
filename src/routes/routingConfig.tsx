import React from "react";
import LoginPage from "../pages/login";
import { Routes, Route } from "react-router-dom";
import EmployeePage from "../pages/employee";

const RoutingConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<div>home page</div>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/employee" element={<EmployeePage />} />
    </Routes>
  );
};

export default RoutingConfig;
