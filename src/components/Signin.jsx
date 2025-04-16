import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Signin = () => {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[loading,setLoading]=useState('')
  const[error,setError]=useState('')
  const navigation=useNavigate()
  // Function to handle what happens when the form has been submitted

  const submit=async(e)=>{
    // To prevent default page from appearing
    e.preventDefault()
    // Update the loading hook
    setLoading("Hang on as we sign you in")

    try {
      // Prepare our form data object
      const data= new FormData()
      // We append updated hooks to our object
      data.append("email",email)
      data.append("password",password)
      // We use axios to access different request methods e.g POST,GET(connect to api)
      // We async to allow us use the await
      // Which hold the execution of other lines of code until there is an API response

      const response =await axios.post("https://farasivictor.pythonanywhere.com/api/signin",data)

      if(response.data.user){
        // we store the signed in user to a local storage on the browser
        // SetItem is a storage method
         localStorage.setItem("user",JSON.stringify(response.data.user))

        // If the login is a success we navigate to getproduct component automatically
        navigation("/")
      }else{
        setLoading("")
        setError(response.data.message)
      }
      
    } catch (error) {
      // In the event of an error we clear the loading 
      setLoading("")
      // Update hook with the actual error
      setError(error.message)
      
    }
  }
  return (
    <div className='body' style={{height:"680px"}}>
      <div className="row justify-content-center">
        <div className="card shadow col-md-4 p-4 text-center mt-4">
          <h1 className='text-center'>Sign in</h1>
          <form onSubmit={submit}>
            <span className='text-info fs-4'>{loading}</span>
            <span className='text-danger fs-4'>{error}</span>
            <input type="email" className="form-control" id="" placeholder='Enter Email' value={email} 
            onChange={(e)=>setEmail(e.target.value)} /> <br />
            <input type="password" className="form-control" id="" placeholder='Input password' value={password} 
            onChange={(e)=>setPassword(e.target.value)} /> <br />
            <button type="submit" className='btn btn-primary w-100'>Signin</button>
          </form>
          <p>Don't have an account <Link to={"/signup"}>Signup</Link></p>
        </div>
      </div>
    </div>
    
  )
}

export default Signin