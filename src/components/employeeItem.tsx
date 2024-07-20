import React from "react";
import { IEmployeeType } from "../types/employee";

const EmployeeItem = ({
  id,
  employee_name,
  profile_image,
  employee_age,
  employee_salary,
}: IEmployeeType) => {
  return (
    <div className=" items-center flex-wrap gap-2 bg-slate-400 m-5 w-[250px] h-[150px] p-5">
      <a href={`/employee/${id}`}>
        {/* <img
          src={profile_image}
          alt="picEmployee"
          className="h-[150px] w-[200px]"
        /> */}

        <div>name: {employee_name}</div>
        <div>age: {employee_age}</div>
        <div>salary: {employee_salary}</div>
      </a>
      <button className="p-2 cursor-pointer bg-[#374151] rounded mt-2">
        delete
      </button>
      <button className="p-2 cursor-pointer bg-[#374151] ml-5 rounded mt-2">
        edit
      </button>
    </div>
  );
};

export default EmployeeItem;
