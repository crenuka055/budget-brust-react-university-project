import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function about() {
  return (
    <>
    <Navbar />
      {/* <!-- Container Section --> */}
      <div className="my-20 text-center justify-center">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            ABOUT US{" "}
          </h1>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Welcome to Budget Burst – Your Financial Journey Starts Here!
          </p>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            At Budget Burst, we believe in empowering individuals and
            organizations to take control of their financial well-being. Our
            mission is to simplify the complex world of personal finance,
            providing you with the tools and insights you need to make informed
            decisions and achieve your financial goals.
          </p>
        </div>
        <div>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            We are a passionate team of finance enthusiasts, tech experts, and
            design aficionados, united by the shared vision of making financial
            tracking accessible to everyone. Recognizing the challenges many
            face in managing their finances, we set out to create an intuitive,
            user-friendly platform that puts you in the driver's seat of your
            financial journey.
          </p>

          <div>
            <h2 className="text-white text-5xl mt-40 mb-20">Who We Are</h2>
            <h2 className="text-white text-3xl my-10">What we Do</h2>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Budget Burst is not just a financial tracking tool; it's your
              financial ally. We offer a comprehensive suite of features
              designed to streamline the budgeting process, track expenses, set
              savings goals, and gain a holistic view of your financial
              landscape. Our platform is crafted to cater to individuals seeking
              personal financial insight as well as organizations looking to
              enhance their financial management processes.
            </p>
          </div>
          <div>
            <h2 className="text-white text-2xl my-20">Our Core Values</h2>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Empowerment:** We believe in empowering individuals and
              organizations by providing them with the knowledge and tools to
              make informed financial decisions.
            </p>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Simplicity:** We understand that financial management can be
              overwhelming. That's why we've designed Budget Burst to be simple,
              intuitive, and user-friendly.
            </p>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Inclusivity:** Financial well-being is for everyone. Budget Burst
              is accessible to individuals from all walks of life, ensuring that
              everyone can benefit from smart money tracking.
            </p>
          </div>
          <div>
            <h2 className="text-white text-2xl my-20">How We Help</h2>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              - **Personal Finance:** Budget Burst is your personal finance
              companion, helping you track expenses, set budgets, and achieve
              your financial goals.
            </p>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              - **Organizational Finance:** For businesses and non-profits,
              Budget Burst streamlines financial tracking, expense management,
              and budget planning to enhance overall financial health.
            </p>
          </div>
          <div>
            <h2 className="text-white text-2xl my-20">
              Join Us on the Financial Journey
            </h2>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Whether you're an individual seeking financial clarity or an
              organization aiming for financial excellence, Budget Burst is here
              to support you. Join us on this exciting financial journey and
              let's make money management a breeze!
            </p>
            <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              Got questions or suggestions? We'd love to hear from you! [Contact
              Us] <a href="/contact.html"> #contact-us</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default about;
