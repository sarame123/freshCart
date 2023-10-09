import React from 'react'
import style from './Home.module.css'
import Products from '../Products/Products'
import CategoreySlider from '../CategoreySlider/CategoreySlider'
import MainSlider from '../MainSlider/MainSlider'
export default function Home() {
  return (
  <>
  <MainSlider></MainSlider>
  <br></br>
   <CategoreySlider ></CategoreySlider>
   <br/>
   <Products></Products>
  </>
  )
}
