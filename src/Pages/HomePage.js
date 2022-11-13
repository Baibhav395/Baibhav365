import React, { useEffect, useState } from 'react'
import CardComponent from '../Component/Common/CardComponent'
import FooterComponent from '../Component/Common/FooterComponent'
import HeaderComponent from '../Component/Common/HeaderComponent'
import SliderComponent from '../Component/Common/SliderComponent'
import TrendingComponent from '../Component/Common/TrendingComponent'
import '../Component/style.css'

import data from "../Data.json"

const HomePage = () => {
const [alldata,setalldata]=useState([]);

useEffect(()=>{
  // console.log(data);
  setalldata(data);
  
},[])



  return (
    <>
    <HeaderComponent/>
    <SliderComponent/>
    <CardComponent alldata={alldata}
    />
    <TrendingComponent alldata={alldata}/>
     <FooterComponent/> 


    
    </>
  )
}

export default HomePage