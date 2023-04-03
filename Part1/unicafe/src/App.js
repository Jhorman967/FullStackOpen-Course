import React, { useState } from "react";



const Div = (props) =>(
  <table>
    <tbody>
      <tr>
        <td> <h3>Good:</h3> </td>
        <td>{props.good}</td>
      </tr>
      <tr>
        <td> <h3>Neutral:   </h3> </td>
        <td>{props.neutral}</td>
      </tr>
      <tr>
        <td><h3>Bad:</h3></td>
        <td>{props.bad}</td>
      </tr>
  
    </tbody>
 
</table>
)

const Button = (props) =>(
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const SatisticLine = (props)=>(
  <table>
    <tbody>
    <tr>
      <td><h3>{props.text}</h3></td>
      <td>{props.value}</td>
    </tr>
    </tbody> 
  </table>   

)


const Statis = (props) => {
  let Average = (props.good - props.bad) / (props.all)
  let prom = (100*props.good) / props.all;
  if (props.all === 0){
    return(
      <>
      <SatisticLine text="Noo FeedBack"/>
      </>
    )
  } else {
  return(
    <>
      <SatisticLine text="All: " value={props.all}/>
      <SatisticLine text="Average: " value={Average.toFixed(2)}/>
      <SatisticLine text="Positive: " value={prom.toFixed(2)}/>
    </>
  )
  }
}


function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const SetGoodValue = (newValue) =>{
    setGood(newValue)
    setAll(all+1)
  }
  const SetNeutralValue = (newValue) =>{
    setNeutral(newValue)
    setAll(all+1)
  }
  const SetBadValue = (newValue) =>{
    setBad(newValue)
    setAll(all+1)
  }

  



  return (
    <div className="App">
     <h1>Give FeedBack</h1>
     
     <Button text="Good"  handleClick={()=>SetGoodValue(good+1)}  />
     <Button text="Neutral" handleClick={()=>SetNeutralValue(neutral+1)}/>
     <Button text="Bad" handleClick={()=>SetBadValue(bad+1)}/>

     <Div good={good} neutral={neutral} bad={bad} all={all}/>
     <h2>Statistics</h2>
     <Statis good={good} neutral={neutral} bad={bad} all={all}/>


    </div>
  );
}

export default App;



