import axios from 'axios'
import React, { useState } from 'react'

const Chatbot = () => {
    const[chat,setChat]=useState("")
    const[message,setMessage]=useState("")
    const[error,setError]=useState("")
    const submit=async(e)=>{
      // e.preventDefault()

      const data=new FormData()
      data.append("user_Input",chat)
      

      try {
        const response=await axios.post("https://farasivictor.pythonanywhere.com//api/bot",data)
        setMessage(response.data)
      } catch (error) {
        setError(error.message)
      }

    }
  return (
    <div className='body pt-3' style={{height:"680px"}}>
        <span>{error}</span>
        <div className='row justify-content-center'>
        <form action={submit} className='col-md-5 p-3 bg-info text-center'>
            <label htmlFor="">Chat with us</label><br />
            <input type="text"  placeholder='Ask A question' className='form-control' value={chat} onChange={(e)=>setChat(e.target.value)}/><br/>
            <button type='submit' className='btn btn-success mt-1'>Send</button>
        </form>
        </div>
        <div className="row justify-content-center mt-4">
            <div className="card shadow text-center col-md-6" style={{backgroundColor:"whitesmoke"}}>
                <div className="card-header">
                    <h4>Reply <span className='bi bi-robot'></span></h4>
                </div>
                <b className='text-info'><span className='fs-2'>&middot;</span>{message.Chatbot}</b>
            </div>
        </div>
    </div>
  )
}

export default Chatbot
