import axios from 'axios'
import React, {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Signup = () => {
  // Initialize hooks
  const[username,setUsername]=useState('')
  const[email,setEmail]=useState('')
  const[phone,setPhone]=useState('')
  const[password,setPassword]=useState('')
  const[loading,setLoading]=useState('')
  const[success,setSuccess]=useState('')
  const[error,setError]=useState('')
  const navigation=useNavigate()


  //  Function to handle our submission
  // Async gives the function(submit) capability to wait API responses while await enables the function to wait API response

  const submit=async(e)=>{
    // Is to prevent the page from reloading once submit has been clicked
    e.preventDefault()
    // We update our loading hook for user to see the data being uploaded 
    setLoading("Please wait as your data gets uploaded")

    // try and catch incase there is an error during formdata submission
    try {
      
      
      // we creaig form data object to carry our updated hoks
      const data=new FormData()
      // We append our values to our object form
      data.append("username",username)
      data.append("email",email)
      data.append("phone",phone)
      data.append("password",password)
    // Send our data using axios
    // axios is able to use request methods such as post,get,patch,put e.t.c
    const response=await axios.post("https://farasivictor.pythonanywhere.com/api/signup",data)
    setLoading("")
    setError("")
    setSuccess(response.data.message)

    // Clear hooks when the signup is a success
    setEmail("")
    setPassword("")
    setUsername("")
    setPhone("")
      // Takes user to the next navigation state
    setTimeout(()=>navigation("/signin"),3000)
    
  }

  catch (error) {
      setLoading("")
      setSuccess("")
      setError(error.message)
      
    }
  }
  return (
    <div className='body' style={{height:"680px"}}>
      <div className='row justify-content-center'>
        <div className='card shadow p-4 col-md-6 text-center mt-4'>
          <h2>Sign Up</h2>
          {/* Whenthe form is submitted [onSubmit] it invokes the submit function */}
          <form onSubmit={submit}>
            <span className="text-info">{loading}</span>
            <span className="text-success">{success}</span>
            <span className="text-danger">{error}</span>
            {/* Username */}
            <input type="text" className='form-control' id="" placeholder='Enter Username'  required
            value={username} onChange={(e)=>setUsername(e.target.value)}/> <br />
            
            {/* Email */}
            <input type="email" className="form-control" id="" placeholder='Enter Your Email'  required
            value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />  
            
            {/* Phone */}
            <input type="tel" className="form-control" id="" placeholder='Enter Your Phone Number' required
            value={phone} onChange={(e)=>setPhone(e.target.value)} /> <br />
            
            {/* Password */}
            <input type="password"className="form-control" id="" placeholder='Input Your Password' required
              value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
              
              <button type="submit" className='btn btn-primary'>Signup</button>
            
          </form>
          <p>Already have an Account? <Link to={'/signin'}>Signin</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Signup