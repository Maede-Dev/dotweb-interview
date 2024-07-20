import React from "react";
import { FieldValues, useForm } from "react-hook-form";

const LoginView = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data: FieldValues) => {
    console.log(data);
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
