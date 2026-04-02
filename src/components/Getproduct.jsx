import React, { useEffect, useState } from 'react'
import image from'../logo.svg'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Caroousel from './Caroousel'

const Getproduct =() => {
  // declaring state variables
  const[products,setProducts] = useState([])
  const[loading,setLoading] = useState("")
  const[error,setError] = useState("")
  // navigation
  const navigate =useNavigate()

  // image url
  const img_url ="https://jaydenoryx.alwaysdata.net/static/images/"
    //function to retrieve products
    const getProduct = async() =>{
      setLoading("please wait a we retrieve products ... ")
      try {
        const response = await axios.get("https://jaydenoryx.alwaysdata.net/api/get_product_details")
        setProducts(response.data)
        setLoading("")
      } catch (error) {
        setError(error.message)
      }
    }
  //using useEffect to automatically  retrieve products to database
  useEffect(()=>{
    getProduct()
  },[]); 
 return (
    <div className='row'>
      <h3 className='text-dark'>Available products</h3>


      {/* products card design */}
      {products.map((product) =>(
      <div className='col-md-3 justify-content-center mb-4'>
        <div className='card shadow mt-2 p-4'>
          <img src={img_url + product.product_photo} alt={product.product_photo} className='product_img'/>
          
          {loading}
          {error}

          {/* product details */}
          <div className='card-body'>
            <h5 className='mt-2'>{product.product_name}</h5>
            <p className='text-muted'>{product.product_description}</p>
            <b className='text-danger'>Ksh.{product.product_cost}</b><br />


            <button className='btn btn-dark mt-2 w-100' onClick={()=>navigate("/makepayment",{state:{product}})}>Purchase now</button>
          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Getproduct