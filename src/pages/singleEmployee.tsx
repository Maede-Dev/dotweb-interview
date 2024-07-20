import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axiosInstance from "../api";

const SingleEmployee = () => {
  const [singleEmployee, setSingleEmployee] = useState<any>();
  const { employeeId } = useParams();

  const handleGetEmployeeData = async () => {
    await axiosInstance
      .get("/employee")
      .then((res) => setSingleEmployee(res?.data));
  };

  useEffect(() => {
    if (employeeId) {
      handleGetEmployeeData();
    }
  }, [employeeId]);

  return (
    <div>
      <div>{singleEmployee?.id}</div>
      <div>{singleEmployee?.employee_name}</div>
    </div>
  );
};

export default SingleEmployee;
