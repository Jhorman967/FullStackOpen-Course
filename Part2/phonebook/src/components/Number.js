import React from "react"
import PersonsService from "../services/PersonsService"




const Number = (props) =>{



    return(
   
    <div key={props.name}>
      <form onSubmit={props.toggleDelete}>  
      <h5>{props.name} {props.phone} 
      <button  type='submit'>delete</button>
      </h5>
      </form>
    </div>

    )
}

export default Number