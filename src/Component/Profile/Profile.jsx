import React from 'react'
import style from './Profile.module.css'
import jwtDecode from 'jwt-decode'
export default function Profile() {
  let encodedToken=localStorage.getItem('userToken');
 let decodedToken= jwtDecode(encodedToken)
  return (
    <> 
    <h1 className=' text-main d-flex align-items-center justify-content-center'>
      hello:{decodedToken.name}
      </h1>
      </>
  )
}
