// import React,{useState} from 'react'

// function Counter() {

//   const [count,setCount]=useState(0)
//   return (
//     <div>
//       <button>RESET</button>

import React,{useState,} from 'react';
import './Counter.css';

 function Counter() {
    // array destruring
    const initialCount=0
    const [count,setCount] = useState(initialCount)
    
  return (
    <div class="counter-class">
      Count:{count}
      <button onClick={()=>setCount(initialCount)}>Reset</button>
      <button onClick={()=>setCount(count+1)}>INCREMENT</button>
      <button onClick={()=>setCount(count-1)}>DECREMENT</button>
    </div>
  )
}

export default  Counter