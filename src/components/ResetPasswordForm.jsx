import React from "react";

function ResetPasswordForm() {
  return (
    <>
      {/* <!-- RESET PASSWORD Section--> */}
      <div className="flex justify-center align-middle max-w-auto -leading-4">
        <div className="hidden lg:mt-20 lg:col-span-5 lg:flex w-1/2">
          <img
            src="VECTOR 8.svg"
            className="size-3/4 mt-14 ml-20"
            alt="mockup"
          />
        </div>
        <div className="flex flex-col gap-8 p-10 max-w-[6in] border-solid text-white border-2 border-white-500 rounded-2xl m-40 ml-0 w-1/2 justify-center">
          <h2 className="flex text-4xl mb-10 font-bold justify-center">
            RESET PASSWORD
          </h2>

          <input
            className="bg-gray-900 border-white border-solid border-2 rounded-2xl tracking-wider focus:border-green-500"
            type="password"
            placeholder="Enter new password"
          />

          <div className="flex flex-col gap-2">
            <input
              className="bg-gray-900 border-white border-solid border-2 rounded-2xl tracking-wider focus:border-green-500"
              type="password"
              placeholder="Confirm password"
            />{" "}
          </div>
          <div className="flex flex-col gap-4 -mt-2">
            <a href="Error" className="flex flex-col">
              <button className="focus:outline-none text-xl hover:text-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 tracking-wider">
                RESET PASSWORD
              </button>
            </a>
            <span className="flex justify-center">Don't have account? 
            <a href="/Signup">
              <span className="text-green-600 ml-2">Sign up</span>
            </a></span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPasswordForm;
