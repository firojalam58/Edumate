
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../images/login/counter-bg.webp";

import React, { useContext, useState } from 'react';
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {

  const { register,formState: { errors }, handleSubmit } = useForm();
  const [errorLogin,setErrorLogin] = useState('')
  const {logIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || '/';


  const handleLogin = (data) => {
    setErrorLogin('')
    logIn(data.email,data.password)
    .then(result =>{
      const user = result.user
      console.log(user);
      navigate(from, {replace:true})
    })
    .catch(error => {
      console.error(error.message)
      setErrorLogin(error.message)
    })
  };

  return (
    <div className="">
      <div className="relative">
        <img
          src={login}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                
                <p className="max-w-xl text-white mb-4 text-base  md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                  quae.
                </p>
                <a
                  href="/"
                  aria-label=""
                  className="inline-flex items-center font-semibold tracking-wider text-success duration-200 text-teal-accent-400 hover:text-teal-accent-700"
                >
                  Learn more
                  <svg
                    className="inline-block w-3 ml-2"
                    fill="currentColor"
                    viewBox="0 0 12 12"
                  >
                    <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                  </svg>
                </a>
              </div>
              <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                  <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                    Login Here
                  </h3>
                  <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Enter Your Email</span>
                      </label>
                      <input
                        className="input input-bordered w-full max-w-xs"
                        type="email"
                        placeholder="Email here"
                        {...register("email",{required:"Please Enter the Valid Email Address"})}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && <p role="alert" className="text-red-600">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Enter Your Password</span>
                      </label>
                      <input
                        className="input input-bordered w-full max-w-xs"
                        type="password"
                        placeholder="Password here"
                        {...register("password",{required:"Your Password Wrong Please try again",minLength:{value:8, message:"Your Password Wrong Please try again" }})}
                      />
                      {errors.password && <p role="alert" className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <input
                      className="btn btn-success w-full mt-6"
                      value={"signup"}
                      type="submit"
                    />
                    <div>
                      {errorLogin && <p className="text-red-600">{errorLogin}</p>}
                    </div>
                  </form>
                  <p className="mt-2 ml-2">
                    New To Edumate?{" "}
                    <Link className="text-success text-2" to={"/signup"}>
                     Please SignUp
                    </Link>
                  </p>
                  <div className="divider">OR</div>
                  <button className="btn w-full btn-warning">
                    Continue With Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
