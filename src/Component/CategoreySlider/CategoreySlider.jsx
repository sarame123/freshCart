import React from 'react'
import style from './CategoreySlider.module.css'
import Slider from "react-slick";
import { useQuery } from 'react-query';
import axios from 'axios';
export default function CategoreySlider() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    autoplayspeed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1
  };
     function gitpicture(){
      return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
     }
  let{data}= useQuery("categoreySlider", gitpicture);
  console.log(data?.data.data);
  return (
    <div className="container">
      <h3>Shop Popular Slider</h3>
      <Slider {...settings}>
      {data?.data.data?data?.data.data.map((category)=>
      <div key={category._id} >
   <div>
   <img src={category.image} className='w-100'  height={150} alt={category.name} />
   </div>
      <p className='text-main text-center col-sm-1 col-md-12'>{category.name}</p>
   </div>
  

 ):""}   </Slider></div>
  )
}
