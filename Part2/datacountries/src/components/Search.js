const InputSearch =({search, readsearch})=>{

    return(
      <span>find countries <input value={search} onChange={readsearch}/> </span>
    )
    
  
  }
  
  
  const Search = (props)=>{
   
    return(
      <>
          <InputSearch search={props.search} readsearch={props.readsearch}/>
      </>
  
      
  
    )
  }

  export default Search
  