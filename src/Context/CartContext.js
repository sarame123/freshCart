import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";




export const CartContext = createContext();
let usertoken=localStorage.getItem('userToken');
let hedear={
    token:usertoken
}

function getProductInCart(){
return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,
    {headers:hedear}).then((res)=>res
        ).catch((err)=>err)
}

function updateInProductCart(productid,count){
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productid}`,{count}, {headers:hedear}).then((res)=>res).catch((err)=>err)
}
function deletProductInCart(id){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
    {headers:hedear}).then((res)=>res
        ).catch((err)=>err)
}
function OnlinePayment(cartId,url,values){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`, 
    {
        shippingAddress:values
    },
    {headers:hedear}
    ).then((res)=>res
    ).catch((err)=>err)


}
function addProducutoWishList(id){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, 
    {
        productId:id
    },
    {headers:hedear}
    ).then((res)=> toast.success(res.data.message)
    ).catch((err)=>toast.error(err.data.message))


}
function getWishList(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,
    {headers:hedear}).then((res)=>res
        ).catch((err)=>err)
}
function deletProductInWishList(id){
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
    {headers:hedear}).then((res)=>{toast.success(res.data.message)}
        ).catch((err)=>toast.error(err.data.message))
}

export default function CartContextProvider(props) {
     let [cartNums,setCartVums]=useState();

    let [cartId,setCartId]=useState(null);
    function addToCart(id){
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,
         {
           productId:id
         },
         {headers:hedear}).then((res)=>{
            setCartVums(res.data?.numOfCartItems)
          toast.success(res.data.message,{
           position: 'top-right'
          }
               );
         } 
         ).catch((err)=>{toast.error(err.response.data.message,{
           duration: 4000,
           position: 'top-right'}
           )})
       }
    async function getcartId(){
        let {data}=await getProductInCart().catch((err)=>err)
        setCartId(data?.data?._id)
      
      }
      useEffect(()=>{
        getcartId()
      },[])
   
    return <CartContext.Provider value={{cartNums,setCartVums,cartId, deletProductInWishList,getWishList,addProducutoWishList,updateInProductCart,OnlinePayment,addToCart,getProductInCart,deletProductInCart}}>
        {props.children}
    </CartContext.Provider>
}
