import React, { useState } from 'react'

export const useInput = (x) =>{
  const [value,setvalue] = useState(x);

  const onChange = (e) =>{
    setvalue(e.target.value)
  }

  return {value, onChange}
}

export default function UseInput() {
  const name = useInput("Mr");
  

  return (
    <div>
      <h1>UseInput</h1>
      <input placeholder='name' {...name}/>
    </div>
  )
}
