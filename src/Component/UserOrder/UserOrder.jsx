import React, { useContext, useEffect } from 'react'
import style from './UserOrder.module.css'
import { InfinitySpin } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import axios from 'axios'
import { CartContext } from '../../Context/CartContext'
export default function UserOrder() {
  let {getProductInCart}=useContext(CartContext)
//  async function getprod(){
//     let res= await getProductInCart()
//    let idCartOwner= res.data?.data.cartOwner
//     return idCartOwner
//   }

// let {data}=useQuery("product",getProductInCart)
// let idCartOwner=data?.data?.data.cartOwner;

  
//   function getuserOrders(){
//     return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${idCartOwner}`).then((res)=>{
//       console.log(res);
//     }).catch((err)=>{
//       console.log(err);
//     })
//   }

//  useEffect(()=>{
//   getuserOrders()
//   },[])
  return (
    <>
     
     

    </>
  )
}
