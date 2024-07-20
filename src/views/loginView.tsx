import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data: FieldValues) => {
    localStorage.setItem("test_token", "TEST_TOKEN_VALUE");
    navigate("/employee");
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="ml-5 mt-5">
      <label className="text-[20px] font-bold block">
        userName
        <input
          {...register("userName", { required: true })}
          className="p-2 bg-[#9ca3af] p-[8px] rounded mt-5 ml-[5px]"
        />
        {errors.userName && <p>userName is required.</p>}
      </label>
      <label className="text-[20px] font-bold block">
        password
        <input
          {...register("password", { required: true })}
          className="p-2 bg-[#9ca3af] p-[8px] rounded mt-5 ml-[5px]"
        />
        {errors.password && <p>password is required.</p>}
      </label>
      <input
        type="submit"
        className="text-[20px] font-bold block cursor-pointer bg-[#1da1f2] mt-5 p-[10px]"
      />
    </form>
  );
};

export default LoginView;
