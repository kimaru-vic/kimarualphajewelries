import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { CartState } from '../Context/Context'
import logo from '../../src/images/alphaicon.png'



const Navcomponent = () => {
    const{state:{cart}}=CartState()
    const user=JSON.parse(localStorage.getItem("user"))
    console.log(user)
    const navigate=useNavigate()
    
    
    const logout=()=>{
        localStorage.removeItem("user")
        navigate('/Signin')
        
        
    }
   
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
                <div className="navbar-nav" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Link className="nav-item nav-link" to={'/cart'}><span className='bi bi-cart-fill fs-4 parent-cart'><span className='child-cart'>{cart.length}</span></span></Link>
                    { user?(
                        <>
                            <Link className="nav-item nav-link" to={'/addproduct'}>Add Product</Link>
                            <span className='text-light  me-1'>User:<b>{user}</b></span>
                            <button className='btn btn-outline-light' onClick={logout}>Log Out</button>
                        </>
                    ):(
                        <>
                            <Link className="nav-item nav-link" to={'/Signin'}>Sign in</Link>
                            <Link className="nav-item nav-link" to={'/signup'}>Sign up</Link>
                        </>
                    )
                        
                    }
                </div>
                
            </div>
        </div>
        
    </div>
  )
}
export default Navcomponent

