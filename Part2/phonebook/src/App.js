import React, { useEffect, useState } from 'react';
import './App.css';
import PersonForm from './components/PersonalForm';
import Number from './components/Number';
import Searching from './components/Search';
import PersonsService from './services/PersonsService';
import MenGood from './components/NotificationGood';
import MenError from './components/NotificationError';







function App() {
  const [ persons, setPersons ] = useState([]) 

  const [ newName, setNewName ] = useState('')
  const [phnumber, setPhnumber] = useState('')
  const [search, setSearch] = useState('')
  const [mensaje, setMensaje] = useState([null])

 


  useEffect(()=>{
    PersonsService
    .getAll()
    .then(response=>{
      setPersons(response)
    }).catch(error=>{
      console.log('Ups can read the data', error)
    })
  },[])








  const addName = (event)=>{
    const test = persons.find(names =>names.name === newName)
    
    if (test === undefined) {
      event.preventDefault();//remember help for no reload page
    const personObject={
      name: newName,
      phone: phnumber,
      id: persons.length +1, 
    }
    PersonsService
    .create(personObject)
    .then(response =>{
      setPersons(persons.concat(response))
      setMensaje(mensaje.unshift("exito"))
      setMensaje(mensaje.concat(`Very good ${newName} was save successfully`))
      setTimeout(() => {
        setMensaje([null])
      }, 3000)
      setNewName('')
      setPhnumber('')
    }).catch(error => {
      setMensaje(mensaje.unshift("error"))
      setMensaje(mensaje.concat(`ups we can't save  ${newName} Erro: ${error.message}}`))
      setTimeout(() => {
        setMensaje([null])
      }, 3000)
    }) 

    persons.map(person=>console.log("this is a ", person))
    } else if (window.confirm(`the ${test.name} is in our system, you want to change the number`)) {
      const personObject={
        name: newName,
        phone: phnumber
      }

      PersonsService
      .update(test.id,personObject).then(response => {console.log("ey",response)})
      .catch(error =>{
        setMensaje(mensaje.unshift("error"))
      setMensaje(mensaje.concat(`ups we can't save  ${newName} Erro: ${error.message}}`))
      setTimeout(() => {
        setMensaje([null])
      }, 3000)
      })
      setNewName("") 
      setPhnumber("")
      
    }
  }

  



const toggleDeleteOf= (id)=>{
  if(window.confirm("Are you sure you want to delete")){
  PersonsService 
  .delet(id)
  .then(setNewName("") )
  .catch(error => {
    setMensaje(mensaje.unshift("error"))
    setMensaje(mensaje.concat(`ups we can't save  ${newName} Erro: ${error.message}}`))
      setTimeout(() => {
        setMensaje([null])
      }, 3000)
    })
  }

}

  const readName = (event)=>(setNewName(event.target.value))

  const readPhone= (event)=>(setPhnumber(event.target.value))

  const readSearch= (event)=>(setSearch(event.target.value))

  const filterPerson =  persons.filter((per)=> per.name.toLowerCase().includes(search.toLowerCase()))


 
  return ( 
    <div>
      <h1>Phonebook</h1>
      <MenError mensaje={mensaje}/>
      <Searching filter={filterPerson} search={search} readsearch={readSearch}/>
      <PersonForm addname={addName} newname={newName} readname={readName} phnumber={phnumber} readphone={readPhone} />
      <h2>Numbers</h2>

      {persons.map(person => <Number key={person.id} name={person.name} phone ={person.phone} toggleDelete={()=>toggleDeleteOf(person.id)}  />)}
    </div>
    
  )
}

export default App;
