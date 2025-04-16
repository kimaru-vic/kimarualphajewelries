import axios from 'axios'
import React, {useState } from 'react'




const Addproduct = () => {
  const[product_name,setproduct_name]=useState("")
  const[product_description,setproduct_description]=useState("")
  const[product_cost,setproduct_cost]=useState("")
  const[product_photo,setproduct_photo]=useState("")

  // Hook to handle user information
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")

  // Fuction to handle submit
  const submit=async (e) => {
    // Prevent reload
    e.preventDefault()
    setLoading("Please wait...")

    // Prepare object FormData
    const data= new FormData()
    // Append updated hooks
    data.append("product_name",product_name)
    data.append("product_description",product_description)
    data.append("product_cost",product_cost)
    data.append("product_photo",product_photo)
    try {
      // send data to API
      const response=await axios.post("https://farasivictor.pythonanywhere.com/api/add_product",data)
      setLoading("")
      setError("")
      setSuccess(response.data.message)
      
      
    } catch (error) {
      setLoading("")
      setError(error.message)
      
    }
    
  }
  return (
    <div className='body' style={{height:"680px"}}>
      <div className='row justify-content-center'>
        <div className="card shadow p-4 col-md-6 text-center mt-5">
          <h1 className='text-center'>Add Product</h1>
        <form action="" onSubmit={submit}>
          <span className='text-center'>{loading}</span>
          <span className='text-success'>{success}</span>
          <span className='text-danger'>{error}</span>
          <input type="text" className="form-control" id="" value={product_name} placeholder='Enter the product name' 
          onChange={(e)=>{setproduct_name(e.target.value)}}/> <br />
          <textarea className="form-control" id="" placeholder='Input product description' value={product_description} 
          onChange={(e)=>{setproduct_description(e.target.value)}}></textarea> <br />
          <input type="number" className="form-control" id="" value={product_cost} placeholder='Enter the product cost'
          onChange={(e)=>{setproduct_cost(e.target.value)}}/> <br /> 

          <label htmlFor="">Browse/Upload product photo</label> <br />
          {/* acept accepts all possible image paths */}
          {/* We use target.file since the image isnt a value */}
          <input type="file" className="form-control"accept='image/*' onChange={(e)=>{setproduct_photo(e.target.files[0])}}/> <br />
          <button type="submit" className='btn btn-primary w-100'>Upload Product</button>
      
        </form>
        </div>
          
      </div>
    </div>
  )
}

export default Addproduct