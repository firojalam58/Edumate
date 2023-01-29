import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import login from "../../images/login/counter-bg.webp";
const SignUp = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const {createUser} = useContext(AuthContext)
  const handleSignup = (data) => {
    createUser(data.email,data.password)
    .then(result =>{
      const user = result.user
      console.log(user);
    })
    .catch(error => console.error(error))
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
                {/* <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  The quick, Learn our book <br className="hidden md:block" />
                  jumps over a{handleSubmit(handleSignup)}
                  <span className="text-teal-accent-400">Creazy Course</span>
                </h2> */}
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
                    Sign up for Our Edumate
                  </h3>
                  <form onSubmit={handleSubmit(handleSignup)}>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Enter Your Name</span>
                      </label>
                      <input
                        className="input input-bordered w-full max-w-xs"
                        type="text"
                        placeholder="Name here"
                        {...register("name",{required:"Name is required"}) }
                        aria-invalid={errors.mail ? "true" : "false"}
                      />
                      {errors.name && <p role="alert" className="text-red-600">{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                      <label className="label">
                        <span className="label-text">Enter Your Email</span>
                      </label>
                      <input
                        className="input input-bordered w-full max-w-xs"
                        type="email"
                        placeholder="Email here"
                        {...register("email",{required:"Email Address is required"})}
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
                        {...register("password",{required:"password is required",minLength:{value:8, message:"Password must be 8 charceter or longer" }})}
                      />
                      {errors.password && <p role="alert" className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <input
                      className="btn btn-success w-full mt-6"
                      value={"signup"}
                      type="submit"
                    />
                  </form>
                  <p className="mt-2 ml-2">
                    All ready have an account{" "}
                    <Link className="text-success text-2" to={"/login"}>
                      Login
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

export default SignUp;
