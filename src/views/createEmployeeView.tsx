import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import axiosInstance from "../api";
import { useNavigate } from "react-router-dom";

const CreateEmployeeView = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = async (data: FieldValues) => {
    await axiosInstance.post("/create", data).then(() => navigate("/employee"));
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

export default CreateEmployeeView;
