import React, { useState } from "react";
import axios from "axios"
import {useNavigate, Link} from "react-router-dom"

function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3000/auth/login', {
          email, 
          password,
      }).then(response => {
          // console.log(response)
          if(response.data.status) {
            // home page  
            navigate('/dashboard')
          }
      }).catch(err => {
          alert("Invalid Credentials!")
          console.log(err)
      })
  };

  return (
    <>
      {/* <!-- Login Section --> */}
      <form onSubmit={handleSubmit}>
      <div className="flex justify-center align-middle max-w-auto -leading-4">
        <div className="hidden lg:mt-20 lg:col-span-5 lg:flex w-1/2">
          <img src="VECTOR 6.svg" alt="mockup" />
        </div>
        <div className="flex flex-col gap-8 p-10 max-w-[6in] border-solid text-white border-2 border-white-500 rounded-2xl m-40 ml-0 w-1/2 justify-center">
          <h2 className="flex text-4xl mb-10 font-bold justify-center">
            Login
          </h2>
          <input onChange={(e)=>{setEmail(e.target.value)}}
            className="bg-gray-900 border-white border-solid border-2 rounded-2xl tracking-wider focus:outline-none focus:border-green-500 focus:ring-green-500"
            type="email"
            placeholder="@mail"
          />
          <div className="flex flex-col gap-2">
            <input onChange={(e)=>{setPassword(e.target.value)}}
              className="bg-gray-900 border-white border-solid border-2 rounded-2xl tracking-wider focus:outline-none focus:border-green-500 focus:ring-green-500"
              type="password"
              placeholder="$password"
            />
            <a className="text-red-800 hover:text-red-500" href="/forgetpassword">
              Forget Password
            </a>
          </div>
          <div className="flex flex-col gap-4 -mt-2">
            {/* <a href="/error" className="flex flex-col"> */}
            {/* <input type="submit" className="focus:outline-none text-xl hover:text-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 tracking-wider"/> */}
            <button  type="submit" className="focus:outline-none text-xl hover:text-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 tracking-wider">
              Login
            </button>
            {/* </a> */}
            <span className="flex justify-center">
              Don't have an account?{" "}
              <a href="Signup">
                <span className="text-green-600 ml-2">Sign up</span>
              </a>
            </span>
          </div>
        </div>
      </div>
      </form>
    </>
  );
}

export default LoginForm;
