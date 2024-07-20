import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axiosInstance from "../api";
import { IEmployeeType } from "../types/employee";

const SingleEmployee = () => {
  const [singleEmployee, setSingleEmployee] = useState<IEmployeeType>();
  const { employeeId } = useParams();

  const handleGetEmployeeData = async () => {
    await axiosInstance
      .get(`/employee/${employeeId}`)
      .then((res) => setSingleEmployee(res?.data?.data));
  };

  useEffect(() => {
    if (employeeId) {
      handleGetEmployeeData();
    }
  }, [employeeId]);

  return (
    <div>
      <div>Employee Information</div>
      <div>{singleEmployee?.id}</div>
      <div>{singleEmployee?.employee_name}</div>
    </div>
  );
};

export default SingleEmployee;
