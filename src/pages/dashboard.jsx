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
      <div className="flex justify-center my-20 h-max gap-10">
      <PieCharts />
      <AreaChart />
      <LineChart />
      </div>
      <div className='flex flex-col justity-center mx-60'>
        <Table />
      </div>
      <div>
        <LineChart2 />
      </div>
      <Footer />
    </>
  )
}

export default dashboard
