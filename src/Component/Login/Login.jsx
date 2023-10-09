import React, { useContext, useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Circles } from 'react-loader-spinner'
import { UserContext } from '../../Context/UserContext'
export default function Login() {
   let {setUserToken,setUserData}=useContext(UserContext)
  let[error,setError]=useState(false);
  let [loading,setLoading]=useState(false);
  let navigate=useNavigate();
  let validationSchema=Yup.object({
    email: Yup.string().email('email not valid').required('email is required'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'password not match').required('password is required'),
   })
 
  async function signIn(values){
    setLoading(true);
    let {data}=await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,values).catch((err)=>{ setLoading(false) 
    setError(err.response.data.message)})
   if(data.message==="success"){
    setLoading(false);
    localStorage.setItem('userToken',data.token)
     setUserToken(data.token);
     setUserData(data.user)
      navigate("/");
    
   }
  }
  let formik=useFormik({
    initialValues:{
      email:"",
      password:""
    },
    validationSchema,
    onSubmit:signIn
  })
  return (
   <>
<div className="container">
<form action="" className='w-75 mx-auto mt-5' onSubmit={formik.handleSubmit}>
  {error?<div className="alert alert-danger">
    {error}
    </div>:""}
<label htmlFor="email">Email</label>
   <input type="email" name="email" id="email"  className='form-control ' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
  {formik.errors.email&&formik.touched.email?<div className='alert alert-danger mb-3'>
     {formik.errors.email}
   </div>:""}
   <label htmlFor="password" className='mt-3'>password</label>
   <input type="password" name="password" id="password"  className=' form-control' onChange={formik.handleChange} onBlur={formik.handleBlur}/>
   {formik.errors.password&&formik.touched.password? <div className='alert alert-danger mb-3'>
     {formik.errors.password}
   </div>:""}
  {loading? <button type='button' className='btn bg-main text-white mt-3'>
   <Circles
              height="20"
              width="50"
              color="#fff"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
   </button>:
 <>
   <button disabled={!(formik.isValid&&formik.dirty)} className='btn bg-main mt-3 text-white' type='submit'>Login</button>
   <Link className='  text-success float-end mt-3 ' to='/ResetPassword' >Forgget Password?</Link>
 </>
   }
</form>
</div>
   </>
  )
  }
