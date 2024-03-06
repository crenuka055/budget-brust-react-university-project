import React from 'react'

function Donate() {
  return (
    <>
      {/* <!-- Donate Section --> */}
<div className="flex justify-center align-bottom my-10 mt-20">
    <h1 className="text-6xl font-extrabold tracking-tight leading-none text-gray-900 text-6xl md:text-5xl lg:text-6xl dark:text-white">DONATE</h1>
</div>

<div className="flex-col justify-center text-center rounded-lg border border-gray mx-80 border-4 mb-40">
    <div className="border border-white"></div>
    <div className="flex-blockout text-white">
        <div className="flex justify-between my-8 mx-20">
            <h3 className="text-xl">Choose an amount</h3>
            <h3 className="text-xl">OR</h3>
            <h3 className="text-xl">Enter your own</h3>
        </div>
        <div className="flex justify-between my-8 mx-20">
            <div className="flex gap-2">
                <button className="border border-2 border-white p-3 rounded-lg hover:border-green-500 hover:border-4">$5</button>
                <button className="border border-2 border-white p-3 rounded-lg hover:border-green-500 hover:border-4">$10</button>
                <button className="border border-2 border-white p-3 rounded-lg hover:border-green-500 hover:border-4">$25</button>
                <button className="border border-2 border-white p-3 rounded-lg hover:border-green-500 hover:border-4">$50</button>
                <button className="border border-2 border-white p-3 rounded-lg hover:border-green-500 hover:border-4">$100</button>
                {/* <!-- <div className="w-full ">
                    <input className="appearance-none " type="radio" name="money" id="money4">
                    <label for="money4" className="h-10 text-gray-700 font-semibold cursor-pointer transition-all text-sm justify-center items-center w-full border-2 flex ">Other</label>

                </div> --> */}
            </div>

            {/* <!-- | --> */}
            <div className="w-1 bg-white rounded-md indeterminate:bg-green-600"></div>

            <input className="bg-transparent border-2 rounded-lg text-xl tracking-wider focus:border-green-500 focus:ring-green-500" type="number" placeholder="$10,000,000,000" />
        </div>
        <div className="flex-blockout mx-20">
            {/* <!-- flex-col use previous --> */}
            <h2 className="flex">Enter your email address</h2>
            <div className="flex my-2 gap-10 items-center">
                <input className="bg-transparent border border-2 rounded-lg tracking-wider focus:outline-none focus:border-green-500 focus:ring-green-500" type="email" placeholder="email" maxlength="100" size="30" />
                <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">DONATE</button>
            </div>
        </div>
        <div className="mt-8 ml-20">
            <div>
                <h3 className="flex">Gift Aid</h3>
            </div>
            <div className="flex gap-4 my-4">
                {/* <!-- <input checked id="green-checkbox" className="p-3 rounded-md read-only:bg-transparent border-2 focus:ring-green-500 dark:focus:ring-offset-green-500 dark-green-500" type="checkbox" /> --> */}
                <input checked id="green-checkbox" type="checkbox" value="" className="w-6 h-6 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <p className="text-pretty w-2/3">Fuel financial empowerment at Budget Burst with your donation. Your support transforms lives—thank you for being crucial to our mission.</p>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Donate
