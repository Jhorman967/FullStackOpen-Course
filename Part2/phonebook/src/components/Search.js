import React from "react";



const InputSearch = (props)=>(
    <div>
    Search : <input value={props.search} onChange={props.readsearch}/>
  </div>
  )
  
  
  const Showresul=({filter})=>{
    
    if (filter.length < 3) {
    return(
    filter.map(ser => <h2 key={ser.id}>{ser.name}</h2>)
    )
  }
  }
  const Searching = (props)=>{
    return(<>
      <InputSearch search={props.search} readsearch={props.readsearch}  />
      <Showresul filter={props.filter} />
      </>
    )
    
  }
  
  

export default Searching