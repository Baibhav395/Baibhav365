import React, { useState } from 'react'

const Increament = () => {
    
    const [count,setCount]=useState(0)
    // const increse=()=>setCount(count+1)
  return (
   <>
   <h2 className='text-center'>{count}</h2>
   <center>
    <button className='btn btn-primary' onClick={()=>setCount(count+1)}>increse</button>
    {
        count>0 &&
    <button className='btn btn-success' onClick={()=>setCount(count-1)}>decrese</button>

    }
   </center>


   
   </>
  )
}

export default Increament