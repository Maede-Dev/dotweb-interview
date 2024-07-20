import React, { useEffect, useState } from "react";
import axiosInstance from "../api";
import { IEmployeeType } from "../types/employee";

const EmployeeView = () => {
  const [employeeList, setEmployeeList] = useState<IEmployeeType[]>([]);

  const getEmployeeList = async () => {
    await axiosInstance
      .get("/employees")
      .then((res) => setEmployeeList(res?.data));
  };
  useEffect(() => {
    getEmployeeList();
  }, []);

  return (
    <div>
      <h1 className="text-[20px] ml-5 font-bold block">employee list</h1>
      {employeeList?.map((employeeList: IEmployeeType) => (
        <div>{employeeList?.employee_age}</div>
      ))}
    </div>
  );
};

export default EmployeeView;
