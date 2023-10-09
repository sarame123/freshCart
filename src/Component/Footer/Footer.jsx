import React from 'react'
import style from './Footer.module.css'
import ph1 from '../../assets/images/pngwing.com (1).png'
import ph2 from '../../assets/images/pngwing.com (2).png'
import ph3 from '../../assets/images/pngwing.com (3).png'
import ph4 from '../../assets/images/pngwing.com (4).png'
import ph from '../../assets/images/pngwing.com.png'
export default function Footer() {
  return (
    <>
      <footer className=" bg-main-light py-5 mt-5">
        <div className="container">
          <div className="footer-header">
            <h4>Get The FreshCart app</h4>
            <p>we will send you a link, open it in your phone to download app </p>
          </div>
          <div className="container">
            <div className="download-app d-flex text-align-center justify-content-between">
              <input type="email" className="form-control mb-2 me-5 w-75" placeholder="Email." />

              <button className="btn bg-main text-white w-25">Share App Link</button>
            </div>
            <div className="pay d-flex justify-content-between text-align-center align-items-center border-top border-bottom mt-4 mb-4 ">
              <div className="right d-flex">
                <h6>Payment Partners
                
                  <img src={ph1} style={{ "width": "10%" }}/>
                    <img src={ph2} style={{ "width": "10%" }}/>
                      <img src={ph3} style={{ "width": "10%" }}/>
                        <img src={ph4} style={{ "width": "10%" }}/>
                       
                        </h6>

                     
              </div>
              <div className="left">
                <p>Get deliveries with FreshCart
                  <img src={ph1} style={{ "width": "20%" }}/>
                  <img src={ph} style={{ "width": "20%" }}/>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>


    </>
  )
}
