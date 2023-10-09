import React from 'react'
import Slider from "react-slick";
import style from './MainSlider.module.css'
import img1 from '../../assets/images/slider-image-1.jpeg'
import img2 from '../../assets/images/slider-image-2.jpeg'
import img3 from '../../assets/images/slider-image-3.jpeg'
import blog1 from '../../assets/images/colorful-fruits.jpg'
import blog2 from '../../assets/images/fresh-fruit-berry.jpg'

export default function MainSlider() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplayspeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };
  return (
    <div className="container my-5">
      <div className="row gx-0 py-4">
        <div className="col-sm-9" >
          <Slider {...settings}>
            <img src={img1} height={400}  className='w-100' />
            <img src={img2} height={400}  className='w-100'/>
            <img src={img3} height={400}  className='w-100'/>
          </Slider>
        </div>

        <div className="col-sm-3" >
            <img src={blog1} className='w-100' height={200}  />
            <img src={blog2} className='w-100' height={200}   />
        </div>


      </div>
    </div>
  )
}
