import React, { useContext, useEffect } from 'react'
import style from './Layout.module.css'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
export default function Layout() {
  let { setUserToken}=useContext(UserContext);
  useEffect(()=>{
   if(localStorage.getItem('userToken')!==null){
    setUserToken( localStorage.getItem('userToken'))
   }
  },[])
  return (
    <>
    <NavBar/>
     <div className='min-vh-100 mt-5'>
     <Outlet  />
     </div>
    <Footer/>
    </>
  )
}
