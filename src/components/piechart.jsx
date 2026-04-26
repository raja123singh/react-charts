import React from 'react'
import './piechart.css'
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
const data = [
  { name: 'A', value: 40 },
  { name: 'B', value: 30 },
  { name: 'C', value: 20 },
  { name: 'D', value: 10 },
];

const COLORS = ['#219096', '#4CAF50', '#FF9800', '#F44336'];

function Piechart() {
  return (
    <div className="piechart-page">
      <h1 className="piechart-heading">Pie Chart</h1>
      <div className="chart-container">
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            fill="#219096"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  )
}

export default Piechart