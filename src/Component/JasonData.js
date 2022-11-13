import axios from 'axios'
import React, { useEffect, useState } from 'react'


const JasonData = () => {
    const[post,setPosts]=useState([])
    const[limit,setLimit]=useState(10)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(any=>{
            console.log(any.data)
        //    setPosts(any.data)
           
        })
        .catch(err=>console.log)
        
    },[])
  return (
   <>
   </>
  )
}

export default JasonData