import React, { useState } from "react"
import axios from 'axios'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'

function ResetPasswordForm() {

  const [password, setPassword] = useState('');
  const {token} = useParams()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3000/auth/reset-password/"+token, {
          password, 
      }).then(response => {
          // console.log(response)
          if(response.data.status) {
              // console.log(response.data.status)
              navigate('/login')
          }   
          console.log(response.data)
      }).catch(err => {
          console.log(err)
      })
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      {/* <!-- RESET PASSWORD Section--> */}
      <div className="flex justify-center align-middle max-w-auto -leading-4">
        <div className="hidden lg:mt-20 lg:col-span-5 lg:flex w-1/2">
          <img
            src="/VECTOR 8.svg"
            className="size-3/4 mt-14 ml-20"
            alt="mockup"
          />
        </div>
        <div className="flex flex-col gap-8 p-10 max-w-[6in] border-solid text-white border-2 border-white-500 rounded-2xl m-40 ml-0 w-1/2 justify-center">
          <h2 className="flex text-4xl mb-10 font-bold justify-center">
            RESET PASSWORD
          </h2>

          <input
            onChange={(e) => {setPassword(e.target.value)}}
            className="bg-gray-900 border-white border-solid border-2 rounded-2xl tracking-wider focus:border-green-500"
            type="password"
            placeholder="Enter new password"
          />

          {/* <div className="flex flex-col gap-2">
            <input
              onChange={(e) => {setPassword2(e.target.value)}}
              className="bg-gray-900 border-white border-solid border-2 rounded-2xl tracking-wider focus:border-green-500"
              type="password"
              placeholder="Confirm password"
            />{" "}
          </div> */}
          <div className="flex flex-col gap-4 -mt-2">
              <button type="submit" className="focus:outline-none text-xl hover:text-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 tracking-wider">
                RESET PASSWORD
              </button>
            <span className="flex justify-center">Don't have account? 
            <a href="/Signup">
              <span className="text-green-600 ml-2">Sign up</span>
            </a></span>
          </div>
        </div>
      </div>
      </form>
    </>
  );
}

export default ResetPasswordForm;
