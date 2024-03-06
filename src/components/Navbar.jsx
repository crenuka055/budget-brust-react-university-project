import React from 'react'

function Navbar() {
  return (
    <>
      {/* <!-- Navigation Section --> */}
      <nav class="sticky top-0 p-2 backdrop-blur-lg m-2 mx-40 rounded-2xl">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-center">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start space-x-60">
                <a href="/">
                <h2 class="text-4xl font-bold tracking-tight text-white sm:text-2xl">
                    {/* <!-- Budget Burst --> */}
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><span class="text-green-400">B</span>udget <span class="text-green-400">B</span>rust</span>
                </h2>
                </a>
                <div class="hidden sm:ml-6 sm:block">
                    <div class="flex space-x-4">
                        <a href="/Error"
                           class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                           aria-current="page">Dashboard</a>
                        <a href="/About"
                           class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">About us</a>
                        <a href="/Contact"
                           class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact us</a>
                        <a href="/Donate"
                           class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Donate</a>
                    </div>
                </div>
            </div>
            <div>
                
                <a href="/Signup">
                    <button type="button"
                            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-2xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        Sign Up
                    </button>
                </a>

                <a href="/Login">
                    <button type="button"
                            class="text-white-700 border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                        Login
                    </button>
                </a>

            </div>
        </div>
    </div>
</nav>
    </>
  )
}

export default Navbar
