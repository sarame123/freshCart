import React from 'react'
import style from './NotFound.module.css'
import { Link } from 'react-router-dom'
import img from '../../assets/images/error.svg'
export default function NotFound() {
  return (
    <>
      <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
                <img src={img} className='w-100' />
                <p class="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <Link to="/" class="btn btn-primary">Go Home</Link>
            </div>
        </div>
    </>
  )
}
