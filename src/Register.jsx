import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
export default function Register() {

  // function validation(values)
  // {
  //   let errors ={}
  //   if(!values.name)
  //    errors.name = 'name is required'
  //   else if(!/^[A-Z][a-z]{2,7}$/.test(values.name))
  //    errors.name ='name not match , start with capital , 2-7 char'
  //   if(!values.email)
  //   errors.email = 'email is required'
  //   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) 
  //   errors.email = 'email not match'

  //   return errors
  // }


  let validationSchema = Yup.object({
     name:Yup.string().min(2,'min length is 2 char').max(7,'max is 7 char').required('name is required'),
     email:Yup.string().email('email not valid').required('email is required'),
     password:Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/,'password not match you must start with capital letter ').required('pass is required'),
     rePassword:Yup.string().oneOf([Yup.ref('password')]).required('repassword is required'),
     phone:Yup.string().matches(/^(002)?01[0-25][0-9]{8}$/,'not match').required('phone is required')
  })

  function submitFomt(values) {
    console.log(values);
  }

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: ''
    },
    validationSchema,
    onSubmit: submitFomt
  })





  return (
    <div className='container'>
      <form className='my-5 w-75 mx-auto' onSubmit={formik.handleSubmit}>
        <h3 className='my-3'>Register Now:</h3>
        <label htmlFor="name">name</label>
        <input type="text" className='form-control mb-3'  onBlur={formik.handleBlur} id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />
        {formik.errors.name  && formik.touched.name?  <p className='alert alert-danger'>{formik.errors.name}</p>:''}
        <label htmlFor="email">email</label>
        <input type="email" className='form-control mb-3'  onBlur={formik.handleBlur} id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
       
        {formik.errors.email && formik.touched.email?   <p className='alert alert-danger'>{formik.errors.email}</p>:''}

        <label htmlFor="password">password</label>
        <input type="password" className='form-control mb-3'  onBlur={formik.handleBlur} id='password' name='password' value={formik.values.password} onChange={formik.handleChange}/>


        {formik.errors.password && formik.touched.password?   <p className='alert alert-danger'>{formik.errors.password}</p>:''}
        <label htmlFor="rePassword">rePassword</label>
        <input type="password" className='form-control mb-3'  onBlur={formik.handleBlur} id='rePassword' name='rePassword' value={formik.values.rePassword} onChange={formik.handleChange}/>

        {formik.errors.rePassword && formik.touched.rePassword?   <p className='alert alert-danger'>{formik.errors.rePassword}</p>:''}
        <label htmlFor="phone">Phone</label>
        <input type="tel" className='form-control mb-3'  onBlur={formik.handleBlur} id='phone' name='phone' value={formik.values.phone} onChange={formik.handleChange}/>

        {formik.errors.phone && formik.touched.phone?   <p className='alert alert-danger'>{formik.errors.phone}</p>:''}
        <button type='submit' disabled={!(formik.isValid && formik.dirty)} className='btn btn-success  ms-auto d-block'>Register</button>

      </form>
    </div>
  )
}
