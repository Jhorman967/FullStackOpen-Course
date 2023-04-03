import React, { useState } from 'react';
import './App.css';




const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Anecdote = (props) =>{
    return (
     <div>
      <h3>
      {anecdotes[props.state]}
      </h3>
      
     </div>

    )
}


const Button=(props)=>{

  return(
    
  <div>
    <button onClick={props.handleCLick} >{props.text}</button>
  </div>
  )
  }




function App () {
  
  const [selected,setSelect] = useState(1)
  const [points,setPoints]=useState(Array(anecdotes.length).fill(0))
  

  const Randome =(max)=>(
    setSelect(Math.floor(Math.random()* max))
    )

  const AddVote = (state)=>{
    const copy = [...points]
    copy[state] +=1
    setPoints([...copy])
    MoreVotes()
   }

   const MoreVotes = () =>{
    const copy = [...points]
    const maxNumber = Math.max(...copy)

    if (maxNumber != 0) {
      return(
        copy.indexOf(maxNumber)
      )
    } 
   }

  return (
    
    <div className="App">

      <h1>Developer's anecdotes</h1>
      
      <Anecdote state={selected}/>
      <Button handleCLick={()=>Randome(anecdotes.length)} text="next anecdote"/>
      <Button handleCLick={()=>AddVote(selected)} text="Vote"></Button>
      <p>Has {points[selected]} Votes</p>
      <h2>Anecdote with more votes </h2>
      <Anecdote state={MoreVotes()}/>
    </div>
  );
}




export default App;
