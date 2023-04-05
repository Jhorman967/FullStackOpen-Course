import React from "react"


const PersonForm = (props)=>(

    <form onSubmit={props.addname} >
       <h2>Add new Person</h2>
       <div>
         name: <input value={props.newname} onChange={props.readname}/>
       </div>
       <div>
         Phone: <input type='phone' value={props.phnumber} onChange={props.readphone}/>
       </div>
       <div>
         <button type="submit">add</button>
       </div>
     
   </form>
   
   )

   export default PersonForm