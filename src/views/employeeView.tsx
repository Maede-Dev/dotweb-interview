import React, { useEffect, useState } from "react";
import axiosInstance from "../api";
import { IEmployeeType } from "../types/employee";
import { mockEmployees } from "../api/mock";

const EmployeeView = () => {
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
      {employeeList?.map((employeeList: IEmployeeType) => (
        <div className=" items-center flex-wrap gap-2 bg-slate-400 m-5 w-[250px] h-[150px] p-5">
          {/* <img
            src={employeeList?.profile_image}
            alt={employeeList?.employee_name}
            className="h-[150px] w-[200px]"
          /> */}
          <div>name: {employeeList?.employee_name}</div>
          <div>age: {employeeList?.employee_age}</div>
          <div>salary: {employeeList?.employee_salary}</div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeView;
