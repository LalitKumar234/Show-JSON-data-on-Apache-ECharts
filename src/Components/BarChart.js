import React from 'react'
import data from '../data'
import ReactEcharts from "echarts-for-react";

function BarChart() {

    let alcoholMap = new Map();// Using Map

    //Check if JSON consists of a key name "Alcohol":Number
  data.forEach(alcoholObj => {                         
    if (alcoholMap.has(alcoholObj.Alcohol))    
    {
      let arr = alcoholMap.get(alcoholObj.Alcohol)        //Create new array of name arr 
      arr.push(alcoholObj["Malic Acid"])           //pushing key's value in arr
      alcoholMap.set(alcoholObj.Alcohol, arr)
    } else
    {
      let newArr = new Array()
      newArr.push(alcoholObj["Malic Acid"])
      alcoholMap.set(alcoholObj.Alcohol, newArr)
    }
  })
// Formula for finding average of all the numbers in an array
  const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length

// setting the map with average values if array and the key index of Alcohol type 
  alcoholMap.forEach((value, key) => {
    let arr = arrAvg(value)
    alcoholMap.set(key, arr)
  })

//   console.log(alcoholMap)

//Creating new Average array and storing the average values in it
  let newArrAvg = new Array()
  alcoholMap.forEach((value) => {
    newArrAvg.push(value);
   
  })
  
  console.log(newArrAvg)

  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '15%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [
      {
        name: 'Alcohol-Category',
        type: 'category',
        data: ['Alcohol 1', 'Alcohol 2', 'Alcohol 3'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Malic Acid',
      }
    ],
    series: [
      {
        name: 'Average Malic Acid',
        type: 'bar',
        barWidth: '30%',
        data: newArrAvg //Dispaying Array of average 
      }
    ]
  };







  return (
    <ReactEcharts option={option} />
  )
}

export default BarChart