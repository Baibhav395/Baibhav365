import React from 'react'

const ContentComponent = () => {
  return (
<>
<div className="container-fluid">
        <h2>Deals and Promotions</h2>
        <p>Shop Todays Deals, Lightning Deals, and limited-time discounts</p>
        <div className="row mt-5 mb-3">
            <div className="col-md-2 p-2 ms-3 bg-light">
                <h5>Categories</h5>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Arts, Crafts & Sewing
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Mobile
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                       Laptop
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                       Television
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                       Kitchen Accessories
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" for="flexCheckDefault">
                        Fashion
                    </label>
                  </div>
                  
            </div>
            <div className="col-md-8">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                      <div className="card shadow-lg">
                        <img src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <button className="btn btn-success">View Details</button>
                          
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-lg">
                        <img src="https://myrepublica.nagariknetwork.com/uploads/media/eeee_20210524140327.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <button className="btn btn-success">View Details</button>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-lg">
                        <img src="https://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <button className="btn btn-success">View Details</button>
                      </div>
                    </div>
                    </div>
                    <div className="col">
                      <div className="card shadow-lg">
                        <img src="https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <h5 className="card-title">Card title</h5>
                          <button className="btn btn-success">View Details</button>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>

        </div>
    </div>


</>
  )
}

export default ContentComponent