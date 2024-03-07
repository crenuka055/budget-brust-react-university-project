import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart'; 

function PieCharts() {
    const data = [ 
        { id: 0, value: 10, label: 'Loss' }, 
        { id: 1, value: 15, label: 'Side income' }, 
        { id: 2, value: 20, label: 'Saving' }, 
      ]; 
  return (
    <>
      <PieChart 
    colors={['red', 'blue', 'green']} 
      series={[ 
        { 
          data, 
          highlightScope: { faded: 'global', highlighted: 'Palette' }, 
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' }, 
        }, 
      ]} 
      height={200} 
    /> 
    </>
  )
}

export default PieCharts
