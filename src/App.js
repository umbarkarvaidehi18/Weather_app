import { useState } from 'react';
import './App.css';
import axios from 'axios';
import  './ApiKeys';


function App() {
 
const [data,setData]=useState({})
const[inputCity,setInputCity]=useState("")

const getWeatherDetails = (cityName)=>{
  if(!cityName) return
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +"&appid=01687537d7424d2f0b02a3963bc89a17";

  axios.get(API_URL).then((res)=>{
  console.log("response",res.data)
  setData(res.data)
  }).catch((err)=>{
     console.log("The error is:",err)
  })
}



const handleChangeInput=(e)=>{
  setInputCity(e.target.value)
}
const handleSearch=()=>{
getWeatherDetails(inputCity);
}


  return (
         <div className='container'>
          <div className='image'>
        <img src="https://static.tnn.in/photo/103753378/103753378.jpg"className='image1'  alt="logo" />
        </div>
        
        <input type='text' className='search_text'value={inputCity} onChange={handleChangeInput} placeholder='Search'/>
        <button className='search_icon'onClick={handleSearch} >&#128269;</button>
        <div className='photo2'>
          <img src='https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png' className='sub-photo2'/>
        </div>
          {Object.keys(data).length>0 &&
          <div className='result'>
          <h1 className='weathercity'>{data.name}</h1>
          <h2 className='weathertemp'>{((data?.main?.temp) - 273.15).toFixed(2)}°C</h2>
           </div>
          
          }   
  </div>     
  );
}

export default App;
