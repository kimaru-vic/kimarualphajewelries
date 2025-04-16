import React, { useEffect, useState } from 'react'
import { CartState } from '../Context/Context'
import { useNavigate } from 'react-router-dom'


const ShoppingCart = (e) => {
  const {state:{cart},dispatch}=CartState()
  const[total,setTotal]=useState()
  

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc+Number(curr.product_cost),0))
  },[cart])

  const navigate=useNavigate()

  const img_url="https://farasivictor.pythonanywhere.com/static/images/"
  return (
    <div>
      {cart.length>0?(
        <>
        {
          cart.map((product)=>(
            <div className='cart-row' key={product.product_id}>
              <img src={img_url+product.product_photo} alt={product.product_name}  className='product_img' style={{width:"100px"}}/>
              <h5> {product.product_name}</h5>
              <p className='text-muted'>{product.product_description}</p>
              <b className='text-warning'>{product.product_cost} KES</b> <br />
              <button className='btn btn-danger' onClick={()=>{
                dispatch({
                  type:"REMOVE_FROM_CART",
                  payload:product.product_id
                })
              }}><span className='bi bi-trash3'></span></button>
            </div>
            
          ))
        }
        <div className='text-center'>
          <h2>Your Total is:{total}</h2>
          <button className='btn btn-success' onClick={()=>{navigate('/makepayment',{state:{total}})}}>Check out</button>
        </div>
        
        </>
      ):(
        <h2 className='text-center'>Cart Empty</h2>
      )}
    </div>
  )
}

export default ShoppingCart
