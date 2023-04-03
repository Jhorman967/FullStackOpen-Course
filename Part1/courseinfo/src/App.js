import React from "react"



const Header =(props)=>{
    
    return(
    <div>
        <h1>{props.course}</h1>
    </div>
    )
}

const Part = (props)=>{
    return(
        <div>
            <p>
                {props.part}{props.exercise}
            </p>
        </div>
    )
}

const Content =(props)=>{

    return(
    <div>
        <Part part={props.part[0].name} exercise={props.part[0].exercises1}/>
        <Part part={props.part[1].name} exercise={props.part[1].exercises2}/>
        <Part part={props.part[2].name} exercise={props.part[2].exercises3}/>        
    </div>
    ) 

}

const Total = (props)=>{
    return(
        <div>
            <p> Number of exercises {props.exercise[0].exercises1 + props.exercise[1].exercises2 + props.exercise[2].exercises3}</p>
        </div>
    )

}



const App = () => {

    const course = {
        name:'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises1: 10},
            {
                name:'Using props to pass data ',
                exercises2: 7},
            {
                name:'State of a component',
                exercises3 : 14}
        ]
    }
   
  
    return (
      <div>
        <Header course={course.name}/>
        <Content part={course.parts}/>
        <Total exercise={course.parts}/>


      
        
      </div>
    )
  }
  
  export default App