import React, { useState } from 'react'

export default function Counter() {

    const [value, setValue] = useState(0); 

    function increment () {
        setValue(value + 1);
    }

    function decremenet (){
        setValue(value - 1); 
    }

    function reset (){
        setValue(0); 
    }

  return (
    <div className='counter'>
        <button className='button' onClick={decremenet}>-</button>
        <span>{value}</span>
        <button className='button' onClick={increment}>+</button>
    </div>
  )
}
