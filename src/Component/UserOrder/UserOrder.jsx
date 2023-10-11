import React, { useContext, useEffect, useState } from 'react'
import style from './UserOrder.module.css'
import { InfinitySpin } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import axios from 'axios'
import { CartContext } from '../../Context/CartContext'
export default function UserOrder() {
  const [orderItem, SetorderItem] = useState(null)
  let {getProductInCart}=useContext(CartContext)
//  async function getprod(){
//     let res= await getProductInCart()
//    let idCartOwner= res.data?.data.cartOwner
//     return idCartOwner
//   }

let {data}=useQuery("product",getProductInCart)
// let idCartOwner=data?.data?.data.cartOwner;
localStorage.setItem('cartOwner',data?.data?.data.cartOwner)
let idCartOwner=localStorage.getItem('cartOwner')
console.log(idCartOwner);

  
  function getuserOrders(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${idCartOwner}`).then((res)=>{
      SetorderItem(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

 useEffect(()=>{
  getuserOrders()
  },[])
  return (
    <>
     
     {/* {orderItem? <div className="container p-3 my-3 w-75 bg-main-light">
        <h3 className=' rounded p-2 text-center'>shopping cart</h3>
        <h4 className='h6'>Number Of Products In Cart:<span className='text-main bold'>{orderItem.numOforderItems}</span></h4>
        <h4 className='h6'>Total Cart Price:<span className='text-main bold'>{orderItem.data.totalCartPrice}EGP</span></h4>

        {orderItem.data.map((cart) =>
          <>
            <div className="card my-3" key={cart._id}>
              <div className="row align-items-center">


               
                <div className="col-11">
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
    
                      <h3 className=' h5 text-main' >{cart.totalOrderPrice}EGP</h3>
       
                    </div>
                   
                  </div>
                </div>

              </div>
            </div>
          </>


        )}
      </div> : <section className='d-flex align-items-center justify-content-center'>
        <InfinitySpin
          width='400'
          color="#4fa94d"
        />
      </section>
      } */}

    </>
  )
}
