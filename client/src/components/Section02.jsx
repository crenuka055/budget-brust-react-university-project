import React from 'react'

function Section02() {
  return (
    <>
      {/* <!-- Section 02 --> */}
<section className="bg-white dark:bg-transparent">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="hidden lg:mt-10 lg:col-span-5 lg:flex mr-20">
            <img src="VECTOR 2.svg" alt="mockup" />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Who We Are
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                We are a passionate team of finance enthusiasts, tech experts, and
                design aficionados, united by the shared vision of making financial
                tracking accessible to everyone. Recognizing the challenges many
                face in managing their finances, we set out to create an intuitive,
                user-friendly platform that puts you in the driver's seat of your
                financial journey.
            </p>
        </div>
    </div>
</section>

    </>
  )
}

export default Section02
