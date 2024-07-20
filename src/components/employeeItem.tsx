import React from "react";
import { IEmployeeType } from "../types/employee";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../api";

interface IEmployeeItem {
  item: IEmployeeType;
  refetch: () => void;
}

const EmployeeItem = ({ item, refetch }: IEmployeeItem) => {
  const { id, employee_name, employee_age, employee_salary } = item;
  const navigate = useNavigate();
  const handleDeleteUser = async () => {
    axiosInstance.delete(`/delete/${id}`).then(() => refetch());
  };
  return (
    <div className=" items-center flex-wrap gap-2 bg-slate-400 m-5 w-[250px] h-[150px] p-5">
      <Link to={`/employee/${id}`}>
        <div>name: {employee_name}</div>
        <div>age: {employee_age}</div>
        <div>salary: {employee_salary}</div>
      </Link>
      <button
        className="p-2 cursor-pointer bg-[#374151] rounded mt-2"
        type="button"
        onClick={handleDeleteUser}
      >
        delete
      </button>
      <button
        className="p-2 cursor-pointer bg-[#374151] ml-5 rounded mt-2"
        onClick={() => navigate(`/employees/${id}/edit`)}
      >
        edit
      </button>
    </div>
  );
};

export default EmployeeItem;
