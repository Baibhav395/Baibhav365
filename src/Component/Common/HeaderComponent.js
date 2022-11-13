import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
  <>
  
    <div className="container-fluid">
        <div className="row custom-header align-items-center">
            <div className="col-lg-3">
                <Link className="navbar-brand text-white" to="/">Amazon</Link>
            </div>
            <div className="col-lg-6">
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-warning" type="submit">Search</button>
                  </form>
            </div>
            <div className="col-lg-3">
                <ul className="d-flex justify-content-evenly">
                    {/* <li className="list-unstyled"><Link href="signin.html" className="text-decoration-none text-white fs-5"><i className="bi bi-box-arrow-in-right fs-3"></i>Signin</Link></li> */}
                    <Link className='list-unstyled text-decoration-none text-white fs-5' to='/signin'>Signin</Link>
                    {/* <li className="list-unstyled"><Link href="signup.html" className="text-decoration-none text-white fs-5"><i className="bi bi-person-plus-fill fs-3"></i>Signup</Link></li> */}
                    <Link className='list-unstyled text-decoration-none text-white fs-5' to='/signup'>Signup</Link>
                    {/* <li className="list-unstyled"><Link href="cart.html" className="text-decoration-none text-white fs-5"><i className="bi bi-cart-plus-fill fs-3"></i></Link></li> */}
                    <Link className='list-unstyled text-decoration-none text-white fs-5 bi bi-cart-plus-fill fs-3' to='/cart'>Cart</Link>
                </ul>
            </div>
        </div>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active text-white" aria-current="page" href="index.html">Home</Link> */}
                <Link className='nav-link active text-white' to='/Home'>Home</Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link text-white" href="deals.html">Deals</Link> */}
                <Link className='nav-link text-white' to='/Deal'>Deals</Link>
              </li>
     
            </ul>
           
          </div>
        </div>
      </nav>



  </>
  )
}

export default HeaderComponent