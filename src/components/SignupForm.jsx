import React from "react";

function SignupForm() {
  return (
    <>
      {/* <!-- Sign up Form--> */}
      <div className="flex justify-center align-middle max-w-auto -leading-4">
        <div className="hidden lg:mt-20 lg:col-span-5 lg:flex w-1/2">
          <img
            src="VECTOR 7.svg"
            className="size-3/4 mt-14 ml-20"
            alt="mockup"
          />
        </div>
        <div className="flex flex-col gap-8 p-10 max-w-[6in] border-solid text-white border-2 border-white-500 rounded-2xl m-40 ml-0 w-1/2 justify-center">
          <h2 className="flex text-4xl mb-10 font-bold justify-center">
            SIGN UP
          </h2>
          <input
            className="bg-gray-900 border-white border-solid border-2 rounded-2xl tracking-wider focus:border-green-500"
            type="text"
            placeholder="mail.com"
          />
          <div className="flex flex-col gap-2">
            <input
              className="bg-gray-900 border-white border-solid border-2 rounded-2xl tracking-wider focus:border-green-500"
              type="password"
              placeholder="$password"
            />
            <a className="text-red-800 hover:text-red-600" href="Repassword">
              Forget Password
            </a>
          </div>
          <div className="flex flex-col gap-4 -mt-2">
            <button className="focus:outline-none text-xl hover:text-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 tracking-wider">
              CREATE ACCOUNT
            </button>
            <span className="flex justify-center">
              Don't have account?{" "}
              <span className="text-green-600 ml-2">Sign up</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
