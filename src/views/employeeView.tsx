import React, { useEffect, useState } from "react";
import axiosInstance from "../api";
import { IEmployeeType } from "../types/employee";
import { mockEmployees } from "../api/mock";
import { useNavigate } from "react-router-dom";
import EmployeeItem from "../components/employeeItem";

const EmployeeView = () => {
  const navigate = useNavigate();
  const [employeeList, setEmployeeList] =
    useState<IEmployeeType[]>(mockEmployees);

  const getEmployeeList = async () => {
    await axiosInstance
      .get("/employees")
      .then((res) => setEmployeeList(res?.data.data));
  };
  useEffect(() => {
    // getEmployeeList();
  }, []);

  return (
    <div className="flex items-center flex-wrap gap-2">
      <h1 className="text-[20px] ml-5 font-bold block w-[100%]">
        employee list
      </h1>
      {employeeList?.map((item) => (
        <EmployeeItem {...item} />
      ))}
    </div>
  );
};

export default EmployeeView;
