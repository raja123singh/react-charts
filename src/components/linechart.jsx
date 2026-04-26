import React from 'react'
import './linechart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const data = [
  { name: 'Jan', value: 30 },
  { name: 'Feb', value: 50 },
  { name: 'Mar', value: 40 },
  { name: 'Apr', value: 70 },
  { name: 'May', value: 60 },
];

function Linechart() {
  return (
    <div className="linechart-page">
      <h1 className="linechart-heading">Line Chart </h1>
       <div className="chart-container">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#219096" strokeWidth={3} />
        </LineChart>
      </div>
    </div>
  )
}

export default Linechart