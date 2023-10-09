import React, { useContext } from 'react'
import style from './ProtectedRoute.module.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext';
export default function ProtectedRoute(props) {
  let navigate=useNavigate();
  if(localStorage.getItem('userToken')!==null){
    return props.children
  }
  else{
 return <Navigate to={'/login'}/>
  }
  return (
   <>
   
   </>
  )
}
