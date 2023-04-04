import React from "react";


const Header =({course})=>(<div>  <h1 key={course.id}>{course}</h1>  </div>)


const Part = (props)=>(
        <div>
            <h5 key={props.id}>
                {props.name}  {props.exercise}
            </h5>
        </div>
    )

const Content =({contents})=>{


  return(

  contents.map(content =>(
    <Part key={content.id} name={content.name} exercise={content.exercises}/>
    
  ))
  )
   

}

const Total = ({exercise})=>(
        <div>
          <h2  key={exercise.id}>Total of {exercise.reduce((sum, exc)=>sum + exc.exercises,0)} exercises</h2>         
        </div>
)

const Course = ({course})=>{
  console.log(course[0].parts[0])
  return(
    course.map(cour =>(<div key={cour.id}><Header course={cour.name}/> <Content contents={cour.parts}/> <Total exercise={cour.parts}/></div>))
   
  )
}

export default Course