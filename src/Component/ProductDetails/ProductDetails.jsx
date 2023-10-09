import React, { useContext, useEffect, useState } from 'react'
import style from './ProductDetails.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useQuery } from 'react-query';
import { CartContext } from '../../Context/CartContext';
export default function ProductDetails() {
  let {addToCart,addProducutoWishList, setCartVums}=useContext(CartContext);
  const  [toggleHeart, setToggleHeart] = useState(false)
  let params=useParams();

 async function aadprtowishList(id){
  await addProducutoWishList(id);
  setToggleHeart(!toggleHeart)
 }


  function getProductDetails(id){
  return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

  } 
  const{data,isloading}=useQuery("productDetails",()=>getProductDetails(params.id))
  console.log(data?.data.data);
  return (
  
   <div className="container">
    <div className="row align-items-center">
      <div className="col-4">
        <img src={data?.data.data.imageCover
} className='w-100' alt=""  />

      </div>
      <div className="col-8 ">
      <p className='text-main'>{data?.data.data.category.name}</p>
              <button onClick={()=>aadprtowishList(data?.data.data.id)} className='btn border-0 float-end'> <i className={toggleHeart!=false ? 'fa fa-heart active' : 'fa fa-heart'}
></i></button>
                <p>{data?.data.data.title}</p>
                <p>{data?.data.data.description}</p>
                <div className="produxt-box d-flex justify-content-between p-2">
                  <span className='badge bg-main p-2 rounded text-white '>{data?.data.data.price}EGP</span>
                  <span><i className='fa-solid fa-star rating-color'></i>{data?.data.data.ratingsAverage}</span>
                </div>
                <button onClick={()=>addToCart(data?.data.data.id)} className="btn bg-main px-2 mt-3 my-2 text-white w-100 mx-auto">Add To Cart </button>
                
      </div>
    </div>
   </div>
  )
}
