import React, { useState } from "react";
import useRouter from "next/router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Login() {
  const router = useRouter;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setshowPassword] = useState();

  const handleFormSubmit = (data) => {
    console.log(data);
    // axios
    //   .post(`/auth/`, data)
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
    router.push("/dashboard");
  };
  return (
    <div className="container">
      <div className="form-section mt-28 mx-auto border rounded-md p-5">
        <img className="w-8/12 m-auto" src="/imgs/logo1.png" alt="" />
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          action=""
          className="mx-auto mt-6"
        >
          <div className="text-center my-3">USER LOGIN</div>
          <div className="input-group">
            <label htmlFor="">Username</label>
            <input
              type="text"
              className="input-control"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="error">{errors.username.message}</p>
            )}
          </div>
          <div className="input-group">
            <label htmlFor="">Password</label>
            <div className="relative">
              <input
                type={`${showPassword ? "text" : "password"}`}
                className="input-control pr-10"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                })}
              />

              {!showPassword ? (
                <FaEye
                  onClick={() => setshowPassword(true)}
                  className="absolute cursor-pointer text-lg top-1/2 transform -translate-y-1/2 right-3 text-gray-600"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setshowPassword(false)}
                  className="absolute cursor-pointer text-lg top-1/2 transform -translate-y-1/2 right-3 text-gray-600"
                />
              )}
            </div>
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <div className="input-group">
            <button className="btn primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
