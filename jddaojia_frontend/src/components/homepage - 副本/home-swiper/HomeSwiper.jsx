import React, { useEffect } from 'react';
import content from '../../../assets/img/content.jpg'
import './index.css'
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import swiper1 from '../../../assets/img/swiper1.png'
import swiper2 from '../../../assets/img/swiper2.jpg'
// import  from 'react';
// import swiper1 from '../../../assets/img/swiper1'
export default function HomeSwiper() {
    useEffect(() => {
        new Swiper(".slider-container", {
            loop: true,
            autoplay: {
                delay: 1000,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
            }
        })
    }, [])
    return (
        <div className="home-swiper">
            <div className='content'>
                <img src={content} alt="" />
            </div>
            <div className="slider-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" >
                        <img src={swiper1} alt=""  />
                    </div>
                    <div className="swiper-slide" >
                        <img src={swiper2} alt="" />
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    )
}