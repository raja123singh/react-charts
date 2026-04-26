import React from 'react'
import Navigator from './components/Navbar/Navigator'
import Barchart from './components/barchart'
import Linechart from './components/linechart'
import Piechart from './components/piechart'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className=' container-fluid px-0'>
    <Navigator />
     </div>
     <div className='container-fluid down px-0'>
      <Routes>
          <Route path="/" element={<h1 className="text-center">Welcome to React Chart</h1>} />
          <Route path="/barchart" element={<Barchart />} />
          <Route path="/linechart" element={<Linechart />} />
          <Route path="/piechart" element={<Piechart />} />
        </Routes>
     </div>
    </div>
    
  )
}

export default App
