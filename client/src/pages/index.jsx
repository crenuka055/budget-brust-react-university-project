import React from 'react';
import Section01 from '../components/Section01';
import Section02 from '../components/Section02';
import Section03 from '../components/Section03';
import Section04 from '../components/Section04';
import Section05 from '../components/Section05';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import CircleEffect from '../components/CircleEffect';

function Home() {
  return (
    <>
    <div className='p-0 m-0'>
      <Navbar />
      <Section01 />
      {/* <CircleEffect /> */}
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Footer />
    </div>
    </>
  )
}

export default Home
