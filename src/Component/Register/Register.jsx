import React, { useState } from 'react'
import style from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { Circles } from 'react-loader-spinner'


export default function Register() {
  let navigate = useNavigate();
  let [error, setError] = useState(null);
  let [loading, setLoading] = useState(false);
  async function submitReister(val) {
    setLoading(true);
    let { data } = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, val).catch((err) => {
      setLoading(false);
      setError(err.response.data.message);
    })
    if (data.message === "success") {
      setLoading(false);
      navigate('/login')
    }


  }

  let validateSchema = Yup.object({
    name: Yup.string().min(2, 'min length is 2 char').max(7, 'max is 7 char').required('name is required'),
    email: Yup.string().email('email not valid').required('email is required'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'password not match').required('password is required'),
    rePassword: Yup.string().oneOf([Yup.ref('password')], 'repassowrd dont match password').required('repassword is required'),
    phone: Yup.string().matches(/^(002)?01[0-25][0-9]{8}$/, 'not match').required('phone is required')
  })
  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: ''
    },
    validationSchema: validateSchema,
    onSubmit: submitReister
  })

  return (

    <>
      <div className="containner">

        <form action="" className='w-75 mx-auto mt-5' onSubmit={formik.handleSubmit} >
          {error ? <div className='alert alert-danger'>{error}</div> : ""}
          <label htmlFor="name ">name:</label>
          <input type="text" className='form-control mb-3' onBlur={formik.handleBlur} id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
          {formik.errors.name && formik.touched.name ? <p className='alert alert-danger'>{formik.errors.name}</p> : ''}

          <label htmlFor="Email ">Email:</label>
          <input type="email" className='form-control mb-3' id='Email' onBlur={formik.handleBlur} name='email' value={formik.values.email} onChange={formik.handleChange} />
          {formik.errors.email && formik.touched.email ? <div className='alert alert-danger p-2'>{formik.errors.email}</div> : ""}
          <label htmlFor="Password ">Password:</label>
          <input type="password" className='form-control mb-3' onBlur={formik.handleBlur} id='Password' name='password' value={formik.values.password} onChange={formik.handleChange} />
          {formik.errors.password && formik.touched.password ? <div className="alert alert-danger p-2">
            {formik.errors.password}
          </div> : ""}
          <label htmlFor="RePassword ">RePassword:</label>
          <input type="password" className='form-control mb-3' id='RePassword' onBlur={formik.handleBlur} name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange} />
          {formik.errors.rePassword && formik.touched.rePassword ? <div className="alert alert-danger p-2">
            {formik.errors.rePassword}
          </div> : ""}
          <label htmlFor="Phone ">Phone:</label>
          <input type="tel" className='form-control mb-3' id='Phone' onBlur={formik.handleBlur} name='phone' value={formik.values.phone} onChange={formik.handleChange} />
          {formik.errors.phone && formik.touched.phone ? <div className="alert alert-danger p-2">
            {formik.errors.phone}
          </div> : ""}
          {loading ? <button type='button' className='btn bg-main text-white float-end '>
            <Circles
              height="20"
              width="50"
              color="#fff"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </button> :

            <button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white float-end'>Submit</button>}
        </form>
      </div>
    </>
  )
}
