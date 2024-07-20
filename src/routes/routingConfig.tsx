import React from "react";
import LoginPage from "../pages/login";
import { Routes, Route } from "react-router-dom";
import EmployeePage from "../pages/employee";
import SingleEmployee from "../pages/singleEmployee";
import EditEmployee from "../pages/editEmployee";
import CreateEmployee from "../pages/createEmployee";

const RoutingConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<div>home page</div>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/employee" element={<EmployeePage />} />
      <Route path="/employees/:employeeId" element={<SingleEmployee />} />
      <Route path="/employees/:employeeId/edit" element={<EditEmployee />} />
      <Route
        path="/employees/:employeeId/create"
        element={<CreateEmployee />}
      />
    </Routes>
  );
};

export default RoutingConfig;
