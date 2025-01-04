
import { useState } from 'react'
import './App.css'
import Watch from './components/Watch/Watch'
import { useEffect } from 'react'


function App() {
  const [watches, setWatches]= useState([])
  useEffect(()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  },[])
//  const watches=[
//   {id:1,name:'apple watch',price:2000},
//   {id:2,name:'svmsung watch',price:2000},
//   {id:3,name: 'mi watch',price:2000}
// ]
  return (
    <>
      
      <h1>Vite + React</h1>
     {
    watches.map(watch=> <Watch watch={watch} key={watch.id}></Watch>)
     }
     
      
    </>
  )
}

export default App
