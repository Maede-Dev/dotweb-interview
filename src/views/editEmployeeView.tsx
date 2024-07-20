import React, { useEffect } from "react";
import axiosInstance from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";

const EditEmployeeView = () => {
  const navigate = useNavigate();
  const { employeeId } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleGetEmployeeData = async () => {
    await axiosInstance.get(`/employee/${employeeId}`).then((res) => {
      const userData = res?.data?.data;
      setValue("name", userData?.employee_name);
      setValue("salary", userData?.employee_salary);
      setValue("age", userData?.employee_age);
    });
  };

  useEffect(() => {
    if (employeeId) {
      handleGetEmployeeData();
    }
  }, [employeeId]);

  const submitForm = async (data: FieldValues) => {
    await axiosInstance
      .put(`/update/${employeeId}`, data)
      .then(() => navigate(`/employees/${employeeId}`));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <label>
        name
        <input {...register("name")} />
      </label>
      <label>
        salary
        <input {...register("salary", { required: true })} />
        {errors.salary && <p>salary is required.</p>}
      </label>
      <label>
        age
        <input {...register("age", { pattern: /\d+/ })} />
        {errors.age && <p>Please enter number for age.</p>}
      </label>

      <input type="submit" />
    </form>
  );
};

export default EditEmployeeView;
