import React from 'react'
import Childprops from './Childprops'


const Mainparent = () => {
  return (
    
    <>
    <div>Mainparent</div>
    <Childprops language="react" teach="spa"/>
    <Childprops language="native" teach="mobile"/>


    </>
  )
}

export default Mainparent