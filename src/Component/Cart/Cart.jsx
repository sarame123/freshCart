import React, { useContext, useEffect, useState } from 'react'
import style from './Cart.module.css'
import { CartContext } from '../../Context/CartContext'
import toast from 'react-hot-toast';
import { InfinitySpin } from 'react-loader-spinner';
import PaymentInformation from '../PaymentInformation/PaymentInformation';
import { Link } from 'react-router-dom';
export default function Cart() {
  let { getProductInCart,setCartVums,updateInProductCart, deletProductInCart } = useContext(CartContext);
  const [cartItem, SetCartItem] = useState(null)
  async function updateCart(productid,count){
    let{data}=await updateInProductCart(productid,count);
    SetCartItem(data);

  }
  async function getCart() {
    let res = await getProductInCart()
    setCartVums(res.data?.numOfCartItems)
    SetCartItem(res.data);
   
  }
  async function deleteCart(id) {
    let res = await deletProductInCart(id)
    if(res.data.status==="success"){
      getCart()
    toast.success("product deleted successfully")
    }
  
  }
  useEffect(() => {
    getCart()
  }, [])
  return (
    <>
      {cartItem ? <div className="container p-3 my-3 w-75 bg-main-light">
        <h3 className=' rounded p-2 text-center'>shopping cart</h3>
        <h4 className='h6'>Number Of Products In Cart:<span className='text-main bold'>{cartItem.numOfCartItems}</span></h4>
        <h4 className='h6'>Total Cart Price:<span className='text-main bold'>{cartItem.data.totalCartPrice}EGP</span></h4>

        {cartItem.data.products.map((cart) =>
          <>
            <div className="card my-3" key={cart.product.id}>
              <div className="row align-items-center">


                <div className="col-1 py-3">
                  <img src={cart.product.imageCover} className='p-2 w-100' alt="" />
                </div>
                <div className="col-11">
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                      <h3 className='h5' >{cart.product.title.split(" ").slice(0, 2).join("")}</h3>
                      <h3 className=' h5 text-main' >{cart.price}EGP</h3>
                      <i className='fa fa-trash-alt text-danger font-sm cursor-pointer' onClick={() => deleteCart(cart.product.id)}> Remove</i>
                    </div>
                    <div className='m-3'>
                      <button className=' btn rounded border-1 border-success' onClick={()=>updateCart(cart.product.id,cart.count+1)}>+</button>
                      <span className='mx-2'>{cart.count}</span>
                      <button onClick={()=>updateCart(cart.product.id,cart.count-1)} className=' btn rounded border-1 border-success'>-</button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </>


        )}

<Link className='btn bg-main text-white w-100 ' to="/PaymentInformation" >
 
  Online Payment
  </Link>
      </div> : <section className='d-flex align-items-center justify-content-center'>
        <InfinitySpin
          width='400'
          color="#4fa94d"
        />
      </section>
      }
     

    </>
  )
}
