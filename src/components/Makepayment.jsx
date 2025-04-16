import axios from "axios"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const Makepayment = () => {
  const{total}=useLocation().state||{}
  const[phone,setPhone]=useState("")
  const[loading,setLoading]=useState("")
  const[error,setError]=useState("")
  const[success,setSuccess]=useState("")

  const submit=async(e)=>{
      e.preventDefault()
      setLoading("Please wait...")

      // prepare data
      const data=new FormData()
      data.append("phone",phone)
      data.append("amount",total)

      try {
        const response=await axios.post("https://farasivictor.pythonanywhere.com/api/mpesa_payment",data)
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
      <div className="row justify-content-center ">
        <div className="col-md-5 mt-4 bg-light pb-5">
          <h1 className="text-success text-center">Lipa na Mpesa</h1>
          <div className="card shadow p-3 text-center">
            <div className="card-body">
              <span className="text-info">{loading}</span>
              <span className="text-danger">{error}</span>
              <span className="text-success">{success}</span>

              <h3>Your total is:{total}</h3>

            </div>
            <div className="card-footer">
              <form className="text-center" onSubmit={submit}>
                <label className="fs-3 text-muted">Phone number</label><br />
                <input type="tel" name="" id=""  className="form-control" placeholder="Example 2547..." value={phone} onChange={e=>setPhone(e.target.value)} required/><br />
                <button type="submit" className="btn btn-success mt-3">Purchase</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Makepayment
