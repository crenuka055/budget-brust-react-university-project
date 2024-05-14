import React, { useState } from "react"
import {useNavigate, Link} from "react-router-dom"
import axios from "axios"

function SignupForm() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (e) => {
      e.preventDefault()
      axios.post('http://localhost:3000/auth/signup', {
          username, 
          email, 
          password
      }).then(response => {
          // console.log(response)
          if(response.data.status)
              navigate('/login')
      }).catch(err => {
          console.log(err)
      })
  }

  return (
    <>
      {/* <!-- Sign up Form--> */}
      <form onSubmit={handleSubmit}>

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
          <input onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-900 border-white border-solid border-2 rounded-2xl tracking-wider focus:border-green-500"
            type="text"
            placeholder="@username"
          />
          <input onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-900 border-white border-solid border-2 rounded-2xl tracking-wider focus:border-green-500"
            type="email"
            placeholder="mail.com"
          />
          <div className="flex flex-col gap-2">
            <input onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-900 border-white border-solid border-2 rounded-2xl tracking-wider focus:border-green-500"
              type="password"
              placeholder="$password"
            />
          </div>
          <div className="flex flex-col gap-4 -mt-2">

            {/* submit button in here... */}
          {/* <input  type="submit" className="focus:outline-none text-xl hover:text-lg bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 tracking-wider"/> */}
            <button type="submit" className="focus:outline-none text-xl hover:text-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 tracking-wider">
              CREATE ACCOUNT
            </button>
            <a href="/login">
            <span className="flex justify-center">
              Already have account?{" "}
              <span className="text-green-600 ml-2">Login</span>
            </span>
            </a>
          </div>
        </div>
      </div>
      </form>
    </>
  );
}

export default SignupForm;
