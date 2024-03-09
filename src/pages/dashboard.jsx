import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AreaChart from '../components/AreaChart'
import LineChart from '../components/LineChart'
import PieCharts from '../components/PieChart'
import Table from '../components/Table'
import { PieChart } from '@mui/x-charts'
import LineChart2 from '../components/LineChart2'
import LineChart3 from '../components/LineChart3'

function dashboard() {
  return (
    <> 
      <Navbar />
      <div className="flex justify-center my-20 h-max w-2/3 ml-40">
      <PieCharts />
        <LineChart2 />
      </div>
      <div className="flex justify-center my-20 h-max gap-10">
      <AreaChart />
      <LineChart />
      </div>
      <div className='flex flex-col justity-center mx-60'>
        <Table />
      </div>
      <div className='mx-60'>
        {/* <LineChart3 /> */}
        {/* <LineChart4 /> */}
      </div>
      <Footer />
    </>
  )
}

export default dashboard
