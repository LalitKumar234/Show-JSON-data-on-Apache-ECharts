import React from 'react'
import BarChart from './Components/BarChart'
import ScatterPlot from './Components/ScatterPlot'
import './App.css'
import Footer from './Components/Footer'

function App() {
  return (
    <>
    <main className='container'>
      <div className='content'>
        <div><h1>Scatter Plot</h1></div>
        <ScatterPlot/>
        <div><h1>Bar Chart</h1></div>
        <BarChart/>
        

      </div>
    </main>
    <Footer/>
    </>
  )
}

export default App