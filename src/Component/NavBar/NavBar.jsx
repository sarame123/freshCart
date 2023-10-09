import React, { useContext, useEffect, useState } from 'react'
import style from './NavBar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logo  from '../../assets/freshcart-logo.svg'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'

export default function NavBar() {
  let {userToken,setUserToken,userData}=useContext(UserContext);
  let { cartNums } = useContext(CartContext);
  console.log(userData);
  let navigate=useNavigate();
  function logOut(){
    localStorage.removeItem('userToken');
    setUserToken(null);
    navigate('/login');
  }
 
  return (
    <><nav  className="navbar navbar-expand-lg navbar-light bg-light p-3">
    <div  className="container">
      <Link to=''>
      <img src={logo} alt="" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {userToken!==null?<>
        <li className="nav-item">
            <Link className="nav-link " aria-current="" to='' >Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="" to='/categories' >categories</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " aria-current="" to='brands' >Brands</Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link  position-relative" to="/cart">Cart  <i class="fas fa-shopping-cart fa-lg text-main p-1"></i>
            <span
              class="badge bg-main position-absolute top-0 end-0 rounded-circle"
              >{cartNums }</span></Link>
            
          </li></>:""}
          
          
        </ul>
        
      </div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
      <li className="nav-item d-flex justify-content-center align-items-center p-2 ">
           <i className='fa-brands fa-facebook pe-2'></i>
           <i className='fa-brands fa-youtube pe-2'></i>
           <i className='fa-brands fa-instagram pe-2'></i>
           <i className='fa-brands fa-linkedin pe-2'></i>
          </li>
          
          {userToken!==null ?<>
            <li className="nav-item">
          <Link className="nav-link " aria-current="" to='/wishList' ><i className='fa fa-heart active'></i></Link>
        </li>
            <li className="nav-item">
          <Link className="nav-link " aria-current="" to='/profile' >hello</Link>
        </li>
            <li className="nav-item">
            <span className="nav-link cursor-pointer" onClick={()=>logOut()} >Logout</span>
          </li>
         
          </>
            
          :
          <><li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li></>}
        </ul>
        </div>
    </div>
  </nav></>
  )
}
