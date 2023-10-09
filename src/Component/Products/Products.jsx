import React, { useContext, useEffect, useState } from 'react'
import style from './Products.module.css'
import $ from "jquery"
import axios from 'axios'
import { Circles } from 'react-loader-spinner';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
export default function Products() {
  const [isClick, setIsClick] = useState({});
  const [searchVal, setSearchVal] = useState(""); 
  let {addToCart, setCartVums,addProducutoWishList,getProductInCart}=useContext(CartContext);
  async function calladdProductToCart(id){
   let res= await addToCart(id)
  }
  async function getProdInCart(){
    let res= await getProductInCart()
    setCartVums(res.data?.numOfCartItems);
   }
   useEffect(()=>{
    getProdInCart()
   },[])
  async function aadprtowishList(id){
  let res= await addProducutoWishList(id)
     setIsClick({ ...isClick, [id]: !isClick[id]})
   }
   
    function getAllProducts() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products')
    
  }
  let { isLoading, data, isError, isFetching, error} = useQuery("allProducts", getAllProducts, {
    cacheTime: 3000
  })

    console.log(data?.data?._id);
    
    
  if (isError) {
    return <h1>{error.response.data.message}</h1>
  }

  return (
    <>
      <div className="container">
   
        {isLoading == false ? <div className="row ">
          {data?.data?.data.map((product,index) => <div className="col-lg-2 col-md-4 mb-4 text-center py-3  " key={index}>
        
              <div className="product card h-100 px-2 py-2 ">
             <button  onClick={()=>aadprtowishList(product._id,index)}  className=' border-0 p-2 float-end'
                  >
        
                  <i    className= {isClick[product._id] ? 'fa fa-heart active float-end':'fa fa-heart text-main float-end' }  ></i>
                  
                  </button>
    
              <Link to={`productdetails/${product._id}`}>
                <img src={product.imageCover} alt="" className='w-100 p-2' />
                <p className='text-main'>{product.category.name}</p>
                <h2 class="h6 fw-bolder text-black">{product.title.split(' ').slice(0,2).join(' ')}</h2>
              
                <div className="produxt-box row d-flex align-items-center justify-content-between  mt-3">
                
                  <div className="col-md-12 col-lg-6">
                  <span className='badge bg-main  p-2 rounded text-white text-muted fw-bold font-sm '>{product.price}EGP</span>
  
                  </div>
                  <div className="col-md-12 col-lg-6">
                  <span><i className='fa-solid fa-star rating-color'></i>{product.ratingsAverage}</span>
                  </div>

                 
                 </div>
                
                </Link>
             
              
              <button  onClick={()=>calladdProductToCart(product.id)} className="  btn bg-main text-white w-100 my-2">Add To Cart </button>
              </div>
          </div>
)}

        </div> : <div className=' d-flex justify-content-center  '> <Circles
          height="50%"
          width="50%"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        /></div>}

      </div>

    </>



  )
}
 