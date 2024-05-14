import React from 'react'

function Section03() {
  return (
    <>
      {/* <!-- Section 03 --> */}
<section className="bg-white dark:bg-transparent">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                What We Do
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Budget Burst is not just a financial tracking tool; it's your
                financial ally. We offer a comprehensive suite of features designed
                to streamline the budgeting process, track expenses, set savings
                goals, and gain a holistic view of your financial landscape. Our
                platform is crafted to cater to individuals seeking personal
                financial insight as well as organizations looking to enhance their
                financial management processes.
            </p>
        </div>
        <div className="hidden lg:mt-10 lg:col-span-5 lg:flex mr-20">
            <img src="VECTOR 3.svg" alt="mockup" />
        </div>
    </div>
</section>
    </>
  )
}

export default Section03
