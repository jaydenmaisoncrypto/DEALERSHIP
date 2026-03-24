import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Signup = () => {

// declaring state variables
const[username,setUsername] = useState("")
const[email,setEmail] = useState("")
const[phone,setPhone] = useState("")
const[password,setPassword] = useState("")
 

// status messages
const[loading,setLoading]= useState("")
const[error,setError]= useState("")
const[success,setSuccess]= useState("")

// function signup
const submitSignupDetails =async(e)=>{
  e.preventDefault()
  setLoading("pleace wait ...")
  try {
    const formData = new FormData();
    formData.append("username",username);
    formData.append("email",email);
    formData.append("phone",phone);
    formData.append("password",password);
<section className="row text-center bg-warning p-4">
    <div className="col-md-4 text-light">
        <h4 className="text-light">About us</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fuga necessitatibus, atque aut neque veritatis repellendus eveniet magnam tempora pariatur aspernatur id, ea quam nisi odio, illum quaerat eligendi. Ipsam.</p>
    </div>
    <div className="col-md-4">
        <h4>Contact us</h4>
        <form>
            <input type="email" placeholder="Enter your Email" className="form-control"/><br />
            <textarea cols="7" rows="7" placeholder="Leave a comment" className="form-control"></textarea>
            <input type="submit" value="Send Message" className="btn btn-outline-danger" />
        </form>
    </div>
    <div className="col-md-4">
        <h4>Stay connected</h4>
        <a href="https://www.facebook.com">
            <img src="./" alt="" />
        </a>

    </div>
</section>
    // adding base url
    const response = await axios.post("https://jaydenoryx.alwaysdata.net/api/signup",formData);

    // reset values
    setPhone("")
    setUsername("")
    setPassword("")
    setEmail("")

    setSuccess(response.data.success)
    setLoading("")
  } catch (error) {
    setError(error.message)
  }

}
  return (
    <div className='row justify-content-center '>
      <div className='col-md-6  m-2 p-4  '>
        <h1 className='text-primary'>Signup</h1>
        {/* binding variables */}
          {loading}<br/>
          {error} <br/>
          {success}<br/>

        {/* signup form */}
        <form onSubmit={submitSignupDetails}>
          <input type="text" placeholder='Enter username' className='form-control' onChange={(e)=>setUsername(e.target.value)} /><br />
          <input type="email" placeholder='Enter email' className='form-control' onChange={(e)=>setEmail(e.target.value)} /><br />
          <input type="tel" placeholder='Enter phone number' className='form-control' onChange={(e)=>setPhone(e.target.value)}/><br />
          <input type="password" placeholder='Enter password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/><br />
          <input type="submit" value="Signup" className='btn btn-outline-warning w-100'/><br />
        {/* Incase someone has an account */}
        <Link to='/signin'>Already have an account ? Signin</Link>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Signup