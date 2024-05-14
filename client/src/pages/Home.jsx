import React from 'react';
import Section01 from '../components/Section01';
// import Section02 from '../components/Section02';
// import Section03 from '../components/Section03';
// import Section04 from '../components/Section04';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Section01 />
      {/* <Section02 />
      <Section03 />
      <Section04 />
      <Section05 /> */}
      <Footer />

    </>
  )
}

export default Home
