import React from 'react'
import "../Css/home.css"
import containerImg from "../Images/OBJECTS.svg"
import {CarouselWrapper} from "react-pretty-carousel"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination"
import SwiperCore, {
    Pagination
  } from 'swiper';
  
import "react-responsive-carousel/lib/styles/carousel.min.css";
import container3Img from "../Images/Group 6.svg"
import container3Imge from "../Images/Picture8.png"
import container4Img from "../Images/Group 8.svg"
import container4Imge from "../Images/Picture2.jpg"
import container5Img from "../Images/Picture11.jpg"
import container5Imge from "../Images/Picture11 1.svg"
import carouselImg1 from "../Images/Mask Group1.svg"
function Home() {


    
    return (
        <div>
        <section>
            <section className="container1">
            <div className="bgCoverImg container__flex">
              <div className="container1__left">
                  <h1> One stop for all <br /> your Care <br /> needs</h1>
                  <button className='container1__btn'>Book Appointment</button>
              </div>
              <div className="container1__right">
              <img src={containerImg} alt="" />
              </div>
            </div>
            </section>
            <section className="container2">
             <h1 className='container2__heading'>WHAT MAKES US APPART</h1>
            <CarouselWrapper items={5}  mode="gallery" showControls={false}>
                <div className='container2__flex'>
                    <img src={carouselImg1} alt="" />
                    <p>Book and track appointments <br /> hassle free</p>
                    <button>Learn More</button>
                </div>
                <div className='container2__flex'>
                    <img src={carouselImg1} alt="" />
                    <p>Book and track appointments <br /> hassle free</p>
                    <button>Learn More</button>
                </div>
                <div className='container2__flex'>
                    <img src={carouselImg1} alt="" />
                    <p>Book and track appointments <br /> hassle free</p>

                    <button>Learn More</button>
                </div>
                <div className='container2__flex'>
                    <img src={carouselImg1} alt="" />
                    <p>Book and track appointments <br /> hassle free</p>

                    <button>Learn More</button>
                </div>
                <div className='container2__flex'>
                    <img src={carouselImg1} alt="" />
                    <p>Book and track appointments <br /> hassle free</p>

                    <button>Learn More</button>
                </div>
                <div className='container2__flex'>
                    <img src={carouselImg1} alt="" />
                    <p>Book and track appointments hassle free</p>

                    <button>Learn More</button>
                </div>
                
            </CarouselWrapper>
            </section>
            <section className="container3">
                <div className="container3__left">
                    <img src={container3Img} alt="" />
                    <h2>Connect Directly to our trusted Doctor and Care Provider</h2>
                    <ul>
                        <li>Same interface whether you book your visit to doctor in-person or connect through video call</li>
                        <li>One interface to book your Lab Tests and Order Medicines from your trusted Clinic/Hospital/Pharmacy</li>
                        <li>Help doctor get better diagnosis for you by sharing your Health Monitor and Health records remotely.</li>
                    </ul>
                </div>
                <div className="container3__right">
                    <img src={container3Imge} alt="" />
                </div>
            </section>
            <section className="container4">
            <div className="container4__left">
                    <img src={container4Imge} alt="" />
                </div>
                <div className="container4__right">
                    <img src={container4Img} alt="" />    
                    <h2>Connect Directly to our trusted Doctor and Care Provider</h2>
                    <ul>
                        <li>Same interface whether you book your visit to doctor in-person or connect through video call</li>
                        <li>One interface to book your Lab Tests and Order Medicines from your trusted Clinic/Hospital/Pharmacy</li>
                        <li>Help doctor get better diagnosis for you by sharing your Health Monitor and Health records remotely.</li>
                    </ul>
                </div>
            </section>
            <section className="container5">

            <h1 className='container5__heading'>ARTICLES AND VIDEOS</h1>
                <div className="container5__content">
                 <div>
                     <img src={container5Img} alt="" />
                     <h2>Development Paediatrics</h2>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius recusandae, reprehenderit vel saepe commodi suscipit cum  </p>
                     <button>Read More</button>
                 </div>
                 <div>
                     <img src={container5Imge} alt="" />
                     <h2>Corona Virus</h2>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, voluptatibus adipisci, ea doloremque velit eius, sapiente fugit  </p>
                     <button>Read More</button>
                 </div>
                 <div>
                     <img src={container5Img} alt="" />
                     <h2>Physiotherapy</h2>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque temporibus est quasi magnam, </p>
                     <button>Read More</button>
                 </div>
                </div>
            </section>
            <section className="container6">
            <Swiper spaceBetween={400} className="mySwiper" pagination={true} slidesPerView={3}   >
            <SwiperSlide>
            <div className='container6__contents ' >
              <img src="" alt="" />
              <div className='container6_content'>
              <h2>Raghav Dixit</h2>
              <h3>-Physiotherapy Patient</h3>
              </div>
              <p>Shewa Clinic is providing wonderful treatment to the people. The physiotherapy department have given me enormous relief by their therapy plan in the movement of my  </p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='container6__contents ' >
              <img src="" alt="" />
              <div className='container6_content'>
              <h2>Raghav Dixit</h2>
              <h3>-Physiotherapy Patient</h3>
              </div>
              <p>Shewa Clinic is providing wonderful treatment to the people. The physiotherapy department have given me enormous relief by their therapy plan in the movement of my  </p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='container6__contents ' >
              <img src="" alt="" />
              <div className='container6_content'>
              <h2>Raghav Dixit</h2>
              <h3>-Physiotherapy Patient</h3>
              </div>
              <p>Shewa Clinic is providing wonderful treatment to the people. The physiotherapy department have given me enormous relief by their therapy plan in the movement of my  </p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='container6__contents ' >
              <img src="" alt="" />
              <div className='container6_content'>
              <h2>Raghav Dixit</h2>
              <h3>-Physiotherapy Patient</h3>
              </div>
              <p>Shewa Clinic is providing wonderful treatment to the people. The physiotherapy department have given me enormous relief by their therapy plan in the movement of my  </p>
            </div>
            </SwiperSlide>
            </Swiper>
            </section>
        </section>
        </div>
    )
}

export default Home
