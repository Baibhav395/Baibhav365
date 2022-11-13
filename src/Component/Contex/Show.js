import React from 'react'
import ComA from './ComA'
import GlobalContexProvider from './GlobalContex'

const Show = () => {
  return (
    <GlobalContexProvider>
        <ComA/> 
    </GlobalContexProvider>

   
  )
}

export default Show