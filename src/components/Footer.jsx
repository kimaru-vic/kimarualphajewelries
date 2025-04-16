import React from 'react'
import logo from '../../src/images/alphaicon.png'

const Footer = () => {
  return (
    <>
    <div className="row text-light pt-3 ps-2" style={{backgroundColor:"brown"}}>
        <div className="col-md-4 contact">
            <h3 className='text-center'>Contact Details</h3>
            <a href="tel:+254712341234" className='text-light fs-3' style={{textDecoration:"none"}}>Telephone</a><br />
            <a href="https://www.instagram.com/"><span className='bi bi-instagram fs-2 me-2 text-light'></span></a>
            <a href="https://www.instagram.com/"><span className='bi bi-facebook fs-2 me-2 text-light'></span></a>
            <a href="https://www.instagram.com/"><span className='bi bi-twitter fs-2 text-light'></span></a>
            
        </div>
        <div className="col-md-4 message  text-center">
            <h3 className='text-center'>Send Message</h3>
            <form>
                <input type="email" name="" id="" placeholder='example@gmail.com' className='form-control'/><br />
                <textarea name="" id="" placeholder='Enter message' className='form-control'></textarea><br />
                <button type='submit' className='btn btn-success'>Submit</button>

            </form>
        </div>
        <div className="col-md-4 logo text-center p-4">
            <img src={logo} alt="" style={{borderRadius:"50%"}}/>
        </div>
    </div>
    <div className='text-center row' style={{backgroundColor:"brown"}}>
        <span className='text-light'>Kaptum Victor 2025&copy;,All rights reserved</span>
    </div>
    </>
  )
}

export default Footer
