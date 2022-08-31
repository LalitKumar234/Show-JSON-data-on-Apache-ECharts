import React from 'react'
import ReactEcharts from "echarts-for-react";
import data from '../data'

function ScatterPlot() {

  var result = data.reduce(function (prev, curr) {
    prev.push([parseFloat(curr['Color intensity']), curr.Hue]); // Storing the values of Color Intensity  
    return prev;                                                // and Hue Inside of a 2D array
  }, []);                                                       // in this format [[ "Color Intensity", "Hue"]..........] 

  //console.log(result)

  const option = {
    xAxis: { name: 'Color Intensity' },
    yAxis: { name: 'Hue' },
    series: [
      {
        symbolSize: 7,

        data: result,         //Showing the Result
        type: 'scatter'
      }
    ]
  };

  return (
    <ReactEcharts option={option} />
  )
}

export default ScatterPlot