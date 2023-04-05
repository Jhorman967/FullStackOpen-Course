import React from "react"

const Number = ({numbers}) =>(

    numbers.map(number => 
    <div key={number.id}>
      <h5>{number.name} {number.phone}</h5>
    </div>

    )
)

export default Number