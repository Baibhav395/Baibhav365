import React from 'react'
import { BrowserRouter as Router,Routes , Route} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import DealPage from './Pages/DealPage'
import SinginPage from './Pages/SigninPage'
import SignupPage from './Pages/SignupPage'
import CartPage from './Pages/CartPage'
import Increament from './Component/hooks/Increament'
import UseEff from './Component/hooks/UseEff'
import Dataload from './Component/Dataload'
import Mainparent from './Component/Mainparent'
import JasonData from './Component/JasonData'
import Show from './Component/Contex/Show'
import FormValidation from './Component/FormValid/FormValidation'


const MyRoutes = () => {
  return (
    <>
    <Router>
<Routes>
<Route path='/' element={<HomePage/>} />
<Route path='/Home'element={<HomePage/>}/>
<Route path='/Deal'element={<DealPage/>}/>
<Route path='/signin'element={<SinginPage/>}/>
<Route path='/signup'element={<SignupPage/>}/>
<Route path='/cart'element={<CartPage/>}/>
{/* hooks page */}
<Route path='/in'element={<Increament/>}/>
<Route path='/eff'element={<UseEff/>}/>
<Route path='/data'element={<Dataload/>}/>
<Route path='/main'element={<Mainparent/>}/>
<Route path='/jason'element={<JasonData/>}/>
{/* Contex route */}
<Route path='/contex'element={<Show/>}/>
{/* from validation */}
<Route path='/form'element={<FormValidation/>}/>






</Routes>


    </Router>
    </>
   
  )
}

export default MyRoutes