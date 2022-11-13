import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "../componentcss/Trending.css"


const TrendingComponent= ({ alldata }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
const [trendingData, settrendingData]= useState([]);


  const filtereddata=()=>{
return settrendingData(alldata.filter((item)=>item.trending===true))

  }



useEffect(()=>{
if( trendingData.length<1){
  filtereddata()
}

},[trendingData])


  return (
    <>


<div className="container-fluid" >
        <div className="my-2 shadow p-2">
          <h2 className="text-center">Trending Products</h2>
        </div>
        <div className="row  ">
         <Slider {...settings}>
         { 
        

        trendingData.map((item, index) => {
         return(
            <div className="col" key={index}>
            <div className="card shadow-lg row row-cols-1 row-cols-md-2 g-2">
              <img src="https://myrepublica.nagariknetwork.com/uploads/media/eeee_20210524140327.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <button className="btn btn-success">View Details</button>
              </div>
            </div>
          </div>
         )               
        })
      } 
        </Slider>
</div>
        {/* <div className="my-2 shadow p-2">
          <h2 className="text-center">Trending Products</h2>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4">
         

       { 
        

                trendingData.slice(0, 4).map((item, index) => {
                 return(
                    <div className="col" key={index}>
                    <div className="card shadow-lg">
                      <img src="https://myrepublica.nagariknetwork.com/uploads/media/eeee_20210524140327.png" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <button className="btn btn-success">View Details</button>
                      </div>
                    </div>
                  </div>
                 )               
                })
              } 
        </div> */}
      </div>
    </>
  )
}
export default TrendingComponent