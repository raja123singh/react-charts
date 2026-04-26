import React from 'react'
import './barchart.css'
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
const data = [
  { name: 'A', value: 40 },
  { name: 'B', value: 70 },
  { name: 'C', value: 30 },
];


function barchart() {
  return (
    <div className="barchart-page">
      <h1 className="barchart-heading">Bar Chart </h1>

       <div className="chart-container">
        <BarChart width={500} height={300} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#219096" />
        </BarChart>
      </div>

    </div>
  )
}

export default barchart