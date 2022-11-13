import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dataload = () => {
    const [posts,setPosts]=useState([])
    const[limit,setLimit]=useState(20)
    useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/posts")
.then(res=>{
    // console.log(res.data)
    setPosts(res.data)

})
.catch(err=>console.log)

    },[])
  return (

    <>

    <div className='row'>
        {posts.slice(0,limit).map((d,i)=>(
            <div className='col-md-3 border'key={i}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>

            </div>
        ))}
        <center>
            {
                limit<posts.length &&
<button className='btn btn-warning p-2 my-2'onClick={()=>setLimit(limit+20)}>load More</button>
            }
            
        </center>
    </div>
    
    
    </>
  )
}

export default Dataload