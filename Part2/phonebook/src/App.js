import React, { useState } from 'react';
import './App.css';
import PersonForm from './components/PersonalForm';
import Number from './components/Number';
import Searching from './components/Search';


function App() {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]) 

  const [ newName, setNewName ] = useState('')
  const [phnumber, setPhnumber] = useState('')
  const [search, setSearch] = useState('')


  const addName = (event)=>{
    const test = persons.find(names =>names.name === newName)
    if (test === undefined) {
      event.preventDefault();//remember help for no reload page
    const personObject={
      name: newName,
      phone: phnumber,
      id: persons.length +1, 
    }
    setPersons(persons.concat(personObject))
    setNewName("")  
    setPhnumber("")
    persons.map(person=>console.log("this is a ", person))
    } else {
      alert(`Upss sorry but ${newName} is in our system`) 
      setNewName("") 
      setPhnumber("")
    }
  }

  const readName = (event)=>(setNewName(event.target.value))

  const readPhone= (event)=>(setPhnumber(event.target.value))

  const readSearch= (event)=>(setSearch(event.target.value))

  const filterPerson =  persons.filter((per)=> per.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <Searching filter={filterPerson} search={search} readsearch={readSearch}/>
      <PersonForm addname={addName} newname={newName} readname={readName} phnumber={phnumber} readphone={readPhone} />
      <h2>Numbers</h2>
      <Number key={persons} numbers={persons}/>
    </div>
  )
}

export default App;
