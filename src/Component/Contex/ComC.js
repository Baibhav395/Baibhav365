import React,{useContext} from 'react'
import { GlobalContex } from './GlobalContex'

const ComC = () => {
    const mydata=useContext(GlobalContex)
  return (
    <div>we are reading js react is libary file {mydata}</div>
  )
}

export default ComC