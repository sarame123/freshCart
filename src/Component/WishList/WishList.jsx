import React, { useContext, useEffect, useState } from 'react'
import style from './WishList.module.css'
import { CartContext } from '../../Context/CartContext'
import { InfinitySpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query';
export default function WishList() {
  let { getWishList, addToCart ,deletProductInWishList} = useContext(CartContext);
  let [wishList, setWishList] = useState(null);
   let [datal, setDatal] = useState(null);
  async function displayWishList() {
    let { data } = await getWishList();
    setWishList(data)
  }
  async function removewishList(id){
  let res=await deletProductInWishList(id);
  let { data } = await getWishList();
  setWishList(data)
  }

 
  useEffect(() => {
    displayWishList()
  }, [])
  return (

    <>
      {wishList ? <div className="container p-3 my-2 w-75 bg-main-light">
        <h3 className=' rounded p-2 text-center'>WishList</h3>
        <h4 className='h6'>Number Of WishList Item:<span className='text-main bold'>{wishList.count}</span></h4>


        {wishList?.data.map((prod) =>
          <>
            <div className="card my-3">
              <div className="row align-items-center">


                <div className="col-1 py-2">
                  <img src={prod.imageCover} className='p-2 w-100' alt="" />
                </div>
                <div className="col-4">
                  <div className='d-flex justify-content-between align-items-center'>
                    <div>
                      <h3 className='h5' >{prod.title.split(" ").slice(0, 2).join("")}</h3>
                      <h3 className=' h5 text-main' >{prod.price}EGP</h3>
                    </div>

                  </div>
                </div>
                <div className="col-3">
                  <button className='btn bg-main' onClick={() => addToCart(prod.id)}>Add To Cart</button>
                </div>
                <div class=" col-3 ">
                  <button  class="btn btn-danger " onClick={()=> removewishList(prod.id)}>
                    <i class="fa fa-trash"></i> Remove
                  </button>

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
      }


    </>
  )
}
