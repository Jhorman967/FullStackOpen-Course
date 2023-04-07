import React from "react"
import ShowData from "./ShowData"




function ShowResul({country, setCountry}){

  
  console.log("info llega", country)

  
    if(country.length > 10){
      return(
        <span>Too many matches, specify another filter</span>
      )
    }else if((country.length > 2 && country.length <10) || country.length === 0){
      return(
        country.map((town, i) =>
          <div key={i}>
            <h2 >{town.name.common} <button  onClick={()=>setCountry([town])} > more inf</button></h2>
            </div> 
        )
      )
    } else {
      return(
        <ShowData country={country[0]}/>
      )
    }  
   
  
}

export default ShowResul