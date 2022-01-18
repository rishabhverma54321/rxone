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
import Logo from "../Images/Picture1.png"
import container3Img from "../Images/Group 6.svg"
import container3Imge from "../Images/Picture8.png"
import container4Img from "../Images/Group 8.svg"
import container4Imge from "../Images/Picture2.jpg"
import container5Img from "../Images/Picture11.jpg"
import container5Imge from "../Images/Picture11 1.svg"
import carouselImg1 from "../Images/Mask Group1.svg"


function Home() {
    SwiperCore.use([Pagination]);

    
    return (
        <div>
        <section>
            <section className="container1">
            <div className="bgCoverImg container__flex">
              <div className="container1__left">
                  <h1> One stop for all <br /> your Care <br /> needs</h1>
                  <button className=' btn container1__btn'>Book Appointment</button>
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
                    <button className='btn'>Learn More</button>
                </div>
                <div className='container2__flex'>
                    <img src={carouselImg1} alt="" />
                    <p>Book and track appointments <br /> hassle free</p>
                    <button className='btn'>Learn More</button>
                </div>
                <div className='container2__flex'>
                    <img src={carouselImg1} alt="" />
                    <p>Book and track appointments <br /> hassle free</p>

                    <button className='btn'>Learn More</button>
                </div>
                <div className='container2__flex'>
                    <img src={carouselImg1} alt="" />
                    <p>Book and track appointments <br /> hassle free</p>

                    <button className='btn'>Learn More</button>
                </div>
                <div className='container2__flex'>
                    <img src={carouselImg1} alt="" />
                    <p>Book and track appointments <br /> hassle free</p>

                    <button className='btn'>Learn More</button>
                </div>
                <div className='container2__flex'>
                    <img src={carouselImg1} alt="" />
                    <p>Book and track appointments hassle free</p>

                    <button className='btn'>Learn More</button>
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
                     <button className='btn'>Read More</button>
                 </div>
                 <div>
                     <img src={container5Imge} alt="" />
                     <h2>Corona Virus</h2>
                     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, voluptatibus adipisci, ea doloremque velit eius, sapiente fugit  </p>
                     <button className='btn'>Read More</button>
                 </div>
                 <div>
                     <img src={container5Img} alt="" />
                     <h2>Physiotherapy</h2>
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque temporibus est quasi magnam, </p>
                     <button className='btn'>Read More</button>
                 </div>
                </div>
            </section>
            <section className="container6">
            <Swiper className="mySwiper" pagination={true} slidesPerView={2}  centeredSlides= {true}  >
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
            <section className="container7">
                <div className="container7__content__one">
                <div><img src={Logo} alt="" /></div>
                    <p>Building Simple, Easy to Use and Effective Digital Health solutions for users, to solve care accessibility challenge in India and Worldwide.</p>
                </div>
                <div className="container7__content__two">
                    <div><img src={Logo} alt="" /></div>
                    <ul>
                        <li>About Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Usage</li>
                        <li>Contect Us</li>
                    </ul>
                </div>
                <div className="container7__content__three">
                    <h3>For Patients</h3>
                    <ul>
                        <li>Book Appointment</li>
                        <li>Book Lab Test</li>
                        <li>Buy Medicines</li>
                        <li>Read Health Article</li>
                        <li>Feedback</li>
                    </ul>
                </div>
                <div className="container7__content__four">
                    <h3>For Providers</h3>
                    <ul>
                        <li>Provider Login</li>
                        <li>Doctor Login</li>
                        <li>RxOne Platform</li>
                    </ul>
                </div>
                <div className="container7__contents">
                    <h3>Social</h3>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </section>
        </section>
        </div>
    )
}

export default Home
