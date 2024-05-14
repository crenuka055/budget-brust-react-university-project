import React from "react";

function Section05() {
  return (
    <>
      {/* <!-- Section 05 --> */}
      <section className="bg-white dark:bg-transparent">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              How We Help
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Personal Finance: Budget Burst is your personal finance companion,
              helping you track expenses, set budgets, and achieve your
              financial goals.
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Organizational Finance: For businesses and non-profits, Budget
              Burst streamlines financial tracking, expense management, and
              budget planning to enhance overall financial health.
            </p>
          </div>
          <div className="hidden lg:mt-10 lg:col-span-5 lg:flex mr-20">
            <img src="VECTOR 5.svg" alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Section05;
