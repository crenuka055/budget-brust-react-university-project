import React from "react";
import Error from "../components/Error";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function error() {
  return (
    <>
      <Navbar />
      <Error />
      <Footer />
    </>
  );
}

export default error;
