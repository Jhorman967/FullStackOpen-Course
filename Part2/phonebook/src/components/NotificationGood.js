import React from "react";




const MenGood =({mensaje}) =>{

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


    if (mensaje === null){
        return null
    }

    return(
    
    <div style={alertaExito}>
        <span >
        {mensaje}
        </span>
       
    </div>
    )
    
}

export default MenGood;