import React, { useContext, useEffect } from 'react'
import style from './PaymentInformation.module.css'
import { useFormik } from 'formik'
import { CartContext } from '../../Context/CartContext';
export default function PaymentInformation() {
  let {OnlinePayment,cartId}=useContext(CartContext);
  
 
   async function submitAdress(values){
  let res= await OnlinePayment(cartId,"http://localhost:3000",values)
 window.location.href=res?.data.session.url
  }
  let Formik=useFormik({
    initialValues:{
      details:"",
      phone:"",
      city:""
    },
    onSubmit:submitAdress
  })
  return (
    <>
   <div className="container">
   <form action="" onSubmit={Formik.handleSubmit}>
   <label htmlFor="details">Details:</label>
    <input type="text" id="details" className='form-control mb-3' value={Formik.values.details} name='details' onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
    <label htmlFor="phone">Phone:</label>
    <input type="tel"  name="phone" id="phone" className='form-control mb-3' value={Formik.values.phone} onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
    <label htmlFor="city">City:</label>
    <input type="text" name="city" id="city" className='form-control mb-3' value={Formik.values.city} onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
     <button className='btn btn-info' type='submit'>Pay Now</button>
   </form>
   </div>
    </>
  )
}
