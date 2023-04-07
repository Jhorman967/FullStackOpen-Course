import React, { useEffect, useState } from 'react';
import './App.css';
import CountriService from './services/CountriService';
import Search from './components/Search';
import ShowResul from './components/Show';



function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState([])
  const [search, SetSearch] = useState("")




  useEffect(()=>{
    CountriService
    .getAll()
    .then(response=>{
      setCountries(response)
    }).catch(error => console.log(error))

  },[])




  const readSearch = (event) => {
    (SetSearch(event.target.value))
    if(SetSearch){
      const filterCountries = countries.filter((pais) => pais.name.common.toLowerCase().includes(search.toLowerCase()))
      setCountry(filterCountries)
    }    
  }
  



  return (
    <div className="App">
      <Search  search={search} readsearch={readSearch} />

     
      <ShowResul  setCountry={setCountry} country={country} />
    </div>
  );
}

export default App;
