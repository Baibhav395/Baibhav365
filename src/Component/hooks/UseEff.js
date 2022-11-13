import React, { useEffect, useState } from 'react'

const UseEff = () => {
    const [count,setCount]=useState(0)
    const[value,setValue]=useState(1)
    useEffect(()=>{
        alert("this is ueseffect")
    },[count])
  return (
   <>
   <center>
 <h2>{count}</h2>
   <button onClick={()=>setCount(count+1)}>count</button>
   <h2>{value}</h2>
   <button onClick={()=>setValue(value+2)}>value</button>


   </center>
     </>
  )
}

export default UseEff