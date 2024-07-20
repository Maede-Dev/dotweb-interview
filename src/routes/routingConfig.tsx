import React from "react";
import LoginPage from "../pages/login";
import { Routes, Route } from "react-router-dom";
import EmployeePage from "../pages/employee";
import SingleEmployee from "../components/singleEmployee";

const RoutingConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<div>home page</div>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/employee" element={<EmployeePage />} />
      <Route path="/employee/:employeeId" element={<SingleEmployee />} />
    </Routes>
  );
};

export default RoutingConfig;
