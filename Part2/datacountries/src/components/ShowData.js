import React, { useEffect, useState } from "react";
import axios from "axios";



const ShowData = ({country}) =>{
  

  const [weather, setWeather] = useState([])  

  const infCountry = {
    lat:country.latlng[0],
    lon:country.latlng[1],
    api:"fb4e2f017386dde3cd0a01cdfb70bf4d"
  }

  console.log("antes",infCountry.lat,  infCountry.lon)

  useEffect(()=>{
  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${infCountry.lat}&lon=${infCountry.lon}&appid=${infCountry.api}&units=metric`)
  .then(response => setWeather(response.data))
  .catch(error=>console.log(error))
  },[])





  console.log("data que llego aqui",country)
  console.log("data de weather",weather)      
    const language = Object.values(country.languages).map(lng => <ul key={lng}><li key={lng}>{lng}</li></ul>)
  
    if (weather.length !== 0){
       
        return(
            <>
            <h2 >{country.name.common}</h2>
            <span>El area es: {country.area} <br/></span>
            <span>la Capital es: {country.capital}</span>
            <h1>language</h1>
            <span>{language}</span>
            <img src={country.flags.png} ></img>
            <h2>weather{}</h2>
            <h4>Temperatur is {weather.main.temp} celcius</h4>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
            <h4>{weather.weather[0].main}</h4>
            </>
        )

    }
    
    }
    
export default ShowData;