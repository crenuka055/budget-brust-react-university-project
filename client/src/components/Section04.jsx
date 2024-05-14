import React from "react";

function Section04() {
  return (
    <>
      {/* <!-- Section 04 --> */}
      <section className="bg-white dark:bg-transparent">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="hidden lg:mt-10 lg:col-span-5 lg:flex mr-20">
            <img src="VECTOR 4.svg" alt="mockup" />
          </div>
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Our Core Values
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Empowerment: We believe in empowering individuals and
              organizations by providing them with the knowledge and tools to
              make informed financial decisions.
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Simplicity: We understand that financial management can be
              overwhelming. That's why we've designed Budget Burst to be simple,
              intuitive, and user-friendly.
            </p>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Inclusivity: Financial well-being is for everyone. Budget Burst is
              accessible to individuals from all walks of life, ensuring that
              everyone can benefit from smart money tracking.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section04;
