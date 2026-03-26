import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { weatherforcastApi } from './api/weatherforcast'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState("");

  useEffect(()=>{
   const fetchData = async () => {
    try {
      const apiResponse = await weatherforcastApi.get();
      const weatherInformation = JSON.stringify(apiResponse.data); 
      console.log(weatherInformation);
      setWeatherData(weatherInformation);
    } catch(err) {
      console.error("Error caught:", err);
      setWeatherData("Error Bruhhh");
    }
  };
  
  fetchData();
}, []);


  return (
    <>
      <h1>Rahul Lama React Application</h1>
      <p>{weatherData}</p>
    </>
  )
}

export default App
