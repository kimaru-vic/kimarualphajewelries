import React, { useEffect, useState } from 'react'
import  { CartState } from '../Context/Context'
import Footer from './Footer'






const Getproducts =() => {
  // initialize hooks
  const [loading,setLoading]=useState("")
  const [error,setError]=useState("")
  const [product,setProduct]=useState([])
  const {state:{products}}=CartState()
  useEffect(()=>{setProduct(products)},[products])
  const[search,setSearch]=useState()
  const[filtered,setFiltered]=useState([])

  const {state: {cart},dispatch}=CartState()
  // URL for photo
  const img_url="https://farasivictor.pythonanywhere.com/static/images/"

  
  const getproducts=async (e) => {
    setLoading("Please wait...")
    try {
      setError("")
    } catch (error) {
      setError(error.message)
      
    }
  }
  

  useEffect(()=>{getproducts()},[])
  
  useEffect(()=>{
    const response=products.filter((product)=>(product?.product_name??"").toLowerCase().includes((search??"").toLowerCase()));
    setFiltered(response)
},[products,search])
    
  return (
    <>
      <div className="row p-3 body">
        <div className='text-center'>
          <input type="text" placeholder='Search products' className='search-bar text-center' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
        {/* Binding Hooks */}
        <span className='text-danger'>{error}</span>

        {Array.isArray(product) && product.length>0?(
          <>
          {filtered.length>0?(
            filtered.map((product)=>(
              <div className="col-md-3 justify-content-center mb-4" key={product.product_id}>
                  <div className="card  shadow text-center mt-4">
                    <img src={img_url+product.product_photo} alt={product.product_name}  className='product_img mt-2'/>
                    <div className="card-body">
                      <h5> {product.product_name}</h5>
                      <p className='text-muted card-height'>{product.product_description}</p>
                      <b className='text-warning'>{product.product_cost} KES</b> <br />
                      <div>
                        {cart.some((p)=>p.product_id===product.product_id)?(
                          <button className='btn btn-danger'
                            onClick={()=>{
                            dispatch({
                            type:"REMOVE_FROM_CART",
                            payload:product.product_id
                            })
                            }} >Remove from cart
                          </button>
                        ):(
                          <button className='btn btn-primary' onClick={()=>{
                          dispatch({
                          type: "ADD_TO_CART",
                          payload:product
                          })
                          }}>Add to cart
                        </button>
                        )}
                      </div>
                    </div>
                  </div>
              </div>
            ))
          ):(
            product.map((product)=>(
              <div className="col-md-3 justify-content-center mb-4" key={product.product_id}>
                  <div className="card  shadow text-center mt-4">
                    <img src={img_url+product.product_photo} alt={product.product_name}  className='product_img mt-2'/>
                    <div className="card-body">
                      <h5> {product.product_name}</h5>
                      <p className='text-muted card-height'>{product.product_description}</p>
                      <b className='text-warning'>{product.product_cost} KES</b> <br />
                      <div>
                        {cart.some((p)=>p.product_id===product.product_id)?(
                          <button className='btn btn-danger'
                            onClick={()=>{
                            dispatch({
                            type:"REMOVE_FROM_CART",
                            payload:product.product_id
                            })
                            }} >Remove from cart
                          </button>
                        ):(
                          <button className='btn btn-primary' onClick={()=>{
                          dispatch({
                          type: "ADD_TO_CART",
                          payload:product
                          })
                          }}>Add to cart
                        </button>
                        )}
                      </div>
                    </div>
                  </div>
              </div>
            ))
          )}
          </>
        ):(
          <span className='text-info'>{loading}</span>
        )}
        
          
          
      </div>
      <footer>
        <Footer/>
      </footer>
    </>
     
     
    
  )
}


export default Getproducts