import React from 'react'
import { Link } from 'react-router-dom'
import { CartState } from '../Context/Context'
import logo from '../../src/images/alphaicon.png'



const Navcomponent = () => {
    const{state:{cart}}=CartState()
    
    
  return (
    <div className="navbar navbar-expand-md navbar-dark topnav">
        <div className='nav-left'>
            <Link className="navbar-brand" to={"/"}><img src={logo} alt=""  width={"70px"}/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </div>
       
        <div className="nav-right">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to={'/addproduct'}>Add Product</Link>
                    <Link className="nav-item nav-link" to={'/Signin'}>Sign in</Link>
                    <Link className="nav-item nav-link" to={'/signup'}>Sign up</Link>
                    <Link className="nav-item nav-link" to={'/cart'}><span className='bi bi-cart-fill fs-4 parent-cart'><span className='child-cart'>{cart.length}</span></span></Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}
export default Navcomponent

