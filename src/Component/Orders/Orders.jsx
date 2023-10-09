import React from 'react'
import style from './Orders.module.css'
import axios from 'axios'
import { useQuery } from 'react-query'
import { InfinitySpin } from 'react-loader-spinner'
export default function Orders() {
  function getAllOrders(){
    return axios.get(`https://ecommerce.routemisr.com/api/v1/orders/`)
  }
 let{data}= useQuery("allOrders",getAllOrders)

  return (
    <>
      {data?.data? <div className="container p-3 my-3 w-75 bg-main-light">
        <h3 className=' rounded p-2 text-center'>All Orders</h3>
        <h4 className='h6'>Number Of orders :<span className='text-main bold'>{data?.data.metadata.limit}</span></h4>
       

        {data?.data.data.map((order) =>
          <>
            <div className="card my-3 p-2">
              <div className="row align-items-center">


              
                <div className="col-11 p-3
                ">
                  <div className='d-flex justify-content-between align-items-center'>
                    <div> <h3 className='h5' >name: <span className=' h5 text-main'>{order.user.name}</span></h3>
                      <h3 className='h5' >paymentMethodType: <span className=' h5 text-main'>{order.paymentMethodType}</span></h3>
                      <h3 className=' h5' >totalOrderPrice:<span className=' h5 text-main'>{order.totalOrderPrice}EGP</span></h3>
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
      }
     

    </>
  )
}
