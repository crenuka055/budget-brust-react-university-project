import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AreaChart from '../components/AreaChart'
import LineChart from '../components/LineChart'
import PieCharts from '../components/PieChart'
import Table from '../components/Table'
import { PieChart } from '@mui/x-charts'
import LineChart2 from '../components/LineChart2'

function dashboard() {
  return (
    <> 
      <Navbar />
<<<<<<< HEAD
      <div className="flex justify-center my-20 h-max gap-10 w-5/6 ">
=======
      <div className="flex justify-center my-20 h-max gap-10">
>>>>>>> 0255a6fa32fe66601d2336fc948e460d2be0bdae
      <PieCharts />
      <AreaChart />
      <LineChart />
      </div>
      <div className='flex flex-col justity-center mx-60'>
        <Table />
<<<<<<< HEAD
      <div>
        <LineChart2 />
      </div>
      </div>
=======
      </div>
      <div>
        <LineChart2 />
      </div>
>>>>>>> 0255a6fa32fe66601d2336fc948e460d2be0bdae
      <Footer />
    </>
  )
}

export default dashboard
