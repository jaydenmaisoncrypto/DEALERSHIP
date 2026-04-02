import axios from "axios"
import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


const Signin = () => {

    // Declaring state variables
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    // Status messages
    const[loading,setLoading] = useState("")
    const[error,setError] = useState("")
    const[success,setSuccess] = useState("")
    // Navigation
    const navigate = useNavigate()
    // Function to Signin
    const handleSignin =async (e) =>{
        e.preventDefault()
        setLoading("")
        try {
        // Retrieving user details
        const formData=new FormData();
        formData.append("email",email)
        formData.append("password",password)

        // Adding base URL
        const response= await axios.post("https://jaydenoryx.alwaysdata.net/api/signin",formData);
        if (response.data.user){
            setSuccess(response.data.message)
            setLoading("")
            localStorage.setItem("user",JSON.stringify(response.data.user))
            navigate("/")
        }else{
            setError(response.data.message)
            setLoading("")
        }
      }catch (error) {
        setError(error.message)
      }
    }

    return (
    <div className='row justify-content-center'>
      <div className='col-md-6  m-2 p-4'>
        <h1 className='text-primary'>Signin</h1>
        {/* binding variables */}
        {loading}<br/>
        {error}<br/>
        {success}<br/>
       
        
        <form onSubmit={handleSignin}>
          <input type="email" placeholder='Enert email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/><br/>
          <input type="password" placeholder='Enter password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/><br/>
          <input type="submit" value="Signin" className='btn btn-outline-info w-100'/><br />
          <Link to='/signup'>Don't have an account ? Signup</Link>
        </form>
      </div>
    </div>
  )

}

export default Signin
