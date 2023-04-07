import React from "react"

const MenError =({mensaje}) =>{

    const alertaExito ={
        backgroundColor: '#4CAF50',
        color:'white',
        padding: 16,
        margin:30,
        fontSize:26,
        border: "none",
        borderRadius:4,
        textAling: 'center',
    }

    const alertaError ={
        backgroundColor:'#f44336' ,
        color:'white',
        padding: 16,
        margin:30,
        fontSize:26,
        border: "none",
        borderRadius:4,
        textAling: 'center',
    }

    console.log(mensaje)


    if (mensaje[0] === null){
        return null
    }else if (mensaje[0] === "exito"){
        return(
            <div style={alertaExito}>
                <span >
                {mensaje[2]}
                </span>
               
            </div>
            )          
    }return(    
            <div style={alertaError}>
                <span >
                {mensaje[2]}
                </span>
               
            </div>
            )
            

        
    

  
}

export default MenError;